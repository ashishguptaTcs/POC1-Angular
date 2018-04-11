
  export class UserCreate
{
    applicationId: string;
    email: string;
    name: string;
    password: string;
    userName: string;

    constructor(newemail:string,newname:string ,newPassword:string,newuserName:string )
    {
        this.applicationId= 'Bond007';
        this.email=newemail;
        this.password=newPassword;
        this.name = newname;
        this.userName = newuserName;
    }
}