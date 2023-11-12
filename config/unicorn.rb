worker_processes 8

pid "/var/run/unicorn.pid"
listen "/var/tmp/unicorn.sock"

# stdout_path "./log/unicorn.stdout.log"
# stderr_path "./log/unicorn.stderr.log"
# stdout_path nil
# stderr_path nil

stdout_path "/dev/stdout"
stderr_path "/dev/stderr"