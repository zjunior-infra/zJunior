import { filterJobs, paging } from "@components/Job/jobComponent";

const tags:string[] = [
    'Software Engineer',
    'Backend',
    'Frontend',
];

const level:string[] = ['Internship','EntryLevel'];

function createElements(){
    const searchtags = document.querySelector('#search-tags');
    tags.forEach(tag=>{
        searchtags.innerHTML += `<button id='tags' class=" font-medium shrink-0 p-2 border-[1px] hover:bg-accent border-accent rounded-xl hover:text-white duration-150">${tag}</button>`
    })
}
createElements();

const searchtext = document.querySelector("#search-text")
//@ts-ignore
searchtext.addEventListener('keypress',(ev)=>{
    if(ev.key === "Enter"){
        filterJobs(searchtext.value)
    }
})
searchtext?.addEventListener('click',()=>{
    searchtext.value=""
})


const btns = document.querySelectorAll('#tags');
btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        filterJobs(btn.textContent);
        btns.forEach(bb=>{
            if(bb.classList.contains('bg-accent')){
                bb.classList.remove('bg-accent')
            }
        })
        btn.classList.add('bg-accent')
    });
})

