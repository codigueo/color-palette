const color = document.querySelector('#color');
const seleccion = document.querySelector('#salida');
console.log(color.value);

color.addEventListener("input", ()=> {
    const value = color.value;
    salida.innerHTML = value;
    salida.style.background = value;
    salida.style.color = "#fff";
});