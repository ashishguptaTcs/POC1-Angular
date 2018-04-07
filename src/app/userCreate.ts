
  export class UserCreate
{
    email: string;
    name: string;
    password: string;
    userName: string;

    constructor(newemail:string,newname:string ,newPassword:string,newuserName:string )
    {
        this.email=newemail;
        this.password=newPassword;
        this.name = newname;
        this.userName = newuserName;
    }
}