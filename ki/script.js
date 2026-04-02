import { api } from "./api.js"

const products_div = document.getElementById("products");
const cat = document.getElementById("category");
const stoc = document.getElementById("stock");

let local_products = []

let local_categories = await api.get_categories()
console.log(local_categories)

load.addEventListener("click", loadProducts)
// edit.addEventListener("click", edit_product)
update.addEventListener("click", update_product)
delette.addEventListener("click", delete_product)

cat.innerHTML += local_categories.map(({id, name}) => `
    <option value="${id}">${name}</option>
`).join("")


let id = document.getElementById("product_id").value;
let name = document.getElementById("product_name").value;
let description = document.getElementById("product_description").value;
let price = document.getElementById("product_price").value;
// let stock = document.getElementById("product_stock").value;
// let category = document.getElementById("product_category").value;

let products;

function getInfo(id){
    //console.log(id)
    loadProducts(id);
    edit_product(id)
}

function firstLetter(str){
    let v = true;

    let result = "";

    for (let i = 0; i < str.length; i++){
        if (str[i] != " " && v){
            result = result + str[i]
            v = false;
        }else if (str[i] == " "){
            v = true;
        }
    }

    return result
}
console.log(firstLetter("big dd"))

window.getInfo = getInfo;

console.log(document.getElementById("stock").value)

async function loadProducts(product_id){
    id = document.getElementById("product_id").value;
    if (product_id > 0) {
        id = product_id
        console.log(product_id)

    }else{  
        clear_inputs()
    }
    console.log(id)
    
    if (id){
        products = await api.get_product_by_id(id);
    }else{
        products = await api.get_products();

    }
    local_products = products.map(s => ({
        id: s.id,
        sku: s.sku,
        name: s.name,
        description: s.description,
        price: s.price,
        isAvailable: s.isAvailable,
        categoryId: s.categoryId
    }));
    display_products();


}



function display_products(){
    products_div.innerHTML = local_products.map(({id, sku, name, description, price, isAvailable, categoryId}) => `
        <div class = "card" onclick = "getInfo(${id})">
            <strong>${id}</strong>
            <h2>${name}<br>${sku}</h2><hr>
            <strong>${description ? description : "No Description"}</strong><br><br>
            <strong>$${price}</strong><br>
            <strong>${isAvailable ? "In Stock" : "Out Of Stock"}</strong><br><br>
            <strong>${local_categories[categoryId-1].name}</strong>
            
        </div>
    `).join("")
}

async function edit_product(id){
    await loadProducts(id)
    console.log(local_products[0].id)  
    document.getElementById("product_name").value = local_products[0].name
    if (local_products[0].description == "No Description"){
        document.getElementById("product_description").value = ""
    }else{
        document.getElementById("product_description").value = local_products[0].description
    }
    document.getElementById("product_price").value = local_products[0].price
    let stoc_is = local_products[0].isAvailable
    console.log(`li\n ${stoc_is}`)
    //document.getElementById("product_stock").value 
    let cat_id = local_products[0].categoryId
    //document.getElementById("product_category").value = cat_id
    //loadProducts()
    cat.innerHTML = `
    <option value="${cat_id}">${local_categories[cat_id-1].name}</option>
    `

    stoc.innerHTML = `
    <option value="${String(Boolean(stoc_is))}">${stoc_is ? "In Stock" : "Out Of Stock"}</option>
    `
    
    cat.innerHTML += local_categories.filter(({id}) => id != cat_id).map(({id, name}) => `
        <option value="${id}">${name}</option>
    `).join("")
    
    stoc.innerHTML += `
        <option value="${String(!Boolean(stoc_is))}">${!stoc_is ? "In Stock" : "Out Of Stock"}</option>
    `

    console.log(`bst ${stoc.value}`)
    

}

async function update_product(){
    console.log(local_products[0])  
    let desc = ""
    if (document.getElementById("product_description").value) {
        desc = document.getElementById("product_description").value
    }else{
        desc = "No Description"
    }
    let stoccc = Boolean(document.getElementById("stock").options[document.getElementById("stock").selectedIndex].value)
    console.log(`ki ${console.log(stoccc)}`)
    const updatedProduct = {
        "id": local_products[0].id,
        "sku": local_categories[cat.value-1].prefix + firstLetter(document.getElementById("product_name").value),
        "name": document.getElementById("product_name").value,
        "description": desc,
        "price": parseFloat(document.getElementById("product_price").value),
        "isAvailable": stoc.value === "true",
        "categoryId": cat.value,
    };
    console.log("Sending product:", updatedProduct);
    console.log(document.getElementById("stock").value)
    await api.modify_product(local_products[0].id, updatedProduct)
    loadProducts()
}

async function delete_product(){
    await api.delete_product(id)
    clear_inputs()
    loadProducts()
}

function clear_inputs(){
    document.getElementById("product_id").value = ""
    document.getElementById("product_name").value = ""
    document.getElementById("product_description").value = ""
    document.getElementById("product_price").value = ""
    // document.getElementById("product_stock").value = ""
    // document.getElementById("product_category").value = ""
    cat.innerHTML =`
    <option value="" hidden>CATEGORY</option>
    `
    stoc.innerHTML =`
    <option value="" hidden>STOCK</option>
    `


}

loadProducts();