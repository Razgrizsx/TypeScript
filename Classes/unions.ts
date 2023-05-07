let score: number | string = 30
score = 40
score = '50'

type Users = {
    name:string
    id:number
}

type Admin = {
    userName:string
    id:number
}

let Chris: User | Admin = {
    userName: 'Chris',
    name: 'Chris', 
    id: 1234
} 

const data : (string | number)[] = [] //array of numbers and strings

let limited : 'one' | 'two' | 'three'

limited = 'one'  //limited = 'four' is error