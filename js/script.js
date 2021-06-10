function openMenu() {
  document.getElementById("content-menu").style.height = "8rem";
  document.getElementById("btn-menu").style.display = "none";
  document.getElementById("btn-tutup").style.display = "inline-block";
}
function closeMenu() {
  document.getElementById("content-menu").style.height = "0px";
  document.getElementById("btn-menu").style.display = "inline-block";
  document.getElementById("btn-tutup").style.display = "none";
}
