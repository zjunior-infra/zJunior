import { filterJobs, paging } from "@components/Job/jobComponent";

const tags:string[] = [
    'Summer Intern 23',
    'Backend',
    'Frontend',
    'Software Engineer',
    'FullStack',
    'DevOps',
    'Android Developer',
    'Flutter',
    'Mobile Developer'
];

const level:string[] = ['Internship','EntryLevel'];

function createElements(){
    const searchtags = document.querySelector('#search-tags');
    tags.forEach(tag=>{
        searchtags.innerHTML += `<button id='tags' class=" shrink-0 p-2 border-2 border-primary rounded-xl hover:bg-primary hover:text-white duration-150">${tag}</button>`
    })
}
createElements();

const search = document.querySelector("#search");
const searchtext = document.querySelector("#search-text")
//@ts-ignore
searchtext.addEventListener('keypress',(ev)=>{
    if(ev.key === "Enter"){
        filterJobs(searchtext.value)
    }
})
search.addEventListener('click',()=>{
    if(searchtext.value != ''){
        filterJobs(searchtext.value)
    }
})

const btns = document.querySelectorAll('#tags');
btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        filterJobs(btn.textContent);
        btns.forEach(bb=>{
            if(bb.classList.contains('bg-primary')){
                bb.classList.remove('bg-primary')
            }
        })
        btn.classList.add('bg-primary')
    });
})

