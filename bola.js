class Bola {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radio = Math.random() * 5 + 2; // Radio aleatorio entre 2 y 7
        this.dirX = (Math.random() * 2) - 1;
        this.dirY = (Math.random() * 2) - 1;
        this.velocidad = Math.random() * 2 + 1; // Velocidad entre 1 y 3
    }

    dibujar() {
        ctx.fillStyle = "white"; // Color de las bolas
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    mover() {
        this.x += this.dirX * this.velocidad;
        this.y += this.dirY * this.velocidad;

        // Rebote en los bordes del canvas
        if (this.x + this.radio > canvas.width || this.x - this.radio < 0) {
            this.dirX *= -1;
        }
        if (this.y + this.radio > canvas.height || this.y - this.radio < 0) {
            this.dirY *= -1;
        }
    }
}
