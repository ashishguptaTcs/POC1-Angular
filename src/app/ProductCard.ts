export class ProductCard
{
    id: string;
    title: string;
    description: string;
    by: string;
    imageUrl: string;   

    constructor(productId:string,productTitle:string,productDesciption:string,productImageUrl:string)
    {
        this.id=productId;
        this.title=productTitle;
        this.description=productDesciption;
        this.imageUrl=productImageUrl;
    }
}