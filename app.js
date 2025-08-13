// Bubble clutter *****
let clutter = "";
for(let i = 1; i <=96; i++){
    let rnum = Math.floor(Math.random() * 100) + 1;
    clutter += `<div class="bubble">${rnum}</div>`;
}
document.querySelector("#pbottom").innerHTML = clutter;
// Footer year *****
let year = document.getElementById("year").textContent = new Date().getFullYear();