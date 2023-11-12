variable "AWS_ACCESS_KEY_ID" {}
variable "AWS_SECRET_ACCESS_KEY" {}
variable "RAILS_MASTER_KEY" {}
variable "SECRET_KEY_BASE" {}
variable "API_KEY" {}
variable "SMTP_USERNAME" {}
variable "SMTP_PASSWORD" {}
variable "TOMAIL" {}
variable "MYSQL_DATABASE" {}
variable "MYSQL_PASSWORD" {}
variable "MYSQL_USERNAME" {}
variable "MYSQL_HOST" {}

provider "aws" {
  access_key = var.AWS_ACCESS_KEY_ID
  secret_key = var.AWS_SECRET_ACCESS_KEY
  region  = "us-west-1"
}

resource "aws_ecs_cluster" "my_cluster" {
  name = "portfolio-cluster"
}

resource "aws_ecs_task_definition" "my_task" {
  family                   = "portfolio"
  network_mode             = "awsvpc"
  cpu                      = "1024" # 1 vCPU
  memory                   = "3072" # 3 GB
  execution_role_arn       = "arn:aws:iam::345762154890:role/ecsTaskExecutionRole"
  requires_compatibilities = ["FARGATE"]

  container_definitions = jsonencode([
    {
      name           = "rails",
      image          = "345762154890.dkr.ecr.us-west-1.amazonaws.com/portfolio-web",
      cpu            = 768,
      essential      = true,
      logConfiguration = {
        logDriver = "awslogs",
        "options" = {
          "awslogs-group"         = "/ecs/portfolio",
          "awslogs-region"        = "us-west-1",
          "awslogs-stream-prefix" = "ecs",
          "awslogs-create-group"  = "true"
        }
      },
      portMappings = [{
        containerPort = 3000,
        hostPort      = 3000,
        protocol      = "tcp"
      }],
      "environment" = [
        {"name" = "RAILS_ENV",        "value" = "production"},
        {"name" = "RAILS_MASTER_KEY", "value" = var.RAILS_MASTER_KEY },
        {"name" = "SECRET_KEY_BASE",  "value" = var.SECRET_KEY_BASE },
        {"name" = "API_KEY",          "value" = var.API_KEY },
        {"name" = "SMTP_USERNAME",    "value" = var.SMTP_USERNAME },
        {"name" = "SMTP_PASSWORD",    "value" = var.SMTP_PASSWORD },
        {"name" = "TOMAIL",           "value" = var.TOMAIL },
        {"name" = "MYSQL_DATABASE",   "value" = var.MYSQL_DATABASE },
        {"name" = "MYSQL_PASSWORD",   "value" = var.MYSQL_PASSWORD },
        {"name" = "MYSQL_USERNAME",   "value" = var.MYSQL_USERNAME },
        {"name" = "MYSQL_HOST",       "value" = var.MYSQL_HOST },
      ],
    },
    {
      name         = "nginx",
      image        = "345762154890.dkr.ecr.us-west-1.amazonaws.com/portfolio-nginx",
      cpu          = 256,
      essential    = true,
      "portMappings" =  [
        {
          "containerPort" =  80,
          "hostPort"      = 80,
          "protocol"      = "tcp"
        }
      ],
      "logConfiguration" =  {
        "logDriver" =  "awslogs",
        "options" =  {
          "awslogs-group"         = "/ecs/portfolio",
          "awslogs-region"        = "us-west-1",
          "awslogs-stream-prefix" = "ecs",
          "awslogs-create-group"  = "true"
        }
      }
    }
  ])
}

resource "aws_ecs_service" "my_service" {
  name            = "portfolio-service"
  cluster         = aws_ecs_cluster.my_cluster.id
  task_definition = aws_ecs_task_definition.my_task.arn
  launch_type     = "FARGATE"
  desired_count   = 1

  network_configuration {
    subnets         = ["subnet-04a9c3f01d391d924", "subnet-069d606984969a8c9"]
    security_groups = ["sg-0c44a7442335c9318"]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = "arn:aws:elasticloadbalancing:us-west-1:345762154890:targetgroup/portfolio-tg/a78f079856f8f5d5"
    container_name   = "nginx"
    container_port   = 80
  }
}