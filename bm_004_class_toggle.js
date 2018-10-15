var class_toggle_str = prompt("Please enter the DOM id (did) and Class Name (cn)", "{\"did\":\"secure_button\",\"cn\": \"disabled\"}");
var class_toggle_json = JSON.parse(class_toggle_str);
console.log(class_toggle_json);
try{
	document.getElementById(class_toggle_json.did).classList.toggle(class_toggle_json.cn);
}catch(err){
	console.log("class toggle error:");
	console.log(err);
}
