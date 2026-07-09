const fechaEvento = new Date("October 17, 2026 18:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}, 1000);

const boton = document.querySelector("button");

boton.addEventListener("click", () => {
  const nombre = document.querySelector("input").value;

  if (nombre.trim() === "") {
    alert("Por favor escribe tu nombre.");
    return;
  }

  alert(
    "¡Gracias, " +
      nombre +
      "! Tu asistencia ha sido registrada. Te esperamos en los XV años de Andrea Carola. ❤️"
  );
});

function crearPetalo() {
  const petalo = document.createElement("div");
  petalo.className = "petalo";
  petalo.innerHTML = "🌹";
  petalo.style.left = Math.random() * 100 + "vw";
  petalo.style.animationDuration = 4 + Math.random() * 5 + "s";
  document.getElementById("petalos").appendChild(petalo);

  setTimeout(() => {
    petalo.remove();
  }, 9000);
}

setInterval(crearPetalo, 400);
