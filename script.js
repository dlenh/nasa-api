document.querySelector("button").addEventListener("click", fetchFromNASA)
function clearSources() {
    document.querySelector("iframe").src = ""
    document.querySelector("img").src = ""
    document.querySelector(".media").textContent = ""
    document.querySelector(".description").textContent = ""
}

const key = config.API_KEY;

function fetchFromNASA() {
clearSources();
const input = document.querySelector("input").value
fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${input}`)
    .then(res => res.json())
    .then(data => {
        // document.querySelector("body").style.background = "white"
        console.log(data) // shows data object from nasa api
        console.log(input) // shows date user entered
        if (data.code === 400) {
            document.querySelector(".media").innerText = data.msg // data msg tells user to input valid date
        } else if (data.media_type === "video") {
            document.querySelector("iframe").src = data.url // source for when media type is video
            document.querySelector(".description").innerText = data.explanation
        } else if (data.media_type === "image") {
            document.querySelector("img").src = data.hdurl // source for when media type is image
            document.querySelector(".description").innerText = data.explanation
        }
        document.querySelector(".media").innerText = `APOD Title: ${data.title}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}