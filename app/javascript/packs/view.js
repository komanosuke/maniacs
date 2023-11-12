const checkbox = document.getElementsByClassName('delete-check');
const check_all = document.getElementById('check-all');
const data = document.getElementById('delete_list');
const delete_btn = document.getElementById('delete-btn');

check_all.checked = false;
for(let i = 0;i < checkbox.length;i++){
    checkbox[i].checked = false;
}

check_all.addEventListener('click', function(e) {
    if(e.target.checked){
        for(let i = 0;i < checkbox.length;i++){
            checkbox[i].checked = true;
        }
    }else{
        for(let i = 0;i < checkbox.length;i++){
            checkbox[i].checked = false;
        }
    }
    checkId();
});

for(let i = 0; i < checkbox.length; i++){
	checkbox[i].addEventListener('click', function() {
		checkId();
	});
}


function checkId(){
	let data_list = ''
	for(let i = 0; i < checkbox.length; i++){
		if(checkbox[i].checked){
			data_list += i + ',';
		}
	}
	data.value = data_list;
	// console.log(data_list);
    if(data.value == ''){
        delete_btn.style.display = 'none';
    } else {
        delete_btn.style.display = 'block';
    }
}