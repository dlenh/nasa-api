document.querySelector("button").addEventListener("click", fetchFromNASA)
function clearSources() {
    document.querySelector("iframe").src = ""
    document.querySelector("img").src = ""
    document.querySelector(".media").textContent = ""
}

function fetchFromNASA() {
clearSources();
const input = document.querySelector("input").value
fetch(`https://api.nasa.gov/planetary/apod?api_key=PqGLdW4QMcIbHfeKzoWglyELNy9lWs74EY5TlsqJ&date=${input}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(input)
        if (data.code === 400) {
            document.querySelector(".media").innerText = data.msg
        } else if (data.media_type === "video") {
            document.querySelector("iframe").src = data.url
            document.querySelector(".description").innerText = data.explanation
        } else if (data.media_type === "image") {
            document.querySelector("img").src = data.hdurl
            document.querySelector(".description").innerText = data.explanation
        } 
        
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}