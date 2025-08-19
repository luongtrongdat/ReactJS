class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.id = Customer.nextId++;
    }
    getDetails() {
        return `Customer ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Address: ${this.shippingAddress}`;
    }
}
Customer.nextId = 1;
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = Product.nextId++;
    }
    sell(quantity) {
        if (quantity > 0 && quantity <= this.stock) {
            this.stock -= quantity;
        }
        else {
            console.log(`Số lượng không hợp lệ hoặc không đủ hàng cho ${this.name}.`);
        }
    }
    restock(quantity) {
        if (quantity > 0) {
            this.stock += quantity;
        }
    }
}
Product.nextId = 1;
class ElectronicProduct extends Product {
    constructor(name, price, stock, warrantyPeriod) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price} VND, Stock: ${this.stock}, Warranty: ${this.warrantyPeriod} months`;
    }
    getShippingCost(distance) {
        return 50000;
    }
    getCategory() {
        return "Electronics";
    }
}
class ClothingProduct extends Product {
    constructor(name, price, stock, size, color) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price} VND, Stock: ${this.stock}, Size: ${this.size} cm, Color: ${this.color}`;
    }
    getShippingCost(distance) {
        return 25000;
    }
    getCategory() {
        return "Clothing";
    }
}
class Order {
    constructor(customer, products) {
        this.customer = customer;
        this.products = products;
        this.orderId = Order.nextId++;
        this.totalAmount = this.calculateTotal();
    }
    calculateTotal() {
        return this.products.reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
        }, 0);
    }
    getDetails() {
        const productDetails = this.products.map(item => `\n  - ${item.product.name} (x${item.quantity}) - ${item.product.price * item.quantity} VND`).join('');
        return `Order ID: ${this.orderId}\nCustomer: ${this.customer.name}\nProducts: ${productDetails}\nTotal Amount: ${this.totalAmount} VND`;
    }
}
Order.nextId = 1;
