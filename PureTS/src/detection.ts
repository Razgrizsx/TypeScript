function detecType(val: number | string){  // type of type guard
    if(typeof val === 'string'){
        return val.toLowerCase()
    }
    return 3
}

interface User{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    admin: boolean
}

function isAdmin(account: User | Admin){   //in object
    if('admin' in account){
        return account.admin
    }
    return false
}


function logValue(x:Date | string) {
    if(x instanceof Date){
        console.log(x.toUTCString())
    }else{
        console.log(x.toUpperCase())
    }
}

type Fish = {
    swim:() => void
}

type Bird = {
    fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish{  //if its true returns a fish
   return (pet as Fish).swim !== undefined

}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return 'Fish food'
    }else{
        pet
        return 'Bird food'
    }

}

// discriminating union

interface Circle{
    kind: 'circle',
    radius: number
}

interface Square{
    kind: 'square',
    side: number
}


interface Rectangle{
    kind: 'rectangle',
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){   //rectangle missing
    if(shape.kind === 'circle'){
       return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}

function getArea(shape: Shape){    //add default shape
    switch(shape.kind){
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.side * shape.side
        case 'rectangle':
            return shape.length * shape.width
        default:
            const _defaultshape: never = shape
            return _defaultshape
    }
}