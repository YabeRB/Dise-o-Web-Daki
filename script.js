const translations = { 
    es: {
        "promo-text": "Obtén un 25% de descuento durante diciembre",
        "translate-btn": "Español",
        "btn-create-account": "Crear Cuenta",
        "btn-sign-in": "Iniciar Sesión",
        "btn-get-started": "Empezar →",
        "nav-home": "Inicio",
        "nav-features": "Características",
        "nav-pricing": "Precios",
        "nav-contact": "Acerca de",
        "hero-title": "Gestiona los Chats de tu Equipo con Daki",
        "hero-desc": "Administra y organiza chats, tareas y archivos fácilmente en un solo lugar.",
        "btn-start": "Empieza gratis",
        "features-title": "Elige la Mejor Solución de Gestión de Chats para tu Equipo",
        "features-subtitle": "Nuestra solución SaaS ofrece diversas funcionalidades para optimizar la comunicación y mejorar la productividad.",
        "feature-task": "Gestión de Tareas",
        "desc-task": "Mantente al día con tus tareas y colabora de manera eficiente.",
        "feature-files": "Compartir Archivos",
        "desc-files": "Comparte archivos con tu equipo de manera instantánea y segura.",
        "footer-description": "Ofrecemos una amplia gama de funciones organizadas y productivas, como asignación de tareas, uso compartido de archivos y enrutamiento de chats.",
        "footer-rights": "© 2025 Daki. Todos los derechos reservados."
    },
    en: {
        "promo-text": "Get -25% discount during December",
        "translate-btn": "English",
        "btn-create-account": "Create Account",
        "btn-sign-in": "Sign in",
        "btn-get-started": "Get started →",
        "nav-home": "Home",
        "nav-features": "Features",
        "nav-pricing": "Pricing",
        "nav-contact": "Contact",
        "hero-title": "Manage Your Team's Chats with Daki",
        "hero-desc": "Effortlessly manage and organize chats, tasks, and files in one central location.",
        "btn-start": "Get started for free",
        "features-title": "Select the Best Chat Management Solution for Your Team",
        "features-subtitle": "Our SaaS chat management solution offers a variety of features to optimize communication and increase productivity.",
        "feature-task": "Task Management",
        "desc-task": "Stay on top of your tasks and collaborate effectively.",
        "feature-files": "File Sharing",
        "desc-files": "Share files with your team instantly, securely, and reliably.",
        "footer-description": "We offer a wide range of features that are organized and productive, such as task assignments, file sharing, and chat routing.",
        "footer-rights": "© 2025 Daki. All rights reserved."
    }
};

let currentLanguage = "en";

function changeLanguage() {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    const translation = translations[currentLanguage];

    for (let key in translation) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translation[key];
        }
    }

    const translateBtn = document.getElementById("translate-btn");
    if (translateBtn) {
        translateBtn.textContent = translations[currentLanguage]["translate-btn"];
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const translateBtn = document.getElementById("translate-btn");
    if (translateBtn) {
        translateBtn.addEventListener("click", changeLanguage);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los textos (h1, h2, h3, p, botones, enlaces, etc.)
    const textElements = document.querySelectorAll("h1, h2, h3, p, button, a, li");
    // Selecciona todas las imágenes e iconos
    const imageElements = document.querySelectorAll("img, svg");

    // Agrega la clase de animación automáticamente
    textElements.forEach(el => el.classList.add("appear-left"));
    imageElements.forEach(el => el.classList.add("appear-right"));

    function handleScroll() {
        const triggerBottom = window.innerHeight * 0.85; // Punto en el que se activa la animación

        document.querySelectorAll(".appear-left, .appear-right").forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Para activar elementos visibles desde el inicio
});