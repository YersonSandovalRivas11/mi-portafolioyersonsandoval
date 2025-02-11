const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function ajustarCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

window.addEventListener("resize", ajustarCanvas);
ajustarCanvas();

let bolas = [];
const cursor = { x: null, y: null };

// Genera 100 bolas distribuidas aleatoriamente
for (let i = 0; i < 35; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    bolas.push(new Bola(x, y));
}

// Actualizar la posición del cursor
window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX;
    cursor.y = event.clientY;
});

function animar() {
    // Fondo con degradado
    const gradiente = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradiente.addColorStop(0, "#000000");
    gradiente.addColorStop(1, "#1a1a1a");
    ctx.fillStyle = gradiente;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    bolas.forEach((bola) => {
        // Interacción entre las bolas
        bolas.forEach((otraBola) => {
            const dx = otraBola.x - bola.x;
            const dy = otraBola.y - bola.y;
            const distancia = Math.sqrt(dx ** 2 + dy ** 2);

            if (distancia < 150) {
                ctx.strokeStyle = "rgba(255, 255, 255, " + (1 - distancia / 150) + ")";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(bola.x, bola.y);
                ctx.lineTo(otraBola.x, otraBola.y);
                ctx.stroke();
            }
        });

        // Interacción con el cursor
        if (cursor.x && cursor.y) {
            const dx = cursor.x - bola.x;
            const dy = cursor.y - bola.y;
            const distancia = Math.sqrt(dx ** 2 + dy ** 2);

            if (distancia < 100) {
                bola.dirX += dx / 1000;
                bola.dirY += dy / 1000;

                ctx.strokeStyle = "#1bfcdd";
                ctx.beginPath();
                ctx.moveTo(bola.x, bola.y);
                ctx.lineTo(cursor.x, cursor.y);
                ctx.stroke();
            }
        }

        bola.dibujar();
        bola.mover();
    });

    requestAnimationFrame(animar);
}

animar();
