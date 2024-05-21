let productsCartList = JSON.parse(localStorage.getItem('productsCartList'));

let tableData = document.querySelector('.shop_table tbody');
const finalPriceText = document.querySelector('.cart-total .final-total .final-price');
let finalPrice = 0;

let viewProductsButton = document.querySelector('.view-product');
viewProductsButton.addEventListener('click',()=>{
    location.assign('category_list.html');
})

const showProductsCart = (list) => {
    finalPrice = 0;
    tableData.innerHTML ='';
    for(let productData of list){
        let productCard = document.createElement('tr');
        productCard.classList.add('card-item');
        let productPrice = productData[0].price;
        productCard.innerHTML = 
        `
        <td class="product-remove">
            <button>x</button>
        </td>
        <td class="product-img">
            <a href=""><img src=${productData[0].img1} alt=""></a> 
        </td>
        <td class="product-id"><a href="">${productData[0].id}</a></td>
        <td class="product-price">${productPrice}</td>
        <td class="product-quantity">
            <div class="adjust-qty">
                <button class="decrease-button">-</button>
                <input type="number" name="" class="input-qty" min="0" value=${productData[1]}>
                <button class="increase-button">+</button>
            </div>
        </td>
        <td class="product-subtotal">${productPrice*productData[1]}đ</td>
        `;
        tableData.appendChild(productCard);
        const increaseButton = productCard.querySelector('.increase-button');
        const decreaseButton = productCard.querySelector('.decrease-button');
        const deleteButton = productCard.querySelector('.product-remove button');

        finalPrice += productPrice*productData[1];
        const quantityInput = productCard.querySelector('.input-qty');
        let quantity = Number.parseInt(quantityInput.value);
        const subtotalText = productCard.querySelector('.product-subtotal');
        let subtotal = Number.parseInt(subtotalText.innerHTML.slice(0, -1));
        
        increaseButton.addEventListener('click',() => {
            quantity++;
            quantityInput.value = quantity.toString();
            productData[1] = quantity;
            subtotal += productPrice;
            subtotalText.innerHTML = subtotal.toString() +'đ';
            finalPrice += productPrice;
            finalPriceText.innerHTML = finalPrice.toString()+'đ';
            localStorage.setItem('productsCartList',JSON.stringify(productsCartList));
        })
        decreaseButton.addEventListener('click',() => {
            if(quantity>1){
                quantity--;
                quantityInput.value = quantity.toString();
                productData[1] = quantity;
                subtotal -= productPrice;
                subtotalText.innerHTML = subtotal.toString() +'đ';
                finalPrice -= productPrice;
                finalPriceText.innerHTML = finalPrice.toString()+'đ';
                localStorage.setItem('productsCartList',JSON.stringify(productsCartList));
            }
        })
        deleteButton.addEventListener('click',()=>{
            let index = productsCartList.indexOf(productData);
            console.log(index);
            productsCartList.splice(index,1);
            console.log(productsCartList);
            localStorage.setItem('productsCartList',JSON.stringify(productsCartList));
            showProductsCart(productsCartList);
        })
    }
    finalPriceText.innerHTML = finalPrice.toString() + 'đ';
};

showProductsCart(productsCartList);