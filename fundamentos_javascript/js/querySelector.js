const primerparraf = document.querySelector("#micontenedor p");
console.log(primerparraf.textContent);

const elementosconclase = document.querySelectorAll("#otrocontenedor .miclase")

elementosconclase.forEach(elemento => {
    console.log(elemento.textContent)
})