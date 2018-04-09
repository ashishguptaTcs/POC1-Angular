export class User
{ 
    applicationId:string;
    userId: string ; 
    password: string ;


    constructor(newapplicationId :string , newUserId:string,newPassword:string )
    {   
        this.applicationId =newapplicationId;
        this.userId=newUserId;
        this.password=newPassword;
    }
}