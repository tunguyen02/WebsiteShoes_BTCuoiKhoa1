class Product{
    constructor(type,id,price,sells,img1,img2){
        this.type = type;
        this.id = id;
        this.price = price;
        this.sells = sells;
        this.img1 = img1;
        this.img2 = img2;
    }
}

let listProduct = [
    new Product("GIÀY","LUX-C01-D", 765000,650,"img/0.jpg","img/1.jpg"),
    new Product("GIÀY","LUX-D01-D", 775000,550,"img/2.jpg","img/3.jpg"),
    new Product("GIÀY","GD602-D", 635000,206,"img/4.jpg","img/5.jpg"),
    new Product("GIÀY","GD603-D", 635000,206,"img/6.jpg","img/7.jpg"),
    new Product("GIÀY","SMART-06-X", 670000,103,"img/8.jpg","img/9.jpg"),
    new Product("GIÀY","SMART-06-D", 670000,138,"img/10.jpg","img/11.jpg"),
    new Product("GIÀY","DELTA-02-D", 710000,116,"img/12.jpg","img/13.jpg"),
    new Product("GIÀY","GLC-44-D", 585000,129,"img/14.jpg","img/15.jpg"),
    new Product("GIÀY","FASTER-08-X", 755000,117,"img/16.jpg","img/17.jpg"),
    new Product("GIÀY","FASTER-08-D", 645000,122,"img/18.jpg","img/19.jpg"),
    new Product("DÉP DA","DE-06-X", 545000,157,"img/20.jpg","img/21.jpg"),
    new Product("DÉP DA","DE-06-D", 545000,197,"img/22.jpg","img/23.jpg"),
    new Product("PHỤ KIỆN","LÓT SMARTFOOT-04-ĐEN", 155000,103,"img/24.jpg","img/25.jpg"),
    new Product("PHỤ KIỆN","LÓT SMARTFOOT-03-ĐEN", 200000,658,"img/26.jpg","img/27.jpg"),
    new Product("DÉP DA","DE-02-N", 545000,166,"img/28.jpg","img/29.jpg")
]

export default listProduct;
export {Product};