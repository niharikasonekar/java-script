



let fetchdata=async()=>{

let url="http://localhost:3000/hotel"

  let res= await fetch(url,{method:"GET"})
    
  }


  let data= await res.json()


  console.log(data);

  let niharika = document.querySelector("#datashow")

data.map((e)=>{

  niharika.innerhtml  += `
  <tr>
  <td> ${e.Name}</td>
   <td> ${e.Age}</td>
    <td> ${e.checkin}</td>
     <td> ${e.checkout}</td>
      <td> ${e.city}</td>
       <td> ${e.person}</td>
        <td> ${e.total}</td>
        <td onclick="del('${e.id}')">delete</td>






  </tr>
  `
})

let Del=(id)=>{
  let url=`"http://localhost:3000/hotel"`

}

fetch(url,{method:"DELETE"})


fetchdata();