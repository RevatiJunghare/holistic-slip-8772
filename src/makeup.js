

let obj_data=[
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-Prime-Sublime-Primer---Powered-By-Images1_ebe7ea59-dff5-4a2a-9a70-c94435d3f46e.jpg?v=1666928973",
        name: "SUGAR Prime Sublime Primer",
        price: 399.00,
        rating: 4.9 + "(15)",
        product:"Face Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
        name: "Contour De Force Face Palette",
        price: 499.00,
        rating: 4.8 + "(26)",
        product:"Foundation Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/17-Raf-Mini-1_722c9db9-41f9-4a9f-8084-f121e232d86f.jpg?v=1658851265",
        name: "Ace of Face Foundation Stick -7gms",
        price: 399.00,
        rating: 4.7 + "(23)",
        product:"Face Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
        name: "Matte As Hell Crayon Lipstick",
        price: 599.00,
        rating: 5 + "(2)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
        name: "Blend the Rules Eyeshadow Palette",
        price: 399.00,
        rating: 5 + "(3)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
        name: "Matte Attack Transferproof Lipstick - 01 Boldplay (Cardinal Pink)",
        price: 599.00,
        rating: 5 + "(2)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-bronzer-01-taupe-topper-cool-toned-brown-gray-undertone-11020228624467.jpg?v=1619102678",
        name: "Contour De Force Mini Bronzer - 01 Taupe Topper (Cool-toned Brown Gray Undertone)"
        ,
        price: 599.00,
        rating: 4.8 + "(42)",
        product:"Face Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
        name: "Mettle Priming Balm",
        price: 399.00,
        rating: 4.4 + "(5)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847",
        name: "Goddess Of Flawless SPF30+ BB Cream - 07 Vanilla Latte (Fair)",
        price: 399.00,
        rating: 4.8 + "(6)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1657257149",
        name: "Bling Leader Illuminating Moisturizer - 01 Gold Diggin' - warm gold with a pearl finish",
        price: 399.00,
        rating: 4.5 + "(13)",
        product:"Face Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
        name: "Base Of Glory Pore Minimizing Primer",
        price: 399.00,
        rating: 4.9 + "(24)",
        product:"Face Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1da9dee5-9c2e-4135-994c-9b7d2ca23e6b.jpg?v=1641915296",
        name: "Ace Of Face Foundation Stick - 07 Vanilla Latte (Fair, Golden Undertone)",
        price: 1499.00,
        rating: 5 + "(1)",
        product:"Face Essentials Combo",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_5e8187e3-f7a2-40aa-a759-d4bf69769234.jpg?v=1639496327",
        name: "Air Kiss Powder Lipstick - Air Kiss Powder Lipstick- 01 Mocha Mousse",
        price: 649.00,
        rating: 4.5 + "(6)",
        product:"EYES & FACE Combo",
    },

];

localStorage.setItem("RelevanceData",JSON.stringify(obj_data));
let Relevance=JSON.parse(localStorage.getItem("RelevanceData"));


 //jquery for toggle sub_menu
 $(document).ready(function(){
    $('.sub-btn').click(function(){
        // console.log("hiii")
        $(this).next('.sub_menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
})




function append(data){
    const right_side=document.getElementById('right_side');
    right_side.innerHTML=null;

    data.forEach((el)=>{
    const div=document.createElement("div");
    div.setAttribute("id","p-div");

    const div2=document.createElement("div");
    div2.setAttribute("class","star-main-div");

    const div3=document.createElement("div");
    div3.setAttribute("class","star-div");
    div3.innerHTML = '<i class="fa-regular fa-heart 2fa"></i>';

    const img=document.createElement('img');
    img.src=el.image_link;

    const Name=document.createElement("p");
    Name.innerText=el.name;
    
    const Price=document.createElement("h4");
    Price.innerText=" ₹ "+ el.price;

    const Rating=document.createElement("h4");
    Rating.style.color="rgb(242, 106, 128)";
    if(el.rating==null){
        Rating.innerText=" ★ " + "0.0";
    }
    else{
        Rating.innerText=" ★ "+el.rating;
    }

    const btn=document.createElement("button")
    btn.innerHTML="Add To Cart";
    btn.addEventListener("click",()=>{
        addtocart(el); 
    })


     div2.append(div3,btn);
    div.append(img,Name,Price,Rating,div2);
    right_side.append(div);
    })
}

append(obj_data);

let cartdata=JSON.parse(localStorage.getItem("CartList")) || [];
function addtocart(el){
    cartdata.push(el);
    localStorage.setItem("CartList",JSON.stringify(cartdata));
    alert("Item Added To Cart Successfully")
}

//Relevance data 
let relevance_p=document.getElementById('s1');
relevance_p.addEventListener("click", ()=>{
    starting();
});
const starting=async()=>{
    append(Relevance);
  }
  


    //sort high to low
    let hightolow_p=document.getElementById('s2');
    hightolow_p.addEventListener("click", ()=>{
        hlrating();
    });
    const hlrating=()=>{
        // console.log("HL");
     let sortdata= obj_data.sort(function(a,b){
         return b.price - a.price;
       });
     append(sortdata);
   }


  //sort low to high
  let lowtohigh_p=document.getElementById('s3');
  lowtohigh_p.addEventListener("click", ()=>{
    lhrating()
});
  const lhrating=()=>{
    // console.log("LH");
    let sortdata = obj_data.sort(function(a,b){
        return a.price - b.price ;
      });
    append(sortdata);
  }
  
//   -------------------------------
 
let filter_1=document.getElementById('F1');
filter_1.addEventListener("click", ()=>{
   Filter_1()
});
const Filter_1=()=>{
 let  data_Filter_1=[
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-bronzer-01-taupe-topper-cool-toned-brown-gray-undertone-11020228624467.jpg?v=1619102678",
        name: "Contour De Force Mini Bronzer - 01 Taupe Topper (Cool-toned Brown Gray Undertone)"
        ,
        price: 599.00,
        rating: 4.8 + "(42)",
        product:"Face Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-13644982681683.jpg?v=1619115847",
        name: "Goddess Of Flawless SPF30+ BB Cream - 07 Vanilla Latte (Fair)",
        price: 399.00,
        rating: 4.8 + "(6)",
        product:"Eyeshadow Brush",
    },
   ]
   //console.log("data_Filter_1:",data_Filter_1);
   append(data_Filter_1);
}


let filter_2=document.getElementById('F2');
filter_2.addEventListener("click", ()=>{
  Filter_2()
});
const Filter_2=()=>{
let  data_Filter_2=[
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
        name: "Matte As Hell Crayon Lipstick",
        price: 599.00,
        rating: 5 + "(2)",
        product:"Eyeshadow Brush",
    }, 
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg?v=1645608270",
        name: "Matte Attack Transferproof Lipstick - 01 Boldplay (Cardinal Pink)",
        price: 599.00,
        rating: 5 + "(2)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1da9dee5-9c2e-4135-994c-9b7d2ca23e6b.jpg?v=1641915296",
        name: "Ace Of Face Foundation Stick - 07 Vanilla Latte (Fair, Golden Undertone)",
        price: 1499.00,
        rating: 5 + "(1)",
        product:"Face Essentials Combo",
    },
   
  ]
  append(data_Filter_2);
}


let filter_3=document.getElementById('F3');
filter_3.addEventListener("click", ()=>{
  Filter_3()
});
const Filter_3=()=>{
let  data_Filter_3=[
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-Prime-Sublime-Primer---Powered-By-Images1_ebe7ea59-dff5-4a2a-9a70-c94435d3f46e.jpg?v=1666928973",
        name: "SUGAR Prime Sublime Primer",
        price: 399.00,
        rating: 4.9 + "(15)",
        product:"Face Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
        name: "Mettle Priming Balm",
        price: 399.00,
        rating: 4.4 + "(5)",
        product:"Eyeshadow Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
        name: "Base Of Glory Pore Minimizing Primer",
        price: 399.00,
        rating: 4.9 + "(24)",
        product:"Face Brush",
    },
  ]
  append(data_Filter_3);
}


let filter_4=document.getElementById('F4');
filter_4.addEventListener("click", ()=>{
  Filter_4()
});
const Filter_4=()=>{
let  data_Filter_4=[
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
        name: "Contour De Force Face Palette",
        price: 499.00,
        rating: 4.8 + "(26)",
        product:"Foundation Brush",
    },
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
        name: "Blend the Rules Eyeshadow Palette",
        price: 399.00,
        rating: 5 + "(3)",
        product:"Eyeshadow Brush",
    },

  ]
  append(data_Filter_4);
}


