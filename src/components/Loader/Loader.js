export async function LoadingJobs() {
    const loader = document.getElementById("loader");
    const searchBar = document.querySelector("#jobContainer");
    loader.classList.add("hidden");
    searchBar.classList.remove("invisible");
}
  