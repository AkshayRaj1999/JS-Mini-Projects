const switcher = document.getElementById("theme-switcher");

switcher.addEventListener('click',themeSwitcher);

function themeSwitcher(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        switcher.innerHTML = "Dark"
    }
    else{
        switcher.innerHTML = "Light"
    }
}