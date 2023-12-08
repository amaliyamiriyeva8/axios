let id=new URLSearchParams(window.location.search).get("id")
let table=document.querySelector("table")
fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(res=>res.json())
.then(element=>{
       table.innerHTML+= `<tr>
        <td><input id="inp1" type="text" value="${element.name}"></td>
        <td><input id="inp2" type="text" value="${element.unitPrice}"></td>
        <td><input id="inp3" type="text" value="${element.unitsInStock}"></td>
        <td><button>save</button></td>
       </tr>`

       let savebtn=document.querySelector("button");

       
        const inp_1=document.querySelector("#inp1");
        const inp_2=document.querySelector("#inp2");
        const inp_3=document.querySelector("#inp3");
        savebtn.addEventListener("click",()=>{
            axios.patch(`https://northwind.vercel.app/api/products/${id}`,{
            name:inp_1.value,
            unitPrice:inp_2.value,
            unitsInStock:inp_3.value,
            
       }).then(res=> window.location=`./index.html`)
       })
})