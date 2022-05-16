$(document).ready(function(){
	// $('.nav').sticky();

	$("#catg1").on("change", function(){
				var mainID = $("#catg1").val();
				var getURL     = "action.php?main_id=" + mainID;
				$.get(getURL, function(data, status){
					$("#sub_catg_select").html(data);
				});
	});

	$("#catg2").on("change", function(){
		var mainID2 = $("#catg2").val();
		var getURL     = "action.php?main_id=" + mainID2;
		$.get(getURL, function(data, status){
			$("#sub_catg_select2").html(data);
			$("#subject_select").html("<option disabled selected>Select Sub Categary First!.</option>");
		});
	});

	$("#sub_catg_select2").on("change", function(){
		var mainID3 = $("#sub_catg_select2").val();
		console.log(mainID3);
		var getURL     = "action.php?sub_main_id=" + mainID3;
		$.get(getURL, function(data, status){
			$("#subject_select").html(data);
			console.log(data);
		});
	});


});

// window.addEventListener("scroll", function(){
// 	var header = document.querySelector("header");
// 	header.classList.toggle("sticky", window.scrollY > 15);
	

// })


// Sticky NavBar
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// Responsive Nav Bar


function openNav() {
	document.getElementById("nav-ul").style.left="0";
  }
  
function closeNav() {
	document.getElementById("nav-ul").style.left = "-100%";
  }



// typed JS in Home Page 
var typed = new Typed(".auto-type", {
	strings: ["Model Papers", "Pass Papers", "Answer Sheets", "Marking Schemas", "Notes", "Teachers guides", "Sylabus"],
	typeSpeed: 80,
	backSpeed: 80,
	loop: true

})