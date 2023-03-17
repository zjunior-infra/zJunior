import {nextPage,prevPage,pagedJobs}  from '@components/Job/jobComponent.js'

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const pages = document.querySelector("#pageCount");
const current = document.querySelector("#currentPage");
const navigation = document.querySelector('#navigation');
pages.textContent = pagedJobs.pageCount;

function navigate(where){
    where();
    toggleButtons();
}
function toggleButtons(){
    pages.textContent = pagedJobs.pageCount;
    current.textContent = pagedJobs.globalIdx;
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
}
document.querySelector('#clear-filters').addEventListener('click',toggleButtons);
document.querySelector('#submit-button').addEventListener('click',toggleButtons);
document.querySelector('#job-name').addEventListener("keydown",event => {
    if(event.keyCode === 13)
    toggleButtons();
});

nextBtn.addEventListener("click",()=>{navigate(nextPage)});
prevBtn.addEventListener('click',()=>{navigate(prevPage)});