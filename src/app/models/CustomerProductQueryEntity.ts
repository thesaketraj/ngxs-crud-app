export interface CustomerProductQueryEntity {
    custProductQueryId : number;
    customerId : number;
    createDate: Date;
    firstName: string;
    lastName: string;
    loginName:string;
    mobile:string;
    productId : number;
    prodSpu:string;
    prodQty:number;
    prodMrp:number;
    isResolved:string;
    updatedBy:number;
    executiveName:string;
    ticketNo:string;
    refOrderNo:string;
    productName:string;
    note:string;
}