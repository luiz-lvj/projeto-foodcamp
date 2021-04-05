
/* Global Variables */
let isplateselected = false;
let isdrinkselected = false;
let isdesertselected = false;

let plate_selected_name = "";
let plate_selected_price = 0;
let drink_selected_name = "";
let drink_selected_price = 0;
let desert_selected_name = "";
let desert_selected_price = 0;

let platesnames = [];
let platesprices = [];
let drinksnames = [];
let drinksprices = [];
let desertsnames = [];
let desertsprices = [];

/* Initializing Page */
disable_button();

populateProducts("plates");
populateProducts("drinks");
populateProducts("deserts");

/* Functions Definitions */

function populateProducts(idfood){
    let num_prod = 6;
    let name_p = "";
    let price_p = 0;

    if(idfood == "plates"){
        name_p = "Pizza";
        price_p = 15.0;
    }
    else if(idfood == "drinks"){
        name_p = "Coquinha";
        price_p = 2.0;
    }
    else if(idfood == "deserts"){
        name_p = "Mousse";
        price_p = 11.0;
    }
    let names = [];
    let prices = [];
    for (let i = 0; i< num_prod; i++){
        names.push(name_p + i);
        prices.push(price_p + 0.8*i);
    }

    if(idfood == "plates"){
        platesnames = names;
        platesprices = prices;
    }
    else if(idfood == "drinks"){
        drinksnames = names;
        drinksprices = prices;
    }
    else if(idfood == "deserts"){
        desertsnames = names;
        desertsprices = prices;
    }

    let selectclass = "." + idfood;
    let list_products = document.querySelector(selectclass);
    let products = list_products.children;
    
    let item_n = 0;
    for(let item of products){
        let nameplace = item.querySelector(".name-product");
        console.log(nameplace);
        nameplace.innerHTML = names[item_n];
        console.log(item_n);

        let priceplace = item.querySelector(".price-product");
        priceplace.innerHTML = "R$ "+prices[item_n].toFixed(2).replace(/\./g, ',');
        item_n = item_n + 1;
    }

}

function selectProduct(idfood, idproduct){
    if(idfood == "plates"){
        isplateselected = true;
        plate_selected_name = platesnames[idproduct -1];
        plate_selected_price = platesprices[idproduct -1];
    }
    else if(idfood == "drinks"){
        isdrinkselected = true;
        drink_selected_name = drinksnames[idproduct - 1];
        drink_selected_price = drinksprices[idproduct - 1]
    }
    else if(idfood == "deserts"){
        isdesertselected = true;
        desert_selected_name = desertsnames[idproduct - 1];
        desert_selected_price = desertsprices[idproduct - 1];
    }

    let selectclass = "." + idfood;
    let list_products = document.querySelector(selectclass);
    let product = list_products.children[idproduct -1];

    for (let item of list_products.children){
        if(item.classList.contains("selected")){
            item.classList.remove("selected");
            let selected_icon = item.querySelector("ion-icon");
            selected_icon.classList.add("not-selected");
        }
    }

    product.classList.add("selected");
    selected_icon = product.querySelector("ion-icon");
    selected_icon.classList.remove("not-selected");

    test_all_selected();
}

function disable_button(){
    button = document.querySelector("button");
    button.disabled = true;
    button.innerHTML = "Selecione os 3 itens para fechar o pedido";
}

function test_all_selected(){
    if(isplateselected  && isdrinkselected && isdesertselected){
        let button = document.querySelector(".checkout");
        button.disabled = false;
        button.classList.remove("disabled");
        button.classList.add("enabled");
        button.innerHTML = "Fechar Pedido";
    }
}

function sendWpp(){
    let totalamount = plate_selected_price + drink_selected_price + desert_selected_price;
    let phone = "5564993234149";
    let str_wpp = "https://wa.me/" + phone;

    let str_msg = "Olá, gostaria de fazer o pedido:\n";
    str_msg = str_msg + "- Prato: " + plate_selected_name + "\n";
    str_msg = str_msg + "- Bebida: " + drink_selected_name + "\n";
    str_msg = str_msg + "- Sobremesa: " + desert_selected_name + "\n";
    str_msg = str_msg + "Total: R$ " + totalamount.toFixed(2) + "\n";

    str_wpp = str_wpp + "?text=" + encodeURIComponent(str_msg);
    window.open(str_wpp);
}