function abrirModal(titulo, texto, video){
  document.getElementById("modalTitulo").innerText = titulo;
  document.getElementById("modalTexto").innerText = texto;
  document.getElementById("modalVideo").src = video;
  document.getElementById("modal").style.display = "flex";
}

function cerrarModal(){
  document.getElementById("modal").style.display = "none";
  document.getElementById("modalVideo").src = "";
}