
let productObj ={
    getPrice : function(){
        return `The price of product is ${this.price}`
    },
    increasePrice : function(val){
        if(val>this.price){
            return 
        }
      this.price += val
      return this.price
    },
    decreasePrice : function(val){
        if(val>this.price){
            return 
        }
      this.price -= val
      return this.price
    },
    isExpensive : function(){
         if (this.price>1000) {
            return `Expensive`
        } else {
            return `Not Expensive`
        }
    }
}

function CreateProduct(product_name ,brand ,reviews ,price ,rating ){
    let obj ={};

    obj.product_name = product_name;
    obj.brand = brand;
    obj.reviews = reviews;
    obj.price = price;
    obj.rating =rating;
    Object.setPrototypeOf(obj,productObj)
    return obj
}

let p1 = CreateProduct("smart watch","samsung",122,5000,5)
console.log(p1)
console.log(p1.getPrice())
console.log(p1.increasePrice(100))
console.log(p1.decreasePrice(100))
console.log(p1.isExpensive())

let electronicsObj = {
    bill : function(){
        return `The price after 10% discount is ${this.price- 0.1*this.price}`
    },
    details : function(){
        return `${this.product_name} of ${this.brand} with warranty of ${this.warranty} years at a price ${this.price- 0.1*this.price} having a discount of 10%`
    }
}
Object.setPrototypeOf(electronicsObj,productObj)

function electronics(product_name,brand,reviews,price ,rating,warranty){
    let obj1 =  CreateProduct(product_name,brand ,reviews ,price ,rating );
    obj1.warranty  = warranty;
    Object.setPrototypeOf(obj1,electronicsObj)
    return obj1
}

let p2 = electronics("LED TV","LG",2245,35000,4.3,2)
console.log(p2)
console.log(p2.brand)
console.log(p2.getPrice())
console.log(p2.increasePrice(500))
console.log(p2.decreasePrice(100))
console.log(p2.isExpensive())
console.log(p2.bill())
console.log(p2.details())

let crockeryObj = {
    bill : function(){
        return `the price after applying a discount: ${this.price - 0.15*this.price}`
    },
    details : function(){
       return `${this.product_name} of brand ${this.brand} of material ${this.material} at a price ${this.price - 0.15*this.price} having a discount of 15%`
    }
}
Object.setPrototypeOf(crockeryObj,productObj)
function crockery(product_name,brand ,reviews ,price ,rating,material){
    let obj2 =  CreateProduct(product_name,brand ,reviews ,price ,rating );
    obj2.material = material;
    Object.setPrototypeOf(obj2,crockeryObj)
return obj2
}

let p3 = crockery(  "21 Piece Dinnerware","Diva",104,16000,4.5,"ceramic")
console.log(p3)
console.log(p3.getPrice())
console.log(p3.increasePrice(230))
console.log(p3.isExpensive())
console.log(p3.decreasePrice(121))
console.log(p3.bill())
console.log(p3.details())