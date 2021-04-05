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


