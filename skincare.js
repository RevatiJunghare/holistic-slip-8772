const url = "http://localhost:5050/skincare_products"

window.onload = ()=>{
  let form = document.getElementById("product_form")
  form.onsubmit =()=>{
      addProduct(event)
  }
}

let getdata = async ()=>{
  let res = await fetch(url)
  let data = await res.json()
  console.log(data)
  renderDOM(data)
}
getdata()


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


  

  


let addProduct = async (e)=>{
  e.preventDefault()
  let form = document.getElementById("product_form")
  let name = form.name.value;
  let image = form.image.value;
  let price = form.price.value;
  let rating = form.rating.value;
  

  let user_data = {
      id : Date.now() + name,
      name,
      image,
      price,
      rating,
  }
  console.log(user_data)

  let res = await fetch(url,{
      method:"POST",
      body:JSON.stringify(user_data),
      headers:{
          "Content-Type" : "application/json"
      }
  })
}
addProduct()


let renderDOM = (data)=>{
  let container = document.getElementById("container")
    container.innerHTML=null
    data.forEach((el,id)=>{
        let div=document.createElement("div")
        div.setAttribute("class","box")
        let img=document.createElement("img")
        img.src=el.image

        let name=document.createElement("p")
        name.innerText=el.name

        let price=document.createElement("p")
        price.innerText=el.price

        let rating=document.createElement("p")
        rating.innerText=el.rating
        
        let rmoveBtn = document.createElement("button")
        rmoveBtn.innerText="Remove"
        rmoveBtn.setAttribute("class","remove_item")
        rmoveBtn.onclick = ()=>{
        removeProduct(id)
      }

        let priceupdateBtn = document.createElement("button")
        priceupdateBtn.innerText="Update"
        priceupdateBtn.setAttribute("class","update_price")
        priceupdateBtn.onclick = ()=>{
        updateProduct(id)
      }

       div.append(img,name,price,rating,rmoveBtn,priceupdateBtn)
        container.append(div)
    })
}



let removeProduct = async(id)=>{
  let res = await fetch(`http://localhost:5050/skincare_products/${id}`,{
      method : "DELETE"
  })
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
}


let updateProduct =async (id)=>{
  const new_price = window.prompt("Enter new Price")
  let data = {price:new_price}

  let res = await fetch(`${url}/${id}`,{
      method : "PATCH",
      body : JSON.stringify(data),
      headers:{
          "Content-Type" : "application/json"
      }
  });
  getdata()
}




