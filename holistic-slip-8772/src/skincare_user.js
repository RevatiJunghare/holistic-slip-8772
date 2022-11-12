
let obj_data=[

    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-aquaholic-water-boost-mask-13548848087123.jpg?v=1619115321",
        name: "Aquaholic Water Boost Mask",
        price: 149,
        rating: "4.7(414)",
        strike: '',
    },

    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-cooling-stick-28037939429459.jpg?v=1644409181",
        name: "Citrus Got Real Cooling Stick",
        price: 399,
        rating: "4.6(141)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
        name: "Cheat Sheet Clarifying Mask",
        price: 99,
        rating: "4.9(121)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1644399394",
        name: "Charcoal Patrol Bubble Mask",
        price: 149,
        rating: "4.9(41)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715",
        name: "Cheat Sheet Anti-Aging Mask",
        price: 99,
        rating: "4.8(142)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/CCEyeFirmingCreamWBG-3.jpg?v=1628610287",
        name: "Coffee Culture Eye Firming Cream",
        price: 399,
        rating: "4.9(54)",
        strike: 'RS.799',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Extention-Spot-gel-2.jpg?v=1626363976",
        name: "Aquaholic Clarifying Spot Gel",
        price: 399,
        rating: "4.7(421)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450",
        name: "Swipe Right Cleansing Water",
        price: 399,
        rating: "4.9(197)",
        strike: '',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-acne-combo-pack-of-6-14056089157715.jpg?v=1619113757",
        name: "Acne Combo (Pack of 6)",
        price: 399,
        rating: "4.9(137)",
        strike: '1299',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/CCPorePurifyingMaskWBG-3.jpg?v=1628610298",
        name: "Coffee Culture Pore Purifying Mask",
        price: 499,
        rating: "4.7(421)",
        strike: '1399',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Pore-Exfoliating-Scrub-3_1.jpg?v=1626363966",
        name: "Aquaholic Pore Exfoliating Scrub",
        price: 399,
        rating: "4.9(14)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-refreshing-mist-28037990842451.jpg?v=1619155739",
        name: "Citrus Got Real Refreshing Mist",
        price: 799,
        rating: "4.8(201)",
        strike: '2100',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/CCBrighteningSerumWBG-3.jpg?v=1628610327",
        name: "Coffee Culture Brightening Serum",
        price: 399,
        rating: "4.6(137)",
        strike: '',
    },
    
    {
        image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-pack-of-6-12784634527827.jpg?v=1619114589",
         name:   "Cheat Sheet Clarifying Mask (Pack of 6)",
        price: 399,
        rating: "4.8(27)",
        strike: '',
    }, 
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/Hydrating-Primer-3.jpg?v=1626423647",
        name: "Aquaholic Hydrating Primer",
        price: 999,
        rating: "4.5(421)",
        strike: 'RS.1199',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292",
        name: "Aquaholic Priming Moisturizer",
        price: 799,
        rating: "4.8(421)",
        strike: 'RS.999',
    },
    
    {
        image_link:
            "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
        name: "Citrus Got Real Retinol Brightening Serum",
        price: 1499,
        rating: "4.5(421)",
        strike: 'RS.1799',
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
Rating.style.color="gold";
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
}

//Relevance data 
let relevance_p=document.getElementById('sub-item1');
relevance_p.addEventListener("click", ()=>{
starting();
});
const starting=async()=>{
append(Relevance);
}



//sort high to low
let hightolow_p=document.getElementById('sub-item2');
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
let lowtohigh_p=document.getElementById('sub-item3');
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

let filter_1=document.getElementById('Filter-type1');
filter_1.addEventListener("click", ()=>{
Filter_1()
});
const Filter_1=()=>{
let  data_Filter_1=[
{
    image_link:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
    name: "Cheat Sheet Clarifying Mask",
    price: 99,
    rating: "4.9(121)",
    strike: '',
}, 

{
    image_link:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1644399394",
    name: "Charcoal Patrol Bubble Mask",
    price: 149,
    rating: "4.9(41)",
    strike: '',
},

{
    image_link:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715",
    name: "Cheat Sheet Anti-Aging Mask",
    price: 99,
    rating: "4.8(142)",
    strike: '',
},
]
//console.log("data_Filter_1:",data_Filter_1);
append(data_Filter_1);
}


let filter_2=document.getElementById('Filter-type2');
filter_2.addEventListener("click", ()=>{
Filter_2()
});
const Filter_2=()=>{
let  data_Filter_2=[
{
    image_link:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450",
    name: "Swipe Right Cleansing Water",
    price: 399,
    rating: "4.9(197)",
    strike: '',
},
]
append(data_Filter_2);
}


let filter_3=document.getElementById('Filter-type3');
filter_3.addEventListener("click", ()=>{
Filter_3()
});
const Filter_3=()=>{
let  data_Filter_3=[
       
{
    image_link:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-pack-of-6-12784634527827.jpg?v=1619114589",
     name:   "Cheat Sheet Clarifying Mask (Pack of 6)",
    price: 399,
    rating: "4.8(27)",
    strike: '',
}, 

{
    image_link:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Hydrating-Primer-3.jpg?v=1626423647",
    name: "Aquaholic Hydrating Primer",
    price: 999,
    rating: "4.5(421)",
    strike: 'RS.1199',
},

{
    image_link:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292",
    name: "Aquaholic Priming Moisturizer",
    price: 799,
    rating: "4.8(421)",
    strike: 'RS.999',
},

{
    image_link:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/373532210-artboard-1.jpg?v=1646149967",
    name: "Citrus Got Real Retinol Brightening Serum",
    price: 1499,
    rating: "4.5(421)",
    strike: 'RS.1799',
},

]
append(data_Filter_3);
}


let filter_4=document.getElementById('Filter-type4');
filter_4.addEventListener("click", ()=>{
Filter_4()
});
const Filter_4=()=>{
let  data_Filter_4=[
{
    image_link:
        "https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Pore-Exfoliating-Scrub-3_1.jpg?v=1626363966",
    name: "Aquaholic Pore Exfoliating Scrub",
    price: 399,
    rating: "4.9(14)",
    strike: '',
}, 

]
append(data_Filter_4);
}



  


   
