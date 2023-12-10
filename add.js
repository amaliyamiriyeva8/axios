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
        <td><input id="inp1" type="text" value="${""}"></td>
        <td><input id="inp2" type="text" value="${""}"></td>
        <td><input id="inp3" type="text" value="${""}"></td>
        <td><button class="add">add</button></td>
       </tr>
       </table>`
      

       let addbtn=document.querySelector(".add");
        const inp_1=document.querySelector("#inp1");
        const inp_2=document.querySelector("#inp2");
        const inp_3=document.querySelector("#inp3");
        
        addbtn.addEventListener("click", () => {
              if (inp_1.value !== "" && inp_2.value !== "" && inp_3.value !== "") {
                     alert("xanalari uğurla dolduruldu");
                     let obj = {
                        name: inp_1.value,
                        unitPrice: inp_2.value,
                        unitsInStock: inp_3.value,
                    };
                    fetch(`https://northwind.vercel.app/api/products`,
                                {
                                    method: "POST",
                    
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(obj)
                                }).then(res=>res.json())
                                .then(res => window.location = `./index.html`)
                 
              } else {
                  alert("xanalari doldurun");
              }
             
          });
      
      })

      