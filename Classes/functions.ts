function addTwo(num: number): number{  // supposed to return a number
    return num + 2
}

addTwo(5)

function getUpper(val: string){
    return val.toUpperCase()
}

getUpper('Chris')

let addOne = (num : number) => {
    num + 1
}

addOne(2)

function signUp(name: string, email: string, isPaid: boolean = false){ // = is default
    console.log(name, email, isPaid)
}

signUp('Chris', 'raz@gmail.com', true)

const arr = [1,2,3]

arr.map((e):number=> {return e})

function consoleError(errmsg: string):void{ //returns nothing
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}


export{}

