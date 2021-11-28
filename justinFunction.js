/* TESTIMONIAL */

function imgBig(imgsrc){
	imgsrc.style.height = "300px";
	imgsrc.style.width = "300px";
}
function imgNorm(imgsrc){
	imgsrc.style.height = "200px";
	imgsrc.style.width = "200px";
}

/* JOIN US */

var execute = 0;

function onFocusHandler(x){
	var deftext = ["As per Student Card", "e.g., johndoe123@gmail.com", "TPxxxxxx", "e.g., APU1F2103SE"];
	for (i = 0; i < deftext.length; i++){
		if (x.value == deftext[i]){
			x.value="";
			x.style.color="#000000";
			x.style.fontStyle="normal";
			execute += 1;	
		}
	}
}
/* 	Have 4 default textBox Input 
	For each onclick, will remove default text
	So, if user need to modify his answer again, 
	when user click, the ans he entered won't go blank*/
function execute4(x){
	if (execute <= 4){
		onFocusHandler(x)
	}
}
function submitMsg(){
	var form, name, email, studID, intakeCd;
	form = document.getElementById("form1");
	name = form.elements["nm"].value.trim();
	email = form.elements["em"].value.trim();
	studID = form.elements["sid"].value.trim();
	intakeCd = form.elements["intCd"].value.trim();
	if (name == "As per Student Card" || name == ""){
		window.alert("The Full Name field is not filled. Try Again.")
		return false;
	}
	else if (email == "e.g., johndoe123@gmail.com" || email == ""){
		window.alert("The Email field is not filled. Try Again.")
		return false;
	}
	else if (email.endsWith(".com") == false || email.includes("@") == false){
		window.alert("Invalid Email. Try Again.");
		return false;
	}
	else if (studID == "TPxxxxxx" || studID == ""){
		window.alert("The Student ID field is not filled. Try Again.")
		return false;
	}
	else if (studID.startsWith("TP") == false || isNaN(studID.slice(2)) || studID.length != 8){
		window.alert("Invalid Student ID. Try Again.");
		return false;
	}
	else if (intakeCd == "e.g., APU1F2103SE" || intakeCd == ""){
		window.alert("The Intake Code field is not filled. Try Again.")
		return false;
	}
	window.alert("Thanks " + name + " for signing up with APU Taekwondo Club. Please check your inbox at " + email + " for a notification email.");
	return true;
}
function txtNmDefLook(x){
	x.value="As per Student Card";
	x.style.color="#CCCCCC";
	x.style.fontStyle="italic";
}
function txtEmDefLook(x){
	x.value="e.g., johndoe123@gmail.com";
	x.style.color="#CCCCCC";
	x.style.fontStyle="italic";
}
function txtStudIDDefLook(x){
	x.value="TPxxxxxx";
	x.style.color="#CCCCCC";
	x.style.fontStyle="italic";
}
function txtIntCdDefLook(x){
	x.value="e.g., APU1F2103SE";
	x.style.color="#CCCCCC";
	x.style.fontStyle="italic";
}