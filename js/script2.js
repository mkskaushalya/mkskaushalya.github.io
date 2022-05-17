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



// Animation JS

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
