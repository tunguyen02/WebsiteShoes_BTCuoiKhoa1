import listProduct from "./data_products.js";


let productsCartList = [];  //Lưu dữ liệu lên localStorage
if(!localStorage.hasOwnProperty('productsCartList')){
    localStorage.setItem('productsCartList',JSON.stringify(productsCartList));
}
productsCartList = JSON.parse(localStorage.getItem('productsCartList'));
console.log(productsCartList);

const productsList = document.querySelector(".products");
const showProducts = (list) => {
    productsList.innerHTML ='';
    for(let product of list){
        let productCard = document.createElement('div');
        productCard.classList.add('card');
        productCard.innerHTML = 
        `
        <div class="img">\
        <a href="product.html">\
        <img src="${product.img1} " alt="">\
        </a>\
        </div>\
        <div class="info">\
        <div class="description">\
        <div class="type">${product.type}</div>\
        <div class="id">\
        <a href="product.html">${product.id}</a>\
        </div>\
        </div>\
        <div class="figure">\
        <div class="price">${product.price}₫</div>\
        <div class="sales">Đã bán ${product.sells}</div>\
        </div>\
        </div>\
        <div class="add">\
        <button>\
        <img src="img/icons8-shopping-bag-50.png" alt="">\
        Thêm vào giỏ hàng\
        </button>\
        </div>\
        `;
        productsList.appendChild(productCard);
        const btnAdd = productCard.querySelector('.add button');
        btnAdd.addEventListener('click', () => {
            let productData = productsCartList.find((productNumArr) => productNumArr[0].id ===  product.id);
            if(typeof productData === "undefined"){
                productData = [product,1];
                productsCartList.push(productData);
            } else{
                productData[1]++;
            }
            localStorage.setItem('productsCartList',JSON.stringify(productsCartList));
            alert(`Thêm sản phẩm ${product.id} thành công`);
        });
    }
};

showProducts(listProduct);

const orderSelect = document.querySelector('#order-select');
orderSelect.addEventListener('change', function() {
    const selectedValue = orderSelect.value;
    if(selectedValue === 'popularity'){
        showProducts(listProduct.sort((a,b) => b.sells - a.sells));
    }else if(selectedValue === 'price-asc'){
        showProducts(listProduct.sort((a,b) => a.price - b.price));
    }else if(selectedValue === 'price-desc'){
        showProducts(listProduct.sort((a,b) => b.price - a.price));
    }
});

//Tránh input giá tiền rỗng
const numInputs = document.querySelectorAll('input[type=number]')

numInputs.forEach(function(input) {
  input.addEventListener('focusout', function(e) {
    if (e.target.value === '') {
      e.target.value = '0';
    }
  })
})

const btnPriceFilter = document.querySelector('.price-filter button');
const minPriceInput = document.querySelector('#min-price');
const maxPriceInput = document.querySelector('#max-price');
btnPriceFilter.addEventListener('click',() => {
    showProducts(listProduct.filter((product) => {
        return product.price >= Number.parseFloat(minPriceInput.value) && 
            product.price <= Number.parseFloat(maxPriceInput.value);
    }));
});

