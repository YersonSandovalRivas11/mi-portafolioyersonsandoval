// Obtener elementos
const menuToggle = document.getElementById("menuToggle");
const menuLateral = document.createElement("div");
menuLateral.classList.add("menu-lateral");

// Crear el fondo oscuro
const overlay = document.createElement("div");
overlay.classList.add("menu-overlay");

// Crear el contenido del menú lateral
const menuItems = [
    { text: "INICIO", href: "#intro" },
    { text: "SOBRE MI", href: "#sobremi" },
    { text: "HABILIDADES", href: "#habilidades" },
    { text: "PROYECTOS", href: "#proyectos" },
    { text: "CONTACTO", href: "#contacto" }
];

const ul = document.createElement("ul");
menuItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);

    // Cerrar menú al hacer clic en una opción
    a.addEventListener('click', () => {
        menuLateral.classList.remove("open");
        menuToggle.classList.remove("open");
        overlay.classList.remove("visible");
    });
});
menuLateral.appendChild(ul);

// Agregar el menú lateral y el fondo oscuro al body
document.body.appendChild(menuLateral);
document.body.appendChild(overlay);

// Función para alternar el menú lateral
menuToggle.addEventListener("click", () => {
    menuLateral.classList.toggle("open");
    menuToggle.classList.toggle("open");
    overlay.classList.toggle("visible");
});

// Cerrar el menú y el fondo oscuro al hacer clic en el fondo oscuro
overlay.addEventListener('click', () => {
    menuLateral.classList.remove("open");
    menuToggle.classList.remove("open");
    overlay.classList.remove("visible");
});
