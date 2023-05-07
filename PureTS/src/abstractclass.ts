abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia():void
    getreelTime():number{
        return 8
    }
}

//const Inst = new TakePhoto('test', 'test')  //cant create object of abstract class
//class Instagram1 extends TakePhoto{ }//can extend abstract class

class Instagram1 extends TakePhoto{    
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst: number
        ){
            super(cameraMode, filter)
    }
    getSepia():void{
        console.log('Sepia')
    }
}

const Inst = new Instagram1('test', 'test', 3)  //can create object of the class that extends the abstrct class

Inst.getreelTime()