// Progression 1: create a function and fetch the api using axios

const apikey = '54e107ff1f2543a9b313e4f34c06f8ef';
const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;

// axios.get(url).then(response =>{
//     localStorage.setItem("article", JSON.stringify(response.data))
// })


function getData() {
    axios.get(url).then(response =>{
            let data = response.data.articles

            let output = ""
            for (let i = 0; i < data.length; i++) {
                output+= `<div id="card">
                <h3>${data[i].title}</h3>
                <img src="${data[i].image}" alt="">
                <p>${data[i].description}
                </p>
              </div>`
            }
            document.getElementById("news").innerHTML = output
        })

}

getData()