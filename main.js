const accessKey = 'UWEuF_wGX2lFKhY_G-bTiuXSNBGWOL21Ktm5sLIfKA8'

const Form = document.querySelector("form")
const searchInput = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more")

let keyword = ""  //this variable will hold the keyword inthe input data
let page = 1;


async function imageSearch() {
   keyword = searchInput.value;  //it will install the value that we will enter to input field
   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;    

    const response = await fetch(url)
    const data = await response.json()


    const results = data.results

    if (page === 1){
        searchResults.innerHTML = ""

    }
    results.map((result) =>{
        const imageWrapper = document.createElement('div')
        
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html;
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResults.appendChild(imageWrapper)
        
    });


    // page++
    // if(page > 1){
       
    // }
    showMore.style.display = "block"

}
    
Form.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    imageSearch()
})
showMore.addEventListener("click", () =>{
    page++;
    imageSearch();
})



