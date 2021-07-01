let time = document.querySelector(".time")
time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())
time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()))

let timeSetter = setInterval(() => {
    time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())
    time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()))
}, 60000);

document.querySelector(".desktop").onclick = function () {
    document.querySelectorAll(".icon").forEach((e) => {
        e.classList.remove("selected")
    })
}

document.querySelectorAll(".icon").forEach((icon) => {
    icon.onclick = function () {
        setTimeout(() => {
            document.querySelectorAll(".icon").forEach((e) => {
                e.classList.remove("selected")
            })
            this.classList.add("selected")
        }, 1);
    }
})

document.querySelector(".max").onclick = function () {
    document.querySelector(".window").classList.toggle("maximized")
}

document.querySelector(".min").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".readme").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".cls").onclick = function () {
    document.querySelector(".readme").style.display = "none"
    document.querySelector(".window").style.display = "none"
}

document.querySelector(".muhammad-ali").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://mu-ali.github.io/")
}

document.querySelector(".my-computer").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://github.com/mu-ali/")
}

document.querySelector(".my-network").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://twitter.com/mu_ali_c/")
}

document.querySelector(".note-pad").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    document.querySelector(".readme").style.display = "initial"
    document.querySelector(".window").style.display = "initial"
    document.querySelector(".readme").classList.add("active")
    document.querySelector(".window").classList.remove("minimized")
}

document.querySelector("textarea").value = "Windows 7 (GUI) (HTML, CSS, JAVA). Windows 10 is owned by Microsoft, All rights to the logos and such belong to them and not to me! This is only a recreation of the operating system. \n\nFeatures:\n- Windows XP (GUI)\n- Desktop icons are clickable. Double clicking them takes you to some of my links (Portfolio, Github, Twitter).\n- Time in system-tray is your system's time.\n- This window is draggable, closable, minimizable and maximizable. Try it.\n- Start Menu is also there (Click on the start button). \n                 ______________________________\n\n                      © 2021 - Muhammad Ali\n             Redesigned and Developed By Muhammad Ali\n                 ______________________________\n\nDo not copy without permission because It took me several weeks to complete this project. Kindly email me at alichishti1225@gmail.com if you want to use the project.\n"


dragWindow(document.querySelector(".window"));
function dragWindow(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    document.querySelector(".title-bar").onmousedown = dragging

    function dragging(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = stopDragging;
        document.onmousemove = draggedWindow;
    }

    function draggedWindow(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}