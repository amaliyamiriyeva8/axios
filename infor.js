let id=new URLSearchParams(window.location.search).get("id")
let info=document.querySelector(".inform")
fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(res=>res.json())
.then(element=>{
       info.innerHTML+= `
        <h2>"Mehsulun adi-${element.name}</h2>
        <h2>Mehsulun qiymeti-${element.unitPrice}</h2>
        <h2>Stokda var-${element.unitsInStock}</h2>
        <h2>Qablasdirmada-${element.quantityPerUnit}</h2>
        <button id="btn" ><a href="./index.html?id=${element.id}">call back</a></button>
       `
})