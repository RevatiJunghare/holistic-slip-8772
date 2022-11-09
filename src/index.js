function slideShow(){


const arr=[
    "https://d32baadbbpueqt.cloudfront.net/Homepage/46ff1a05-2660-4fdc-83e4-fb5cfc36f102.jpg",  

    "https://d32baadbbpueqt.cloudfront.net/Homepage/1fb4eae2-6719-4f1f-b80e-efda1cf48362.jpg",
  
  
    "https://d32baadbbpueqt.cloudfront.net/Homepage/a41d5b02-1299-4e1a-b4e1-ba19484796b5.gif",
  
  
    "https://d32baadbbpueqt.cloudfront.net/Homepage/b69d2fc2-53f5-45ed-8e89-8dcd108ed2b6.jpg",
  
  
  
      "https://d32baadbbpueqt.cloudfront.net/Homepage/e352ada8-9b87-43ff-a84a-6ed425b0d55c.gif",
  
]


    let i=0;
    let div=document.getElementById('carousel')

    let img=document.createElement('img');
    img.src=arr[0];

    div.append(img);
    i=i+1;
    
    setInterval(function(){

        if(i==5){
            i=0;
        }
        img.src=arr[i];
        i=i+1;

        div.append(img);

    }, 2000);
}

slideShow();



//seller

let bestSellersLeftArr = [
    {
        img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644", 
        name : "Ace OF Face Foundation Stick", 
        price: "999",
       
        text : "ADD TO CART",
    },
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/WBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg?v=1657814596",
    name : "Smudge Me Not Mini Liquid Lipstic Set-Power Up You", price: "799",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/424092031-1.jpg?v=1661529396",
     name : "Wingman Waterproof Microliner-01 || Be Black", price: "449",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270", name : "Matte Attack Transferroof Lipstick", price: "699",text : "SELECT SHADE",},
   
]

let pro_div = document.querySelector(".best_seller_products")
let bestSeller = (bestSellersLeftArr,container)=>{
    container.innerText = ""
    bestSellersLeftArr.forEach((el)=>{
        // console.log(el)
        
        let div = document.createElement("div")
        div.className = "four_pro_div"

        let bsimg = document.createElement("img")
        bsimg.src = el.img_url
        bsimg.style.height = "250px"
        bsimg.style.width = "100%"

        let bsname = document.createElement("div")
        bsname.className = "pro_name"
        bsname.innerText = el.name

        
        let pdiv = document.createElement("div")
        pdiv.className = "pdiv"         
        let bsprice = document.createElement("p")
        bsprice.innerText = `₹ ${el.price}`
        pdiv.append(bsprice)

        let bstag = document.createElement("div")
        bstag.className = "text_tag"
        bstag.innerText = el.text

        let img_name_price_div = document.createElement("div")
        img_name_price_div.className = "img_name_price_div"

        img_name_price_div.append(bsimg,bsname,pdiv,)
        div.append(img_name_price_div,bstag)
        // console.log(div)
        container.append(div)
    })
   
}



bestSeller(bestSellersLeftArr,pro_div)
let flag1= true;


document.querySelector(".left_arr_div").addEventListener("click",()=>{

    flag1=!flag1
    if(flag1){
        bestSeller(bestSellersLeftArr,pro_div)
    }else{
        bestSeller(bestSellersRightArr,pro_div)
    }
    
})
let flag2 = false
document.querySelector(".right_arr_div").addEventListener("click",()=>{
    flag2 = !flag2
    if(flag2){
        bestSeller(bestSellersRightArr,pro_div)
    }else{
        bestSeller(bestSellersLeftArr,pro_div)
    }
    
})



