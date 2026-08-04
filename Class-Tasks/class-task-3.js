cart= [
    {id : 1, name : "Pizza", price : 300, quantity : 2},
    {id : 2, name : "Burger", price : 150, quantity : 1}
];

customer = {
    name : "Karthik",
    city : "Kochi",
    membership : "Silver"
};

//Array Spread
updatedCart = [...cart , {id : 3, name : "Pasta", price : 200}];
// console.log(updatedCart);

//Object Spread
premiumCustomer = {
    ...customer,
    membership : "Gold",
    coupon : "FOOD50"
};
// console.log(premiumCustomer);

//Object Destructuring
const {
    name,
    city
} = customer;
// console.log(name, city);

//Array Destructuring
const [firstItem, secondItem]=updatedCart;
// console.log(name);
// console.log(firstItem.name);

function calculateItemTotal(price, quantity=1){
    return price * quantity;
}
const total1 = calculateItemTotal(firstItem.price, firstItem.quantity);
const total2 = calculateItemTotal(secondItem.price)
// console.log(total1 +"\n"+ total2);

//processCart Function
const processCart = (cartItems, discountFn, callback) => {
    const totalAmount = cartItems.reduce((sum, {price, quantity=1}) => sum + price * quantity, 0);
    // discountFn = FestivalDiscount(totalAmount);
    const finalAmount = discountFn(totalAmount);
    callback(finalAmount, customer.name);
}

const noReturns = (total) => total;
const FestivalDiscount =  (total) => total -total * 0.1;

const finalBill = (total, name) => {
    console.log(`Order Confimed for ${name}. \nPay Rs.${total}`);
}

processCart(updatedCart, FestivalDiscount, finalBill);