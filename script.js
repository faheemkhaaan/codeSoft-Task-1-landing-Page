const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector(".navBar");
const closeNavbarBtn = document.querySelector("#close_navbarBTn");
const aboutUsImage = document.getElementById("about-us-image");
const card3 = document.getElementById("card3");

const serviceContent = document.querySelector(".service_content");
hamburger.onclick = function(){
    navBar.classList.add("visible")
    navBar.style.opacity = '0'
    setTimeout(()=>{
        navBar.style.opacity = '1'
    },0)
}

closeNavbarBtn.onclick = function(){
    
    navBar.style.opacity = '0'
    setTimeout(()=>{
        navBar.classList.remove("visible");
        navBar.style.opacity = '1';
    },1000);
}


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    // aboutUsImage.src = data.products[4].images[0]
    card3.src = data.products[5].images[3];

    const products = data.products;

    // products.map((product)=>{
    //     const prodcutCard = card(product.thumbnail,"See Info");
    //     serviceContent.appendChild(prodcutCard);
    // })

    // console.log(products)
});

function card(src,buttonText){
    const serviceCard = document.createElement("div");
    const img = document.createElement("img");
    const btn = document.createElement("button");
    serviceCard.classList.add('service_card')
    img.src = src;
    btn.textContent = buttonText;
    serviceCard.appendChild(img);
    serviceCard.appendChild(btn);
    return serviceCard;
}