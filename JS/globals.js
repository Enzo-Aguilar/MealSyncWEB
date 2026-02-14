(function ()  {
  const root = document.documentElement;
  const toggleButton = document.querySelector("#themeToggle");
  const logoImg = document.querySelector(".Logo");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    updateButtonEmoji(theme);
    updateLogo(theme);
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") || "ligth";
    const newTheme = current === "dark" ? "ligth":"dark";
    applyTheme(newTheme);
  }

  function updateButtonEmoji(theme) {
    if (theme === "dark") {
      toggleButton.textContent = "❂";
    } else {
      toggleButton.textContent = "☽";
    }
  }

  function updateLogo(theme){
    if(!logoImg)return;

    if(theme == "dark"){
      logoImg.src = "/IMG/MealSyncPreto.png";
    }else{
      logoImg.src = "/IMG/MealSyncBranco.png";
    }
  }
  function initTheme() {
    const saved  = localStorage.getItem("theme");
    if(saved){
      applyTheme(saved);
    }else{
      applyTheme("light");
    }
  }

  window.toggleTheme = toggleTheme;
  window.initTheme = initTheme;
})();

(function(){

  function softReload() {
    window.scrollTo(0,0);
  }

  if(typeof initTheme === "function") {
    initTheme();
  }

  window.softReload = softReload;
})();