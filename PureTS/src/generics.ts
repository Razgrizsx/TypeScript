const Score: Array<number> = []
const names: Array<string> = []

function identity1(val:boolean | number): boolean | number {  //too many or
    return val
}

function identity2(val:any): any {  //information is gone, not working
    return val
}


function identity3<Type>(val: Type): Type{
    return val
}                                              //final version all types becom the same type


function identity4<T>(val:T):T{   //shorter version
    return val
}

interface Bottle{
    brand: string,
    type: number,
}


identity4<Bottle>({brand: 'a', type:1})

function getProducts<T>(products: T[]): T{ //is an array
    return products[3]
}

const getProducts2 = <T>(products: T[]): T => {
    return products[3]
}

interface Database {
    connection: string,
    username: string,
    passwod: string

}

function anotherF<T, U extends Database>(valone:T, valtwo:U):object{
    return{
        valone,
        valtwo
    }
}


anotherF(3, {connection:' ', username:' ', passwod: ' '})





interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{              //can put quiz and classes as T to push
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}