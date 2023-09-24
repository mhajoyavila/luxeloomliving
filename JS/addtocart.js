const product = [
    {
        id: 0,
        image: 'image/chair.jpg',
        title: 'Chair',
        price: 120,
    },
    {
        id: 1,
        image: "image/table.jpg",
        title: 'Table',
        price: 150,
    },
    {
        id: 2,
        image: 'image/DiningSet.webp',
        title: 'Table',
        price: 150,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom1'>
        <p>${title}</p>
        <h2>P ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`    
    )
}).join('')   

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function deElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0; //total
    document.getElementById("count").innerHTML=cart.length; // cart counts
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "P "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price; //total
            document.getElementById("total").innerHTML = "P "+total+".00";
            return(
                `<div clas='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>
                <p style='font-size: 12px;'>${title}</p>
                <h2 style='font-size: 15px;'>P ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='deElement("+(j++) +")'></i></div>"
            );
        }).join('')
    }
}