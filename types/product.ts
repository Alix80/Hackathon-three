export interface Products{
    _id:string;
    name:string;
    _type:"products";
    image?:{
        asset:{
            _ref:string;
            _type:"image";

        }

    };
    price:number;
    description?:string;
    discountPercent: number;
    

}