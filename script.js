let burger = document.querySelector('.burger')
let nav = document.querySelector('.burger-nav')
let items = document.querySelectorAll('.burger-nav__item')
burger.addEventListener('click', function (element) {
    if (nav.classList.contains('burger__active')){
        nav.classList.remove('burger__active') 
        nav.classList.add('burger__out')
        items.forEach((element) =>{
            element.style.opacity = "1";
        })
    }
    else{
        nav.classList.remove('burger__out')
        nav.classList.add('burger__active')
        items.forEach((element) =>{
            element.style.opacity = "0";
        }) 
    }

})

let trending = [
    {
        state: "New",
        type: "CHAIR",
        description: "Minimal LCD chair" ,
        salePrice: '$180',
        price: "$250",
        rate: "5",
        image: 'img/container.jpeg'
    },
    {
        state: "New",
        type: "CHAIR",
        description: "Minimal iconic chair" ,
        salePrice: '$120',
        price: "$150",
        rate: "4",
        image: 'img/container.jpeg'
    },
    {
        state: "Sale",
        type: "CHAIR",
        description: "Dining chairs" ,
        salePrice: '$100',
        price: "$120",
        rate: "5",
        image: 'img/container.jpeg'
    },
    {
        state: "Sale",
        type: "CHAIR",
        description: "Buskbo armchair " ,
        salePrice: '$130',
        price: "$150",
        rate: "4",
        image: 'img/container.jpeg'
    },
    {
        state: "Sale",
        type: "CHAIR",
        description: "Modern chairs" ,
        salePrice: '$100',
        price: "$120",
        rate: "5",  
        image: 'img/container.jpeg'
    },
    {
        state: "Sale",
        type: "CHAIR",
        description: "Plastic dining chair" ,
        salePrice: '$130',
        price: "$150",
        rate: "4",
        image: 'img/container.jpeg'
    },
    {
        state: "New",
        type: "CHAIR",
        description: "Minimal Wood chair" ,
        salePrice: '$180',
        price: "$250",
        rate: "5",
        image: 'img/container.jpeg'
    },
    {
        state: "New",
        type: "CHAIR",
        description: "Elegent wood chair" ,
        salePrice: '$120',
        price: "$150",
        rate: "4",
        image: 'img/container.jpeg'
    }]

let trendingList = document.querySelector(".trending__list");
trending.forEach((element) => {
    trendingList.innerHTML += `
        <li class="trending__list__item">
            <div class="state__div">
                <p class="state">${element.state}</p>
            </div>
            <img src="${element.image}" alt="">
            <p class="type">${element.type}</p>
            <h4 class="description">${element.description}</h4>
            <div class="prices">
                <p class="salePrice">${element.salePrice}</p>
                <p class="cardPrice">${element.price}</p><hr class="card__line">
                <img>
            </div>
        </li>
    `
})
