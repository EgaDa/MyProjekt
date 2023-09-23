let switchMode = document.getElementById("switcMode");

switchMode.onclick = function () {
    let  theme = document.getElementById('theme')

    if (theme.getAttribute("href") == "light-theme.css"){
        theme.href = "dark-theme.css"
    }else{
        theme.getAttribute("href")
        theme.href = "light-theme.css"
    }
}