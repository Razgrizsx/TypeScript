const user = {
    name: 'Chris',
    email: 'raz@gmail.com',
    isActive: true
}

function createUser1({ name, isPaid }: { name: string, isPaid: boolean }) {}


createUser1({name:'Chris', isPaid: false})

function createCourse():{name:string, price:number}{  //must return object
    return {name:'react', price:90}
}

type User = {         // Custom datatype
    readonly _id: string;   // cant be modified   user._id = '' cant be assigned
    name: string;
    email:string;
    isActive: boolean;
    credCardDetail?: number   //credit card is optional
}

function createUser(user: User): User{  //Use custom datatype  take and return a User
    return {
        _id: '',
        name: 'string',
        email: 'string',
        isActive: true
    }
}

createUser({_id: '1234',name: 'Chris', email:'raz@gmail.com', isActive:true})  //must have all three

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}





export{}