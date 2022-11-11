$(document).ready(function(){
  $('.sub-btn').click(function(){
      console.log("hiii")
      $(this).next('.sub_menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
  });
})


let data;

const priya=async()=>{
  try{
//console.log("priya");
     const res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&limit=20&page=1`)
        
       data= await res.json();
 
    append(data)
  }catch(err){
      console.log("Error:",err);
  }
}

priya();

function append(data){
  const tv=document.getElementById('tv');
  tv.innerHTML=null;

  data.forEach((el)=>{
  const div=document.createElement("div");
  div.setAttribute("id","p-div");

  const div2=document.createElement("div");
  div2.setAttribute("class","star-main-div");

  const div3=document.createElement("div");
  div3.setAttribute("class","star-div");
  div3.innerHTML = '<i class="fa-regular fa-heart 2fa"></i>';

  const img=document.createElement('img')
  img.src=el.image_link;

  const Name=document.createElement("p");
  Name.innerText=el.name;
  
  const Price=document.createElement("h4");
  Price.innerText=" ₹ "+ Math.floor(el.price*80);

  const Rating=document.createElement("h4");
  Rating.style.color="#757575";
  if(el.rating==null){
      Rating.innerText=" ★ " + "0.0";
  }
  else{
      Rating.innerText=" ★ " + el.rating;
  }

  const btn=document.createElement("button")
  btn.setAttribute("class","div-button");
  btn.innerHTML="Add To Cart";
  btn.addEventListener("click",()=>{
      addtocart(el);
  });


  div2.append(div3,btn);
  div.append(img,Name,Price,Rating,div2);
  tv.append(div);
  })
}

let cartdata=JSON.parse(localStorage.getItem("CartList")) || [];
function addtocart(el){
  cartdata.push(el);
  localStorage.setItem("CartList",JSON.stringify(cartdata));
}


 
let rele=document.getElementById('item1');
rele.addEventListener("click", ()=>{
  start();
});
const start=async()=>{
 const res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&limit=20&page=1`);
  data = await res.json();
  append(data);
}



  
  let hightolow=document.getElementById('item2');
  hightolow.addEventListener("click", ()=>{
      hl(data);
  });
  const hl=(data)=>{
   let sortdata= data.sort(function(a,b){
      
       return b.price - a.price
     });
   append(sortdata);
 }



let lowtohigh=document.getElementById('item3');
lowtohigh.addEventListener("click", ()=>{
  lh(data)
});
const lh=(data)=>{
  let sortdata= data.sort(function(a,b){
      return a.price - b.price ;
    });
  append(sortdata);
}





const product1 = document.getElementById('type1');
product1.addEventListener('click', function (){
 Product1();
});
const Product1 = async () => {
//console.log("lakshmi");
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&limit=20&page=1&product_type=eyeliner')
let data = await res.json();
 //console.log(data);
append(data);
}

const product2 = document.getElementById('type2');
product2.addEventListener('click', function (){
 Product2();
});
const Product2 = async () => {
//console.log("lakshmi");
let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick')
let data = await res.json();
 //console.log(data);
append(data);
}


const product3 = document.getElementById('type3');
product3.addEventListener('click', function (){
 Product3();
});
const Product3 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=nail_polish')
let data = await res.json();
 //console.log(data);
append(data);
}


const product4 = document.getElementById('type4');
product4.addEventListener('click', function (){
 Product4();
});
const Product4 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=mascara');
let data = await res.json();

append(data);
}



const product5 = document.getElementById('type5');
product5.addEventListener('click', function (){
 Product5();
});
const Product5 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner');
let data = await res.json();
 //console.log(data);
append(data);
}




const feat1 = document.getElementById('feat1');
feat1.addEventListener('click', function (){
 Feat1();
});
const Feat1 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=eyeshadow');
let data = await res.json();
 //console.log(data);
append(data);
}


const feat2 = document.getElementById('feat2');
feat2.addEventListener('click', function (){
 Feat2();
});
const Feat2 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=cream&product_type=foundation');
let data = await res.json();
 //console.log(data);
append(data);
}


const feat3 = document.getElementById('feat3');
feat3.addEventListener('click', function (){
 Feat3();
});
const Feat3 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Gluten+Free&product_type=mascara');
let data = await res.json();
 //console.log(data);
append(data);
}


const feat4 = document.getElementById('feat4');
feat4.addEventListener('click', function (){
 Feat4();
});
const Feat4 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=eyeliner');
let data = await res.json();
 //console.log(data);
append(data);
}


const feat5 = document.getElementById('feat5');
feat5.addEventListener('click', function (){
 Feat5();
});
const Feat5 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=liquid&product_type=lipstick');
let data = await res.json();
 //console.log(data);
append(data);
}

//------------------------------------------

const fine1 = document.getElementById('fine1');
fine1.addEventListener('click', function (){
Fine1();
});
const Fine1 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=blush');
let data = await res.json();
//console.log(data);
append(data);
}

const fine2 = document.getElementById('fine2');
fine2.addEventListener('click', function (){
Fine2();
});
const Fine2 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=cream&product_type=blush');
let data = await res.json();
//console.log(data);
append(data);
}

const fine3 = document.getElementById('fine3');
fine3.addEventListener('click', function (){
Fine3();
});
const Fine3 = async () => {
let res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=Blush&product_tags=Gluten free');
let data = await res.json();
//console.log(data);
append(data);
}

const fine4 = document.getElementById('fine4');
fine4.addEventListener('click', function (){
Fine4();
});
const Fine4 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=bb_cc&product_type=foundation');
let data = await res.json();
//console.log(data);
append(data);
}

const fine5 = document.getElementById('fine5');
fine5.addEventListener('click', function (){
Fine5();
});
const Fine5 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Canadian&product_type=bronzer');
let data = await res.json();
//console.log(data);
append(data);
}



const form1 = document.getElementById('form1');
form1.addEventListener('click', function (){
Form1();
});
const Form1 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder&product_type=foundation');
let data = await res.json();
//console.log(data);
append(data);
}


const form2 = document.getElementById('form2');
form2.addEventListener('click', function (){
Form2();
});
const Form2 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=lip_gloss&product_type=lipstick');
let data = await res.json();
//console.log(data);
append(data);
}

const form3 = document.getElementById('form3');
form3.addEventListener('click', function (){
Form3();
});
const Form3 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=lipstick');
let data = await res.json();
//console.log(data);
append(data);
}

const form4 = document.getElementById('form4');
form4.addEventListener('click', function (){
Form4();
});
const Form4 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=mineral&product_type=foundation');
let data = await res.json();
//console.log(data);
append(data);
}

const form5 = document.getElementById('form5');
form5.addEventListener('click', function (){
Form5();
});
const Form5 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=gel&product_type=eyeliner');
let data = await res.json();
//console.log(data);
append(data);
}





const con1 = document.getElementById('con1');
con1.addEventListener('click', function (){
Con1();
});
const Con1 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=pencil&product_type=eyeliner');
let data = await res.json();
//console.log(data);
append(data);
}


const con2 = document.getElementById('con2');
con2.addEventListener('click', function (){
Con2();
});
const Con2 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow');
let data = await res.json();
// console.log(data);
append(data);
}

const con3 = document.getElementById('con3');
con3.addEventListener('click', function (){
Con3();
});
const Con3 = async () => {
let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_category=highlighter&product_type=foundation');
let data = await res.json();
 //console.log(data);
append(data);
}