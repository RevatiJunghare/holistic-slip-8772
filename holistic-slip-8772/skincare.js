let api = "http://localhost:5050/skincare_products"

window.onload = ()=>{
  let form = document.getElementById("product_form")
  form.onsubmit =()=>{
      addProduct(event)
  }
}


let addProduct = async (e)=>{
  e.preventDefault()
  let form = document.getElementById("product_form")
  let name = form.name.value;
  let image = form.image.value;
  let price = form.price.value;
  let rating = form.rating.value;
  

  let user_data = {
      id : Date.now(),
      name,
      image,
      price,
      rating,
  }
  console.log(user_data)

  let res = await fetch(api,{
      method:"POST",
      body:JSON.stringify(user_data),
      headers:{
          "Content-Type" : "application/json"
      }
  })
}
addProduct()


let getdata = async ()=>{
  let res = await fetch(api)
  let data = await res.json()
  console.log(data)
  renderDOM(data)
}
getdata()


let renderDOM = (data)=>{
  let container = document.getElementById("container")
    container.innerHTML=null
    data.forEach(({image,name,price,rating,id})=>{
        let div=document.createElement("div")
        div.setAttribute("class","box")
        let img=document.createElement("img")
        img.src=image

        let nam=document.createElement("p")
        nam.innerText=name

        let pric=document.createElement("p")
        pric.innerText=price

        let ratinge=document.createElement("p")
        ratinge.innerText=rating
        
        let rmoveBtn = document.createElement("button")
        rmoveBtn.innerText="Remove"
        rmoveBtn.setAttribute("class","remove_item")
        rmoveBtn.onclick = ()=>{
        removeProduct(id)
        //console.log(id)
      }

        let priceupdateBtn = document.createElement("button")
        priceupdateBtn.innerText="Update"
        priceupdateBtn.setAttribute("class","update_price")
        priceupdateBtn.onclick = ()=>{
        updateProduct(id)
      }

       div.append(img,nam,pric,ratinge,rmoveBtn,priceupdateBtn)
        container.append(div)
    })
}



let removeProduct = async(id)=>{
  let res = await fetch(`${api}/${id}`,{
      method : "DELETE"
  })
  
  getdata()
}

let updateProduct =async (id)=>{
  const new_price = window.prompt("Enter new Price")
  const new_rating = window.prompt("Enter new Rating")
  const new_image = window.prompt("Enter new image url")
  let data = {price:new_price , rating:new_rating, image:new_image}

  let res = await fetch(`${api}/${id}`,{
      method : "PATCH",
      body : JSON.stringify(data),
      headers:{
          "Content-Type" : "application/json"
      }
  });
  getdata()
  
}


let sortLtoH = document.getElementById("sort-low-to-high")
sortLtoH.onclick = async ()=>{
  let res = await fetch(`http://localhost:5050/skincare_products?_sort=price&_order=desc`)
  let data = await res.json()
  renderDOM(data)
}



let sortHtoL = document.getElementById("sort-high-to-low")
sortHtoL.onclick = async ()=>{
  let res = await fetch(`http://localhost:5050/skincare_products?_sort=price&_order=asc`)
  let data = await res.json()
  renderDOM(data)
  console.log(data)
}







function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

