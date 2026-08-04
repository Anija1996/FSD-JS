const cart = [
    {id:1 , name:"Pizza", price:300, quantity:2},
    {id:2, name:"Burger",price:150, quantity:1}
];

const customer = {
    name:"Karthik",
    city:"Kochi",
    membership:"Silver"
};

//Array Spread
const updatedCart = [...cart,{id:3, name:"noodles" , price:300}];

//Object Spread
const premiumCustomer = {...customer,membership:"Gold",coupon:"FOOD50"};

//Object Destructuring
const {
    name,
    city
}=customer;

//Array Destructuring
const [firstItem,secondItem,thirdItem]=updatedCart;

console.log("Name of the customer : ",name);
console.log("First food item : ",firstItem.name);

const calculateItemTotal = (price,quantity=1) => price*quantity;
calculateItemTotal(firstItem.price,firstItem.quantity);
calculateItemTotal(thirdItem.price);

const noDiscount = (total) =>total;
const festivalDiscount = (total) => total-total*0.1;

const printBill=(name,finalAmount)=>{
    console.log(`\n${name} have to pay Rs.${finalAmount}\n`);   
}

const processCart = (cartItems,discountFn,callback) =>{
    const totalPrice = cartItems.reduce((sum,{price,quantity=1})=>sum+price*quantity,0);
    const finalAmount = discountFn(totalPrice);
    callback(name,finalAmount);
}
processCart(updatedCart,festivalDiscount,printBill);

