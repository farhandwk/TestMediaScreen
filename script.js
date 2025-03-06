const lebar = document.querySelector(".lebar")
const tinggi = document.querySelector(".tinggi")

window.addEventListener("DOMContentLoaded", () => {
    let Lebar = window.innerHeight
    let Tinggi = window.innerWidth

    lebar.textContent = Lebar
    tinggi.textContent = Tinggi
})

window.addEventListener("Resize", () => {
    let Lebar = window.innerWidth
    let Tinggi = window.innerHeight

    lebar.textContent = Lebar
    tinggi.textContent = Tinggi
})