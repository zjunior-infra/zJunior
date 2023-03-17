import type { IJob } from "../../util/job.interface";

export class pagination{
    data:IJob[]=[];
    currentPage:IJob[]=[];
    indexedPage:Map<number,IJob[]>= new Map;
    pageCount:number=0;
    paginationLimit:number=0;
    globalIdx:number=1;
    constructor(data:IJob[],size:number){
        this.data=data;
        this.paginate(size);
        //@ts-ignore
        this.currentPage = this.indexedPage.get(1);
    }
    paginate(size:number):Map<number,IJob[]>{
        this.paginationLimit=size;
        this.pageCount=Math.ceil(this.data.length/this.paginationLimit)
        for(let i=1;i<=this.pageCount;i++){
            let page;
            let prevIdx=i-1;
            page=this.data.slice(prevIdx*this.paginationLimit,this.paginationLimit*i)
            this.indexedPage.set(i,page)
        }
        return this.indexedPage;
    }
    page(number:number):IJob[]{
        this.globalIdx=number;
        //@ts-ignore
        return this.indexedPage.get(number);
    }
    isFirst():boolean{
        return this.globalIdx === 1 ? true : false;
    }
    isLast():boolean{
        return this.globalIdx === this.pageCount ? true : false;
    }

}