interface iUser {
    readonly dbid: number
    email: string,
    userId: number,
    googleid?: number
    //startTrial: () => string 
    startTrial(): string
    getCoupon(cname:string):number
}

interface iUser {         //inherit
    githubToken: string
}

const u : iUser = {dbid:2,
     email: 'r@gmail.com',
     githubToken: 'string',
      userId: 1,
      startTrial: () => {return 'Trial started'},
       getCoupon:(name:'chris') => {return 10}
    }

interface Admin extends iUser{           //extends
    role:'admin' | 'ta' | 'learner'
}

