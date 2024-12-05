const wrapper=document.querySelector('.slidewrapper');
const menuItems=document.querySelectorAll('.menufiles');
 const products = [
    {
        id:1,
        title:'air force ',
        price: 119,
        colors:[
            {
                code:"black", 
            img:'./img/air.png',
            },
            {
                code:'darkblue', 
            img:'./img/air2.png',
            },
        ],
    },
    {
        id:2,
        title:'jordan ',
        price: 149,
        colors:[
            {
                code:"lightgray", 
            img:'./img/jordan.png',
            }, 
            {
                code:'darkblue', 
            img:'./img/air2.png',
            },
        ],
    },
    {
        id:3,
        title:'blazer ',
        price: 109,
        colors:[
            {
                code:"lightgray",
            img:'./img/blazer.png',
            },
            {
                code:'green',
            img:'./img/blazer2.png',
            },
        ],

    },
    
    ]
    


 
let chosenProduct =products[0];

const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductColor=document.querySelector(".color");
const currentProductSize=document.querySelector(".product");
const currentProductPrice=document.querySelector(".productTitle");

           