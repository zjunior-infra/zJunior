import type { IJob } from "../../util/job.interface";

export class pagination{
    data:IJob[]=[];
    currentPage:IJob[]=[];
    indexedPage:Map<number,IJob[]>= new Map;
    nextPage:IJob[]=[];
    prevPage:IJob[]=[];
    pageCount:number=0;
    paginationLimit:number=0;
    globalIdx:number=1;
    constructor(data:IJob[]){
        this.data=data;
        this.nextPage;
        this.prevPage;
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
    next():IJob[]{
        if(this.globalIdx<=this.pageCount){
            const currentPage=this.indexedPage.get(this.globalIdx++)
            return currentPage ?? {...[]};
        }
        throw new Error('Cannot go forward')
    }
    prev():IJob[]{
        if(this.globalIdx>=1){
        const currentPage=this.indexedPage.get(this.globalIdx--)
        return currentPage ?? {...[]};
        }
        throw new Error('Cannot go back')
    }
    currentPageNumber():number{
        return this.globalIdx;
    }
    pageSize():number{
        return this.pageCount;
    }

}