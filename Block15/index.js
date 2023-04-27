//** First we create a an object labled customer and add Key Value Pairs */
console.log("******Object******")
const customer = {
 fristName : "jake",
 lastName : "smith",
 email : "jaekSmih!aol.com",
 phone : "undefined",
 zipCode : "631",
 favoriteFlavors : 32,
 cupSize : "medium",
 favoriteStore : "Target",
 firstVisit : false

}
console.log(customer)

// ** We are going to update email object */
customer["email"] = "Jak3Smith1992@email.com"
console.log(customer)

//** We are going to modify phone using object properties */
customer["phone"] = "3195551234"
console.log(customer)

//** We are going to modify zipCode using object properties */
customer["zipCode"] = "63132"
console.log(customer)

//** We are going to modify favoriteFlavors using object properties */
customer["favoriteFlavors"] = ["coffee", "strawberry","matcha"]
console.log(customer)

//** Next we will delete zipCode from the object */
delete customer.zipCode
console.log(customer)

//** Next we will delete favoriteStore from the object */
delete customer.favoriteStore
console.log(customer)

//** Next we will add a toppings key and values */
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"]
console.log(customer)

//** Next we will add futureFlavors key and values */
customer.futureFlavors = "mango"
console.table(customer)

//** Next we will add todaysPurchaseCost 5.32 */
customer.PurchaseCost = 5.32
console.table(customer)

//** and Finally we will print the keys from the object to complete the survey. */
console.log("******Keys*******")
const keysArr = Object.keys(customer)
console.log(keysArr)
