const order = {
    customerName : "Sarath",
    distance : 10,
    item : [
        { name : "Fried Rice", price : 250, quantity : 3},
        { name : "Chilli Chicken", price : 350}
    ]
}

const deliveryCharge = (distance) => {
    return distance > 7 ? 70 : 50;
}



const applyDiscount = (price,discount=0) => price - price * discount;

const festivalDiscount = (total) => applyDiscount(total, 0.2);

function placeOrder(order, discountType,callbackFn) {
    //Destructuring
    const {
        customerName,
        distance,
        item
    } = order;

    const totalAmount = item.reduce((sum,{price,quantity=1}) => sum + price * quantity,0);
    const discountedAmount = discountType(totalAmount);
    const finalAmount = discountedAmount + deliveryCharge(distance);
    callbackFn(customerName,finalAmount);
}

placeOrder(order, festivalDiscount, (name, finalAmount) => {
    console.log(`Order Confirmed for ${name}. \nPay Rs.${finalAmount}`);
})