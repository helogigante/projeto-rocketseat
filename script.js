function toggleMode() {
  const html = document.documentElement // o "." serve para acessar a tag html do documento

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
    html.classList.add("dark")
  } else {
    html.classList.add("light")
  }
  */

  // o toggle compacta o código acima, fazendo a mesma coisa
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem e o alt
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de perfil no light mode.")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil no dark mode.")
  }
}
