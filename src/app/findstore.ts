import  {Stores}  from './stores';

export default class findStore {
    zipCode: string;
    stores: Stores[];

    constructor(newzipCode:string,newstores:Stores[])
        {
            this.zipCode=newzipCode;
            this.stores=newstores;
        }
  }