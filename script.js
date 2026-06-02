var icon = document.getElementById("icon");

// 👉 Load saved theme when page opens
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-theme");
    icon.src = "images/pic19.png";
}else{
    document.body.classList.remove("dark-theme");
    icon.src = "images/pic18.png";
}

// 👉 Toggle theme on click
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/pic19.png";
        localStorage.setItem("theme", "dark");   // save
    }else{
        icon.src = "images/pic18.png";
        localStorage.setItem("theme", "light");  // save
    }
}