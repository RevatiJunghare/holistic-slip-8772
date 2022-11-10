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
// let flag1= true;


// document.querySelector(".left_arr_div").addEventListener("click",()=>{

//     flag1=!flag1
//     if(flag1){
//         bestSeller(bestSellersLeftArr,pro_div)
//     }else{
//         bestSeller(bestSellersRightArr,pro_div)
//     }
    
// })
// let flag2 = false
// document.querySelector(".right_arr_div").addEventListener("click",()=>{
//     flag2 = !flag2
//     if(flag2){
//         bestSeller(bestSellersRightArr,pro_div)
//     }else{
//         bestSeller(bestSellersLeftArr,pro_div)
//     }
    
// })


let videoPlayArr = [
    {
      src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836045-uerkdvpa/watermarked/540/InShot_20220309_1844460631.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644919919-drjtghip/watermarked/540/EasyEyelinerHackusingaSpoon.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490662-qrlyukpb/watermarked/540/HowtoBaketheRightWay.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/4/30/1651342203-wnqistjz/watermarked/540/EffortlesslyExpressive9-16.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642490844-ureajzhm/watermarked/540/FaceLiftlikeKendallJenner.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644906634-nshmulgo/watermarked/540/FoundationHacks.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/2/15/1644905324-hgvtazeo/watermarked/540/KoreanBeautyHack-JAMSU.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643956359-clqnsktd/watermarked/540/SunkissedLookTutorial.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/1/18/1642491110-kgvyhwbt/watermarked/540/ReverseCatEyeliner.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836364-eixsrdot/watermarked/540/275182554_2096939307119931_4496228888503996313_n.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646835858-lvtrfujp/watermarked/540/InShot_20220309_184811595.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/2/4/1643955080-zfievyxo/watermarked/540/TissuePaperEyeshadowHack.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2021/11/1/1635767024-pedhjtzf/watermarked/540/EasywaytoMattifyLipstick7.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836196-scobeuaq/watermarked/540/Flawlessrecreationoftheiconicdiva.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836728-bkvwtnrc/watermarked/540/InShot_20220309_183351048.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/3/9/1646836997-qhfletip/watermarked/540/GlamSmokeyEyelook.mp4",
    },
    {
      src: "https://cdn4.fireworktv.com/medias/2022/4/22/1650623566-berqzfil/watermarked/540/MettlePrimingBalm-Vertical.mp4",
    },
  ];

let vid_div = document.querySelector(".vidSlider");
let videoPlay = (data) => {
  data.forEach((el) => {
    let video_div = document.createElement("div");
    video_div.className = "video_div";
    let video = document.createElement("video");
    video.src = el.src;
    video.style.border = "0";
    video.className = "videoshorts";
    video.style.cursor = "pointer";
     console.log(video)
    vid_div.append(video);
  });
};
videoPlay(videoPlayArr);
const clip = document.querySelectorAll(".videoshorts");
for (let i = 0; i < clip.length; i++) {
  clip[i].addEventListener("mouseover", (e) => {
    clip[i].play();
  });
  clip[i].addEventListener("mouseout", (e) => {
    clip[i].pause();
  });
}
let vidTemp = 0;
document.querySelector("#left").addEventListener("click", () => {
  let winWidth = window.outerWidth;
  vidTemp = vidTemp - winWidth * 0.74;

  if (vidTemp > 0) {
    console.group("left", vidTemp);
    vid_div.style.transform = `translateX(${-vidTemp}px)`;
    vid_div.style.transition = ".4s";
  } else {
    vid_div.style.transform = `translateX(${-0}px)`;
    vid_div.style.transition = ".4s";
    vidTemp = 0;
  }
});
document.querySelector("#right").addEventListener("click", () => {
  let winWidth = window.outerWidth;

  vidTemp = vidTemp + winWidth * 0.74;
  console.group("right", vidTemp, winWidth);
  if (vidTemp < winWidth * 3) {
    vid_div.style.transform = `translateX(${-vidTemp}px)`;
    vid_div.style.transition = ".4s";
  } else {
    vidTemp = vidTemp - winWidth * 0.74;
  }
});

function slideShow2(){
    const arr=['https://d32baadbbpueqt.cloudfront.net/Homepage/a1ea3283-9593-4f1c-8e6b-70c3a5062c37.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif',
'https://d32baadbbpueqt.cloudfront.net/Homepage/89e51326-1363-44e1-94f1-d5bd00bd2ca9.gif',
'https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg',
'https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg']

    let i=0;
    let div=document.getElementById('carousel2')
    
    let img=document.createElement('img');
    img.src=arr[0];

    div.append(img);
    i=i+1;
    
    setInterval(function(){

        if(i==6){
            i=0;
        }
        img.src=arr[i];
        i=i+1;

        div.append(img);

    }, 3000);
}

slideShow2();

// function slideShow3(){
//     const arr=[
// 'https://d32baadbbpueqt.cloudfront.net/Homepage/7fcf7da7-9d0b-4e1a-b09e-e075825bc9ad.jpg',
// 'https://d32baadbbpueqt.cloudfront.net/Homepage/05b6a9d3-2d45-4381-80f2-2b3fdd2c56f0.jpg',
// 'https://d32baadbbpueqt.cloudfront.net/Homepage/67885afc-5ba2-4f1d-a6dd-7012bf5b7b90.jpg'
// ]

// let i=0;
// let div=document.getElementById('carousel3')

// let img=document.createElement('img');
// img.src=arr[0];

// div.append(img);
// i=i+1;

// setInterval(function(){

//     if(i==3){
//         i=0;
//     }
//     img.src=arr[i];
//     i=i+1;

//     div.append(img);

// }, 2000);
// }

// slideShow3();
