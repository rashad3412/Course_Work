//** customer has a subscritption and will get a 25% discount after refill total has been calculated.  */
//** customer has a coupon and will get $10 discount after discount calculated */

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//** Create a function for customer  */ /expeted output should be customers array of items.

function customer(name){
    return name
}

//** After we create customer function we store function in subscription variable */

const subscription = customer(sarah.subscription)

//** Create a function to see if customer is subscribe using boolean */ expected output should return - true or false 

function sub(subscription){
    if (subscription){
        return true
    }else
        return false
    }

//** after we create subsription function we store it in a sum variable */
const sum = sub(subscription)

//** Create a new function called amount using the variable sum to caculate the pricePerRefill and refills in obj */

function amount(sum){
    if (sum){
        return sarah.pricePerRefill * sarah.refills
    }else
        return ("error in function")
}

//** After we get the sum total we create a variable called discount using storing amount function in it.*/

const discount = amount(subscription)


//** Create a function called newAmount */

function newAmount(discount){
    let total = .25;
    // let total_2 = 10;
    if (discount){
        return discount - (discount * total);
        // discount - total is for coupon obj
    } else 
        return("error in logic");
}

const finalAmount = newAmount(discount) 

// console.log("Your grand total is " + finalAmount)

