window.addEventListener("scroll", function(){
    scrollY = window.scrollY;
    if(scrollY >= 100){
        console.log("active");
    }else{
        console.log("deactive");

    }
    console.log(scrollY);
})