let Book=()=>{


let name=document.querySelector("name").value
let age=document.querySelector("name").value
let checkin=document.querySelector("name").value
let checkout=document.querySelector("name").value
let city=document.querySelector("name").value
let person=document.querySelector("name").value

let url="http://localhost:3000/hotel"


fetch(url,{
    
    method:"POST",
    headers:{
        "content-type":"application/json"
    },

    body: JSON.stringify(
        {
      Name:name,
      Age:age
      Checkout:checkin,
      checkout:checkout,
      City:city,
      Person:person,
      Perice:500

        }
    )
})
}