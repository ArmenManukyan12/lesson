const boxes = [{
        img: "./img/samsung.jpg",
        name: "Samsung",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        price: "490 $",
    },
    {
        img: "./img/iphone.jpg",
        name: "Apple",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        price: "500 $"
    },
    {
        img: "./img/nokia.jpg",
        name: "Nokia",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        price: "310 $"
    },
    {
        img: "./img/xiaomi.jpg",
        name: "Xiaomi",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        price: "350 $"
    },
    {
        img: "./img/honor.jpg",
        name: "Honor",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        price: "244 $"
    },
    {
        img: "./img/realme.png",
        name: "Realme",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        price: "220 $"
    }
]
let total=0
function addProduct(name, text, price, img) {
    const name_phone = document.createTextNode(name);
    const text_phone = document.createTextNode(text);
    const price_phone = document.createTextNode(price);

    const newDiv = document.createElement("div");
    const newH2 = document.createElement("h2");
    const newSPAN = document.createElement("span")
    const newP = document.createElement("p");
    const newIMG = document.createElement("img");
    const newButton = document.createElement("button");
    const newInput = document.createElement("input");
   
    newH2.appendChild(name_phone);
    newP.appendChild(text_phone);
    newSPAN.appendChild(price_phone);

    newIMG.src = img;

    newDiv.append(newIMG, newH2, newP, newSPAN, newButton,newInput);
    newInput.setAttribute("type","number")
    newInput.min="0"
    newDiv.className = "phone"
    newButton.textContent = "Buy"
    const currentDiv = document.getElementById("boxes");
    currentDiv.appendChild(newDiv);
    
    let x = 1
    newButton.addEventListener("click", function () {
        if (x === 1) {
            number.textContent= total+= +newInput.value
            newButton.style.cssText = "background-color: rgb(9, 139, 9, 0.75)";
            x = 0;
        } else {
            number.textContent= total-= +newInput.value
            newButton.style.cssText = "";
            x = 1;
        }
    });
}

for (let i = 0; i < boxes.length; i++) {
    addProduct(boxes[i].name, boxes[i].text, boxes[i].price, boxes[i].img, boxes[i].button, boxes[i].input)
}






// let number = document.getElementById("number")
// const btn = document.getElementsByClassName("btn")
// function inc() {

//     number.textContent++

// }
// Array.from(btn).forEach( function(el){
//     el.addEventListener("click", inc)
// })