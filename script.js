document.addEventListener("DOMContentLoaded", () => {
    // Reloj en tiempo real optimizado con requestAnimationFrame
    let clockContainer = document.getElementById("clock");
    if (!clockContainer) {
        clockContainer = document.createElement("div");
        clockContainer.id = "clock";
        clockContainer.style.bottom = "20px";
        clockContainer.style.left = "10px";
        clockContainer.style.padding = "10px 15px";
        clockContainer.style.position = "fixed";
        document.body.appendChild(clockContainer);
    }
    function updateClock() {
        const now = new Date();
        clockContainer.innerText = now.toLocaleTimeString("es-ES", { hour12: false });
        requestAnimationFrame(updateClock);
    }
    requestAnimationFrame(updateClock);

    // Animaciones de entrada
    document.querySelectorAll("section").forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
            section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 300);
    });

    // Aplicar tema según preferencia del sistema
    function applyTheme(theme) {
        document.body.classList.toggle("dark-mode", theme === "dark");
    }
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    applyTheme(prefersDarkScheme.matches ? "dark" : "light");
    prefersDarkScheme.addEventListener("change", (e) => {
        applyTheme(e.matches ? "dark" : "light");
    });

    // Botón de cambio de tema manual
    let themeToggleButton = document.getElementById("themeToggle");
    if (!themeToggleButton) {
        themeToggleButton = document.createElement("button");
        themeToggleButton.id = "themeToggle";
        themeToggleButton.innerText = "Cambiar Tema";
        themeToggleButton.style.position = "fixed";
        themeToggleButton.style.top = "20px";
        themeToggleButton.style.right = "20px";
        themeToggleButton.style.padding = "10px 15px";
        themeToggleButton.style.background = "#8b0000";
        themeToggleButton.style.color = "white";
        themeToggleButton.style.border = "none";
        themeToggleButton.style.cursor = "pointer";
        themeToggleButton.style.borderRadius = "20px";
        themeToggleButton.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.2)";
        themeToggleButton.style.zIndex = "1000";
        document.body.appendChild(themeToggleButton);
    }
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        applyTheme(isDark ? "dark" : "light");
    });

    // Mensajes de contratación cada 30 segundos y desaparecen tras 10 segundos
    const hiringMessages = [
        "¿Te gusta lo que ves? ¡Contrátame y hagamos magia juntos! 🎩✨",
        "¡Este portafolio es solo el comienzo! Hablemos de tu próximo proyecto. 🚀",
        "¿Buscas un desarrollador apasionado? No busques más, aquí estoy. 😉",
        "¡El mejor momento para contratarme fue ayer, el segundo mejor es ahora! 💼"
    ];
    function showHiringMessage() {
        let messageContainer = document.getElementById("hiringMessage");
        if (!messageContainer) {
            messageContainer = document.createElement("div");
            messageContainer.id = "hiringMessage";
            messageContainer.style.position = "fixed";
            messageContainer.style.bottom = "20px";
            messageContainer.style.right = "20px";
            messageContainer.style.padding = "15px";
            messageContainer.style.background = "#8b0000";
            messageContainer.style.color = "white";
            messageContainer.style.borderRadius = "10px";
            messageContainer.style.boxShadow = "0px 5px 10px rgba(0,0,0,0.2)";
            messageContainer.style.zIndex = "1000";
            document.body.appendChild(messageContainer);
        }
        messageContainer.innerText = hiringMessages[Math.floor(Math.random() * hiringMessages.length)];
        messageContainer.style.display = "block";

        setTimeout(() => {
            messageContainer.style.display = "none";
        }, 10000);
    }
    setInterval(showHiringMessage, 30000);
});
