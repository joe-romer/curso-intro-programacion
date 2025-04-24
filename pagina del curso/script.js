document.addEventListener("DOMContentLoaded", () => {
    const barras = document.querySelectorAll('.habilidades-line-gradient');
    barras.forEach(barra => {
      const width = getComputedStyle(barra).getPropertyValue('--w');
      barra.style.width = width;
    });
  });