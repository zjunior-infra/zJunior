import Fuse from "fuse.js";
import {LoadingJobs} from '@components/Loader/Loader.js'
import {pagination} from '@components/pagination/pagination.module'

function formatDeadline(deadline, close) {
  if (!close) {
    return `<p>Apply before: ${deadline}</p>`;
  }
  return `<p class='text-[#ED0000] flex relative'}>Apply before: ${deadline} 
                <span class="flex">
                    <span class="animate-ping mx-[0.68rem] absolute inline-flex h-3 w-3 rounded-full bg-[#ED0000] opacity-75"></span>
                    <span class="relative mx-2 -my-1"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.98092 4.94855L1.98066 4.9484L1.97722 4.95528C1.86868 5.17236 1.92788 5.44752 2.1417 5.56694L3.36514 6.27619C3.43623 6.32259 3.52566 6.34444 3.59556 6.34444C3.76137 6.34444 3.89621 6.2493 3.98098 6.12214C4.12247 5.90991 4.04651 5.63395 3.82478 5.50092L3.82479 5.50091L3.82349 5.50015L2.59936 4.79051C2.3875 4.65153 2.11337 4.72779 1.98092 4.94855ZM13.2095 2.61713C13.348 2.40593 13.2727 2.13283 13.0535 1.99992C12.8415 1.86023 12.5669 1.93641 12.4342 2.15743L12.4335 2.15874L11.7238 3.38287C11.589 3.58872 11.6544 3.88376 11.8832 4.00222C11.9538 4.04754 12.042 4.06889 12.1111 4.06889C12.2769 4.06889 12.4118 3.97374 12.4965 3.84658L12.4967 3.84669L12.4998 3.84126L13.2095 2.61713ZM13.9 14.4928V9C13.9 6.29588 11.7041 4.1 9 4.1C6.29588 4.1 4.1 6.29588 4.1 9V14.4928C3.58181 14.684 3.21111 15.1664 3.21111 15.7556C3.21111 16.5041 3.80699 17.1 4.55556 17.1H13.4444C14.193 17.1 14.7889 16.5041 14.7889 15.7556C14.7889 15.1664 14.4182 14.684 13.9 14.4928ZM12.9889 13.5444V14.4111H5.01111V13.5444H12.9889ZM9 5.01111C11.2025 5.01111 12.9889 6.79745 12.9889 9V12.6333H5.01111V9C5.01111 6.79745 6.79745 5.01111 9 5.01111ZM4.55556 16.1889C4.30856 16.1889 4.12222 16.0026 4.12222 15.7556C4.12222 15.5086 4.30856 15.3222 4.55556 15.3222H13.4444C13.6914 15.3222 13.8778 15.5086 13.8778 15.7556C13.8778 16.0026 13.6914 16.1889 13.4444 16.1889H4.55556ZM8.54445 1.35556V2.77778C8.54445 3.02856 8.74922 3.23333 9 3.23333C9.25078 3.23333 9.45556 3.02856 9.45556 2.77778V1.35556C9.45556 1.10477 9.25078 0.9 9 0.9C8.74922 0.9 8.54445 1.10477 8.54445 1.35556ZM2.77778 9.45556C3.02856 9.45556 3.23333 9.25078 3.23333 9C3.23333 8.74922 3.02856 8.54445 2.77778 8.54445H1.35556C1.10477 8.54445 0.9 8.74922 0.9 9C0.9 9.25078 1.10477 9.45556 1.35556 9.45556H2.77778ZM16.6444 9.45556C16.8952 9.45556 17.1 9.25078 17.1 9C17.1 8.74922 16.8952 8.54445 16.6444 8.54445H15.2222C14.9714 8.54445 14.7667 8.74922 14.7667 9C14.7667 9.25078 14.9714 9.45556 15.2222 9.45556H16.6444ZM15.3841 4.78981L14.1595 5.49973C13.9539 5.61457 13.8627 5.88742 13.9968 6.1149C14.0697 6.25688 14.2297 6.34444 14.3867 6.34444C14.4566 6.34444 14.546 6.32259 14.6171 6.27619L15.8405 5.56694C16.0467 5.4518 16.1378 5.17779 16.0021 4.94996C15.8867 4.74402 15.6125 4.65325 15.3848 4.78941C15.3845 4.78954 15.3843 4.78967 15.3841 4.78981ZM4.94997 1.99785C4.74403 2.11332 4.65326 2.38747 4.7894 2.61522L5.49872 3.8388C5.57147 3.9811 5.73174 4.06889 5.88889 4.06889C5.95858 4.06889 6.04768 4.04716 6.11866 4.00104C6.32321 3.88494 6.41297 3.61182 6.27727 3.3848L5.56694 2.15948C5.4518 1.95332 5.1778 1.86221 4.94997 1.99785Z" fill="#ED0000" stroke="#ED0000" stroke-width="0.2"/>
</svg>
</span>
                </span>
            </p>`;
}

function formatTags(skills) {
  const tags = skills.split(",");
  let tagsElements = ``;
  tags.map((tag) => {
    tagsElements += `<li class="rounded-sm bg-[#002838] text-white text-start px-1 hover:bg-[#00283896] duration-150">${tag}</li>`;
  });
  return tagsElements;
}
function jobElement({
  company,
  title,
  email,
  type,
  deadline,
  skills,
  link,
  logo,
  close = false,
}) {
  let button = `<button 
        type="button" class="self-end mt-4 rounded-lg bg-[#0374E2] text-white w-16 sm:w-20 item-center text-md h-6 hover:text-zinc-800 hover:bg-accent duration-150 hover:shadow-md">
            <a href=${link} target="_blank">Apply</a>
        </button>`;
  if (email) {
    button = `<button 
        type="button" onclick=${`openModal("${email}")`}  class="self-end mt-4 rounded-lg bg-[#0374E2] text-white w-16 sm:w-20 item-center text-md h-6 hover:text-zinc-800 hover:bg-accent duration-150 hover:shadow-md">
            Apply
        </button>`;
  }
  return `
    <div  class='transition ease-in-out delay-150 flex overflow-hidden border border-zinc-300 rounded-md ring-slate-800  shadow-md duration-300 hover:border-zinc-500 hover:shadow-lg hover:scale-105'>
    <img src=${logo} onerror="this.onerror=null; this.src='/images/joblogo.png'" alt="logo" class=" bg-white w-28 sm:w-32 object-cover object-center">
    <div class="flex flex-col text-[#002838] mx-2 my-2 sm:mx-4 sm:my-4 text-sm w-full">
        <h1 class="font-bold">${title}</h1>
        <div class="text-xs mt-1">
            <h2 class="font-medium mt-1">${company}</h2>
            <p class="mb-1">${type}</p>
            ${formatDeadline(deadline, close)}
        </div>
        <div class="flex mt-6 items-center">
            <ul class="flex flex-wrap gap-2 text-[8px] sm:text-xs font-medium">
                    ${formatTags(skills)}
            </ul>
        </div>
            ${button}
    </div>
</div>
    `;
}

async function getJobs() {
  const res = await fetch("/api/jobs.json");
  const data = await res.json();
  return data;
}

function deserialize(data){
  const DeserializedData=data.map(element=>{
    return {...element.item};
  })
  return DeserializedData;
}

function generateJobs(jobs){
  const jobsElements = jobs.map((job) => {
    return jobElement({ ...job });
  });
  return jobsElements;
}

//? pagination variables

let pagedJobs;
let globalIdx=1;

//! will be refactored soon

const jobsData=await getJobs()

async function renderJobs(jobs) {
  // Reset search bar fields
  document.querySelector("#job-name").value = "";
  document.querySelector("#selectTag").value = "";
  document.querySelector("#selectedTags").innerHTML = "";
  document.querySelector("#job-type-selector").value = "";
  const jobsDiv = document.querySelector("#jobContainer");
  jobsDiv.innerHTML = ''
  const jobsElements = generateJobs(jobs)
  jobsElements.forEach((job) => {
    jobsDiv.innerHTML += job;
  });
  await LoadingJobs();
}

function paging(data=null){
  globalIdx=1;
  if(data === null){
    pagedJobs=new pagination(jobsData,12);
    renderJobs(pagedJobs.page(globalIdx))
    
  }
  else{
    pagedJobs=new pagination(data,12);
    renderJobs(pagedJobs.page(globalIdx))
  }
}

function nextPage(){
  if(!pagedJobs.isLast()){
    globalIdx++;
    renderJobs(pagedJobs.page(globalIdx));
  }
}
function prevPage(){
  if(!pagedJobs.isFirst()){
    globalIdx--;
    renderJobs(pagedJobs.page(globalIdx));  
  }
}


// Call when you need to retreive a filtered list of jobs
async function filterJobs(searchTerm, jobType, tagsList) {
  // Construct an include-match fuse query from user input
  // First, lets remove the extra whitespaces from the search term
  const trimmedQueryText = searchTerm.replace(/\s+/g, " ").trim();

  // Now, let's replace each whitespace between between any two words with " '"
  // "frontend engineer" becomes "'frontend 'engineer" the ' is used to perform an extendedSearch
  const query = `'${trimmedQueryText.replace(/\s/g, " '")}`;

  const options = {
    useExtendedSearch: true,
    includeScore: false,
    shouldSort:false,
    keys: ["title"],
  };
  const fuse = new Fuse(jobsData, options);
  let results = jobsData;
  if(trimmedQueryText){
    results = fuse.search(query);
  }
  else{
    results = results.map(res=>{
      return res;
    })
  }
  // Filter results based on job type
  let filteredJobsByType = results;
  if (jobType) {
    filteredJobsByType = results.filter(
      (result) => result.item.type.toLowerCase() == jobType
    );
  }

  // Filter results based on provided tags
  let filteredJobsByTypeAndTags = filteredJobsByType;
  if (tagsList.length) {
    filteredJobsByTypeAndTags = filteredJobsByType.filter((result) => {
      const jobTags = result.item.skills.split(",");
      return jobTags.some((tag) => {
        return tagsList.includes(tag);
      });
    });
  }
  // Render job items in the jobs container
  const JobsAfterDeserialized= deserialize(filteredJobsByTypeAndTags)
  paging(JobsAfterDeserialized)

  // Set found results counter
  const resultsCountElement = document.querySelector("#results-count");
  resultsCountElement.textContent = filteredJobsByTypeAndTags.length;

  // Show clear filters div
  document.querySelector("#clear-filters").classList.replace('hidden','flex')

  // Set renderJobs() as a click event on the reset button
  document
    .querySelector("#clear-results-button")
    .addEventListener("click",async () => {
      document.querySelector("#clear-filters").classList.replace('flex','hidden')
      paging();
    });
}

export { filterJobs,nextPage,prevPage, paging,pagedJobs };
