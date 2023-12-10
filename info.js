let id=new URLSearchParams(window.location.search).get("id")
let info=document.querySelector(".inform")
let inform=document.querySelector("#info")
inform.innerHTML = '<img src="./spinner.gif" alt="load"/ id="load">';
let btn=document.querySelector("#btn")
fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(res=>res.json())
.then(element=>{
       inform.innerHTML = '';
              inform.innerHTML+= `
              <h1 style="font-size: 35px">Information</h1>
              <div class="inform">
              <h2>"Mehsulun adi-${element.name}</h2>
              <h2>Mehsulun qiymeti-${element.unitPrice}</h2>
              <h2>Stokda var-${element.unitsInStock}</h2>
              <h2>Qablasdirmada-${element.quantityPerUnit}</h2>
              <button id="btn" ><a href="./index.html?id=${element.id}">Go back</a></button>
              </div>
             `
              //  btn.addEventListener("click",()=> {
              //  inform.innerHTML = '<img src="./spinner.gif" alt="load" id="load">';
              //  setTimeout(function () {
              //   window.location = "./index.html?id=";
              //   console.log(setTimeout)
              //   }, 5000);
              // });
})

 