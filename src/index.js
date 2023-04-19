// write your code here
let ramenMenu = getElementbyid("ramen-menu")



fetch("http://localhost:3000")
.then(response => response.json())
.then(data => rateRamen(data))

function rateRamen(ramen){
    ramen.forEach(ramen) =>
    let image= document.createElement('img')
}