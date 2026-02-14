document.addEventListener("DOMContentLoaded", () => {
    initTheme();

    const btn = document.getElementById("themeToggle");
    if(btn){
    btn.addEventListener("click", toggleTheme);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".Logo")

    if(logo){
        logo.addEventListener("click", (e) => {
            e.preventDefault();
            softReload();
        })
    }
});
