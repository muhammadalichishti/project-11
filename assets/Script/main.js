(function () {
    const startMenu = document.querySelector(".start-menu");
    const startMenuBtn = document.querySelector(".button-start-menu");
    const date = new Date();
    const time = date.toLocaleTimeString('pt-BR', {
    });
    var deskItem = document.querySelectorAll(".desk-item");


    deskItem.forEach(item => {


;
    })




    function hideLoader() {
        loader.style.display = "none"
    }

    function toggleMenu() {
        startMenu.classList.toggle('active');
    }

    setTimeout(hideLoader, 3000);

    startMenuBtn.addEventListener("click", toggleMenu);
    document.addEventListener("click", function (e) {
        e.preventDefault();
        let el = e.target;
        if (el.parent !== startMenu && el !== startMenuBtn && !startMenu.contains(e.target)) {
            startMenu.classList.remove('active');
        }
    })

    timeEl.textContent = time;
})()