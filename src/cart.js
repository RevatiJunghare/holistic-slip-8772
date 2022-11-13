

arr = JSON.parse(localStorage.getItem('CartList')) || [];
let container = document.getElementById('display');
container.innerHTML = null;

let totalPrice=0;
let subTotal = 0;

if (arr.length>0){
    appenData(arr);
}else{
    container.innerHTML =` <div class="emptyCartDiv">
    <img src="images/ic_empty_cart_edited copy.png" alt="">
    <h6 id="emptyCartH6">Hey! It's lonely here.<br>Your bag seems to have no company.<br>Why not add some products?</h6>
    <button><a href="index.html">SHOP NOW</a></button>
</div>`

}



function appenData(arr){
    arr.forEach((el, i)=>{

        let cartOrder_cartData = document.querySelector('.cartOrder_cartData');
        cartOrder_cartData.innerHTML = null;
        let Total = document.getElementById("totalPrice");
        let Tota = document.getElementById("totalPr");
        Total.innerHTML= null;
        let initPrice = 0
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            initPrice+=Number(obj.price);
             Total.innerHTML =`Rs. ${ initPrice}` 
             Tota.innerHTML =`Rs. ${ initPrice}` 
             
        }
        console.log(initPrice);
        console.log(Total)
        
        let div = document.createElement('div');
        div.setAttribute('class', 'child');

        let img = document.createElement('img');
        img.src = el.image_link;
        let desc = document.createElement('p');
        desc.innerHTML = el.name;
        desc.setAttribute('class','child_title')
        // desc.style.marginLeft="50px";
        desc.style.fontWeight="bolder"

        let prc = document.createElement('h2');
        prc.innerHTML =  `Rs${el.price}`;
        prc.setAttribute('class','priceT')
        // prc.style.marginLeft="-190px"


        let btn = document.createElement('button');
        btn.innerHTML = 'Remove';
        btn.setAttribute('class','btn')
        btn.addEventListener('click', function(){
            remove(i);
        });
        div.append(img, desc, prc, btn);
        container.append(div);
    })
}

function remove(i){
        arr.splice(i,1);
        localStorage.setItem('CartList',JSON.stringify(arr));
        window.location.href = './cart.html';
        appenData();
}


function showdata(){
    window.location.href="ordered.html";
}
