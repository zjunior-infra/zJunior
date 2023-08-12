import {nextPage,prevPage,pagedJobs}  from '@components/Job/jobComponent.js'

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const pages = document.querySelector("#pageCount");
const current = document.querySelector("#currentPage");
const tags = document.querySelectorAll('#tags');
pages.textContent = pagedJobs.pageCount;

function navigate(where){
    where();
    toggleButtons();
}
function toggleButtons(){
    pages.textContent = pagedJobs.pageCount;
    current.textContent = pagedJobs.globalIdx;
    window.scroll({
        top:250,
        behavior:"smooth"
    })
    if(pagedJobs.isLast()){
        nextBtn.disabled = true;
        nextBtn.classList.remove("hover:ring-zinc-700","hover:ring-2", "hover:shadow-md")
    }
    else{
        nextBtn.disabled = false;
        nextBtn.classList.add("hover:ring-zinc-700","hover:ring-2", "hover:shadow-md")
    }
    if(!pagedJobs.isFirst()){
        prevBtn.disabled = false;
        prevBtn.classList.add("hover:ring-zinc-700","hover:ring-2", "hover:shadow-md")    
    }
    else{
        prevBtn.disabled = true;
        prevBtn.classList.remove("hover:ring-zinc-700","hover:ring-2", "hover:shadow-md") 
    }
    tags.forEach(tag => {
        if(tag.classList.contains('bg-primary')){
            tag.classList.remove('bg-primary')
        }
    });
}
document.querySelector('#clear-filters').addEventListener('click',toggleButtons);

nextBtn.addEventListener("click",()=>{navigate(nextPage)});
prevBtn.addEventListener('click',()=>{navigate(prevPage)});