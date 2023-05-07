console.log('Hello')

class User{
    protected coursecount = 1      // can be accessed by extended class unlike private wich cannot
    email:string
    public name:string   // if nothing automatic public
    private city: string = ''  //must initialyze if not in construnctor private cannot be accessed
    constructor(email:string, name:string){
        this.email = email;
        this.name = name
    }
    private deleteToken(){
        console.log('Deleted')
    }

    get getAppleEmail():string{
        return `Apple${this.email}`
    }

    get courseCount():number{
        return this.coursecount
    }

    set courseCount(coursenum){
        if(coursenum<=1){
            throw new Error('Should be more than one')
        }
        this.coursecount = coursenum
    }

}

class subUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this.coursecount = 4
    } 
}

const Chris = new User('r@gmail.com','Chris')
// Chris.city = 'Buenos Aires'  cant access it