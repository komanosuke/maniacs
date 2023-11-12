let pageTop = document.getElementById('page-top');
pageTop.addEventListener('click', function() {
	$('html, body').animate({scrollTop:0},400);
});

let costs = document.getElementsByClassName('cost');
let total = document.getElementById('total');
let my_costs = document.getElementsByClassName('my_cost');
let my_total = document.getElementById('my_total');

//税金を定義
let tax = 0.25;
let income = document.getElementsByClassName('income_ex');
costs[7].textContent = parseInt(income[0].textContent) * tax;
my_costs[7].textContent = parseInt(income[1].textContent) * tax;

let tax_set = document.getElementById('tax_set');
tax_set.addEventListener('change', function(e) {
	let value = parseInt(e.target.value);
	if (isNaN(value)) {
		value = 0;
		e.target.value = value;
	} else {
		if (value < parseInt(e.target.min)) {
			e.target.value = e.target.min;
			value = e.target.min;
		} else if (value > parseInt(e.target.max)) {
			e.target.value = e.target.max;
			value = e.target.max;
		} else {
			e.target.value = value;
		}
		tax = value/100;
		sumup();
	}
});

let total_num = 0;
for(let i = 0; i < costs.length; i++){
	total_num += parseInt(costs[i].textContent);
}
total.textContent = total_num;


let my_total_num = 0;
for(let i = 0; i < my_costs.length; i++){
	my_total_num += parseInt(my_costs[i].textContent);
}
my_total.textContent = my_total_num;

const gene_cost = document.getElementsByClassName('gene_cost_input');
const gene_cost_yaer = document.getElementsByClassName('gene_cost_year');
let my_lifecost_total = document.getElementById('my_lifecost_total');
let my_year_total = document.getElementById('my_year_total');
let gene_costs = [0,0,0,0,0];
for(let i = 0; i < gene_cost.length; i++){
	gene_cost[i].addEventListener('change', function(e) {
		gene_costs[i] = parseInt(e.target.value);
		let value = parseInt(e.target.value);
		if (isNaN(value)) {
		value = 0;
		e.target.value = value;
	} else {
			if (value < 0) {
				e.target.value = 0;
				value = 0;
			} else if (value > 1000000000) {
				e.target.value = 1000000000;
				value = 1000000000;
			} else {
				e.target.value = value;
			}
			my_lifecost_total.textContent = gene_costs.reduce((sum, element) => sum + element, 0);
			gene_cost_yaer[i].textContent = gene_costs[i] * 10;
			sumup();
		}
	});
}

let lifeincome = document.getElementsByClassName('lifeincome');
let cost = document.getElementById('cost');
let difference = document.getElementById('difference');



let basic_month = document.getElementsByClassName('basic_month');
let basic_cost = document.getElementsByClassName('basic_cost');
for(let i = 0; i < basic_month.length; i++){
	basic_month[i].addEventListener('change', function(e) {
		let value = parseInt(e.target.value);
		if (isNaN(value)) {
		value = 0;
		e.target.value = value;
	} else {
			if (value < 0) {
				e.target.value = 0;
				value = 0;
			} else if (value > 10000000) {
				e.target.value = 10000000;
				value = 10000000;
			} else {
				e.target.value = value;
			}
			basic_cost[i].textContent = value * 12;
			sumup();
		}
	});
}

let basic_total = document.getElementById('basic_total');
let basic_total_month = document.getElementById('basic_total_month');



let option = document.getElementsByClassName('option');
let default_mode = document.getElementById('default_mode');
default_mode.addEventListener('click', function(e) {
	for(let i = 0; i < option.length; i++){
		option[i].style.background = '#fff';
	}
	for(let i = 1; i < 5; i++){
		my_costs[i].textContent = 0;
	}
	marry_check = false;
	child_count = 0;
	house_check = false;
	car_check = false;
	if($("#login_checker").text() == "logged_in"){
		option_marriage.value = 0;
		option_child.value = 0;
		option_house.value = 0;
		option_car.value = 0;
		option_submit.click();
	}
	// house_count = 0;
	// car_count = 0;
	option[1].textContent = '子ども';
	option[2].textContent = '住宅';
	option[3].textContent = '車';
	sumup();
});


let marriage_set = document.getElementById('marriage_set');
let marriage_set_value = parseInt(marriage_set.value);
marriage_set.addEventListener('change', function(e) {
	let value = parseInt(e.target.value);
	if (isNaN(value)) {
		value = 0;
		e.target.value = value;
	} else {
		if (value < parseInt(e.target.min)) {
			e.target.value = e.target.min;
			value = e.target.min;
		} else if (value > parseInt(e.target.max)) {
			e.target.value = e.target.max;
			value = e.target.max;
		} else {
			e.target.value = value;
		}
		marriage_set_value = value;
		if(marry_mode == true){
			my_costs[1].textContent = marriage_set_value;
		}
		sumup();
	}
});
let marry_mode = document.getElementById('marry_mode');
let marry_check = false;
marry_mode.addEventListener('click', function(e) {
	if(marry_check == false){
		option[0].style.background = 'orange';
		my_costs[1].textContent = marriage_set_value;
		sumup();
		marry_check = true;
		if($("#login_checker").text() == "logged_in"){
			option_marriage.value = 1;
			option_submit.click();
		}
	} else {
		option[0].style.background = '#fff';
		sumup();
		// my_costs[1].textContent = 0;
		marry_check = false;
		if($("#login_checker").text() == "logged_in"){
			option_marriage.value = 0;
			option_submit.click();
		}
	}
});

let child_set = document.getElementById('child_set');
let child_mode = document.getElementById('child_mode');
let child_count = 0;
child_mode.addEventListener('click', function(e) {
	option[1].style.background = 'orange';
	if(child_count < 10){
		child_count++;
	}
	option[1].textContent = '子ども' + child_count;
	
	if($("#login_checker").text() == "logged_in"){
		option_child_value = parseInt(option_child.value);
		if(option_child_value < 10){
			option_child.value = option_child_value + 1;
			option_submit.click();
		} else {
			alert('申し訳ありません。上限は10人に設定されています。');
		}
	}
	sumup();
});
child_set.addEventListener('change', function(e) {
	let value = parseInt(e.target.value);
	if (isNaN(value)) {
		value = 0;
		e.target.value = value;
	} else {
		if (value < parseInt(e.target.min)) {
			e.target.value = e.target.min;
			value = e.target.min;
		} else if (value > parseInt(e.target.max)) {
			e.target.value = e.target.max;
			value = e.target.max;
		} else {
			e.target.value = value;
		}
		child_set_value = value;
		if(child_mode == true){
			my_costs[2].textContent = child_set_value;
		}
		sumup();
	}
});


let house_set = document.getElementById('house_set');
let house_mode = document.getElementById('house_mode');
let house_check = false;
house_mode.addEventListener('click', function(e) {
	if(house_check == false){
		option[2].style.background = 'orange';
		my_costs[3].textContent = parseInt(house_set.value);
		sumup();
		house_check = true;
		if($("#login_checker").text() == "logged_in"){
			option_house.value = 1;
			option_submit.click();
		}
	} else {
		option[2].style.background = '#fff';
		sumup();
		// my_costs[3].textContent = 0;
		house_check = false;
		if($("#login_checker").text() == "logged_in"){
			option_house.value = 0;
			option_submit.click();
		}
	}
});
house_set.addEventListener('change', function(e) {
	let value = parseInt(e.target.value);
	if (isNaN(value)) {
		value = 0;
		e.target.value = value;
	} else {
		if (value < parseInt(e.target.min)) {
			e.target.value = e.target.min;
			value = e.target.min;
		} else if (value > parseInt(e.target.max)) {
			e.target.value = e.target.max;
			value = e.target.max;
		} else {
			e.target.value = value;
		}
		house_set_value = value;
		if(house_mode == true){
			my_costs[3].textContent = house_set_value;
		}
		sumup();
	}
});

let car_set = document.getElementById('car_set');
let car_mode = document.getElementById('car_mode');
let car_check = false;
car_mode.addEventListener('click', function(e) {
	if(car_check == false){
		option[3].style.background = 'orange';
		my_costs[4].textContent = parseInt(car_set.value);
		sumup();
		car_check = true;
		if($("#login_checker").text() == "logged_in"){
			option_car.value = 1;
			option_submit.click();
		}
	} else {
		option[3].style.background = '#fff';
		sumup();
		// my_costs[4].textContent = 0;
		car_check = false;
		if($("#login_checker").text() == "logged_in"){
			option_car.value = 0;
			option_submit.click();
		}
	}
});
car_set.addEventListener('change', function(e) {
	let value = parseInt(e.target.value);
	if (isNaN(value)) {
		value = 0;
		e.target.value = value;
	} else {
		if (value < parseInt(e.target.min)) {
			e.target.value = e.target.min;
			value = e.target.min;
		} else if (value > parseInt(e.target.max)) {
			e.target.value = e.target.max;
			value = e.target.max;
		} else {
			e.target.value = value;
		}
		car_set_value = value;
		if(car_mode == true){
			my_costs[4].textContent = car_set_value;
		}
		sumup();
	}
});

insurance_set.addEventListener('change', function(e) {
	let value = parseInt(e.target.value);
	if (isNaN(value)) {
		value = 0;
		e.target.value = value;
	} else {
		if (value < parseInt(e.target.min)) {
			e.target.value = e.target.min;
			value = e.target.min;
		} else if (value > parseInt(e.target.max)) {
			e.target.value = e.target.max;
			value = e.target.max;
		} else {
			e.target.value = value;
		}
		insurance_set_value = value;
		my_costs[5].textContent = insurance_set_value;
		sumup();
	}
});

after_retire_set.addEventListener('change', function(e) {
	let value = parseInt(e.target.value);
	if (isNaN(value)) {
		value = 0;
		e.target.value = value;
	} else {
		if (value < parseInt(e.target.min)) {
			e.target.value = e.target.min;
			value = e.target.min;
		} else if (value > parseInt(e.target.max)) {
			e.target.value = e.target.max;
			value = e.target.max;
		} else {
			e.target.value = value;
		}
		after_retire_set_value = value;
		my_costs[6].textContent = after_retire_set_value;
		sumup();
	}
});

//オプションの認識
if($("#login_checker").text() == "logged_in"){
	if(option_marriage.value != 0){
		marry_mode == true;
		option[0].style.background = 'orange';
		my_costs[1].textContent = parseInt(marriage_set.value);
	}
	if(option_child.value != 0){
		child_mode == true;
		option[1].style.background = 'orange';
		option[1].textContent = '子ども' + option_child.value;
		my_costs[2].textContent = parseInt(child_set.value) * parseInt(option_child.value);
	}
	if(option_house.value != 0){
		house_mode == true;
		option[2].style.background = 'orange';
		my_costs[3].textContent = parseInt(house_set.value);
	}
	if(option_car.value != 0){
		car_mode = true;
		option[3].style.background = 'orange';
		my_costs[4].textContent = parseInt(car_set.value);
	}
}

// let house_set = document.getElementById('house_set');
// let house_mode = document.getElementById('house_mode');
// let house_check = false;
// house_mode.addEventListener('click', function(e) {
// 	if(house_check == false){
// 		option[2].style.background = 'orange';
// 		my_costs[3].textContent = house_set.value;
// 		sumup();
// 		house_check = true;
// 	} else {
// 		option[2].style.background = '#fff';
// 		my_costs[3].textContent = 0;
// 		sumup();
// 		house_check = false;
// 	}
// });

// let car_set = document.getElementById('car_set');
// let car_mode = document.getElementById('car_mode');
// let car_check = false;
// car_mode.addEventListener('click', function(e) {
// 	if(car_check == false){
// 		option[3].style.background = 'orange';
// 		my_costs[4].textContent = car_set.value;
// 		sumup();
// 		car_check = true;
// 	} else {
// 		option[3].style.background = '#fff';
// 		my_costs[4].textContent = 0;
// 		sumup();
// 		car_check = false;
// 	}
// });


// let care_mode = document.getElementById('care_mode');
// let care_check = false;
// care_mode.addEventListener('click', function(e) {
// 	if(care_check == false){
// 		option[4].style.background = 'orange';
// 		sumup();
// 		care_check = true;
// 	} else {
// 		option[4].style.background = '#fff';
// 		sumup();
// 		care_check = false;
// 	}
// });



function sumup(){
	let month_sum = 0;
	let year_sum = 0;
	for(let i = 0; i < gene_cost_yaer.length; i++){
		gene_cost_yaer[i].textContent = gene_cost[i].value * 10;
		month_sum += parseInt(gene_cost[i].value);
		year_sum += parseInt(gene_cost_yaer[i].textContent);
	}
	my_lifecost_total.textContent = month_sum;
	my_year_total.textContent = year_sum;
	income[1].textContent = year_sum;
	for(let i = 0; i < lifeincome.length; i++){
		lifeincome[i].textContent = year_sum;
	}
	my_costs[7].textContent = parseInt(income[1].textContent) * tax;

	let basic_year_total = 0;
	for(let i = 0; i < basic_cost.length; i++){
		basic_cost[i].textContent = basic_month[i].value * 12;
		basic_year_total += parseInt(basic_cost[i].textContent);
	}
	basic_total.textContent = basic_year_total;
	basic_total_month.textContent = basic_year_total/12;
	my_costs[0].textContent = basic_year_total * 42;
	if(marry_check == true){
		if(my_costs[1].textContent == marriage_set.value){
			my_costs[1].textContent = 0;
		} else {
			my_costs[1].textContent = marriage_set.value;
		}
	}
	if(child_count != 0){
		my_costs[2].textContent = parseInt(child_set.value) * child_count;
	}
	if(house_check == true){
		if(my_costs[3].textContent == house_set.value){
			my_costs[3].textContent = 0;
		} else {
			my_costs[3].textContent = house_set.value;
		}
	}
	if(car_check == true){
		if(my_costs[4].textContent == car_set.value){
			my_costs[4].textContent = 0;
		} else {
			my_costs[4].textContent = car_set.value;
		}
	}
	my_costs[5].textContent = insurance_set.value;
	my_costs[6].textContent = after_retire_set.value;

	let my_total_num = 0;
	for(let i = 0; i < my_costs.length; i++){
		// console.log(my_costs[i].textContent);
		my_total_num += parseInt(my_costs[i].textContent);
	}
	my_total.textContent = my_total_num;
	// console.log(my_total_num);

	// 最後
	cost.textContent = my_total.textContent;
	diff = parseInt(year_sum) - parseInt(cost.textContent)
	if(diff < 0){
		difference.textContent = '不足額 = ' + -diff;
	} else {
		difference.textContent = '足りている金額 = ' + diff;
	}
	
}
sumup();