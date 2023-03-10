import type { IJob } from "./job.interface";

export class pagination{
    data:IJob[]=[];
    currentPage:IJob[]=[];
    nextPage:IJob[]=[];
    prevPage:IJob[]=[];
    pageSize:number=0;
    paginationLimit:number=0;

    constructor(data:IJob[]){
        this.data=data;
        this.nextPage;
        this.prevPage;
    }
    paginate(size:number):IJob[]{
        this.paginationLimit=size;
        this.pageSize=Math.ceil(this.data.length/this.paginationLimit)
        this.currentPage=this.data.slice(this.pageSize-1,this.pageSize*this.paginationLimit)
        return this.currentPage;
    }
    next():IJob[]{

    }
    prev():Number{

    }
}