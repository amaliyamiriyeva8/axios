const table=document.querySelector("table");

const goTo=()=>{
    window.location="https://google.com/"
}
fetch("https://northwind.vercel.app/api/products")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
       table.innerHTML+= `<tr>
        <td>${element.id}</td>
        <td><a id="href" href="./info.html?id=${element.id}">${element.name}</a></td>
        <td onclick="goTo()">${element.unitPrice}</a></td>
        <td>${element.unitsInStock}</a></td>
        <td><button><a href="./add.html?id=${element.id}">Edit</a></button></td>
        <td><button>Delete</a></button>
        </td>
       </tr>`
    })



    document.querySelector("input").addEventListener("input",(e)=>{
    let f=data.filter((el)=>{
    return el.name.toLowerCase().startsWith(e.target.value)
     })
  table.innerHTML=`
  <tr>
  <th>Id</th>
  <th>Name</th>
  <th>Price</th>
  <th>Stock</th>
  </tr>
  `;
  f.forEach(element=>{
    table.innerHTML+= `<tr>
     <td>${element.id}</td>
     <td>${element.name}</td>
     <td>${element.unitPrice}</td>
     <td>${element.unitsInStock}</td>
    
    </tr>`
 })
    })
})