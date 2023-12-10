let id=new URLSearchParams(window.location.search).get("id")
let table=document.querySelector("table");
let inform=document.querySelector("#info")
inform.innerHTML = '<img src="./spinner.gif" alt="load"/ id="load">';
fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(res=>res.json())
.then(element=>{
       inform.innerHTML = '';
       
       inform.innerHTML+= `
       <h1>Welcome</h1>
       <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>save</th>
         </tr>
      
       <tr>
        <td><input id="inp1" type="text" value="${element.name}"></td>
        <td><input id="inp2" type="text" value="${element.unitPrice}"></td>
        <td><input id="inp3" type="text" value="${element.unitsInStock}"></td>
        <td><button class="save">save</button></td>
       </tr>
       </table>
       <button class="left"><a href="./index.html?id=${element.id}">Go back</a></button>`
      

       let savebtn=document.querySelector(".save");

       
        const inp_1=document.querySelector("#inp1");
        const inp_2=document.querySelector("#inp2");
        const inp_3=document.querySelector("#inp3");
        
        savebtn.addEventListener("click", () => {
              if (inp_1.value !== "" && inp_2.value !== "" && inp_3.value !== "") {
                     alert("xanalari uğurla dolduruldu");
                  axios.patch(`https://northwind.vercel.app/api/products/${id}`, {
                      name: inp_1.value,
                      unitPrice: inp_2.value,
                      unitsInStock: inp_3.value,
                  }).then(res => window.location = `./index.html`);
                 
              } else {
                  alert("xanalari doldurun");
              }
             
          });
      
      })

      