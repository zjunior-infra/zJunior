export async function LoadingJobs() {
    const loader = document.getElementById("loader");
    const searchBar = document.querySelector("#jobContainer");
    const navigation = document.querySelector("#navigation")
    navigation.classList.replace('hidden','flex')
    loader.classList.add("hidden");
    searchBar.classList.remove("invisible");
}
  