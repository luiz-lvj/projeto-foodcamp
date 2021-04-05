function selectProduct(idfood, idproduct){
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
}


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
        price_p = 11.0
    }
    let names = [];
    let prices = [];
    for (let i = 0; i< num_prod; i++){
        names.push(name_p + i);
        prices.push(price_p + 0.8*i);
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
populateProducts("plates");
populateProducts("drinks");
populateProducts("deserts");


function selectProduct1(){

    list_products = document.querySelector(".list-products")
    product = list_products.querySelector(".card1");
    product.classList.add("selected");
    selected_icon = product.querySelector("ion-icon");
    selected_icon.classList.remove("not-selected");
}

function createProduct(){
    let list_products = document.createElement("li");
    list_products.style.display = "inline-block";
    list_products.classList.add("card-product");

    let name_product = document.createElement("p");
    name_product.classList.add("name-product");
    name_product.innerHTML = "Pizza";
    list_products.appendChild(name_product);
    list_parent = document.querySelector(".products");

    list_parent.appendChild(list_products);
}


