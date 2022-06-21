const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick(){
    // const clickedClass = "clicked"
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);









// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }


// function handleWindowCopy(){
//     alert("copier!")
// }


// function handleWindowOffline(){
//     alert("SOS no WiFI");
// }

// function handleWindowOnline(){
//     alert("ALL Good!")
// }



// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline)
// window.addEventListener("online", handleWindowOnline)