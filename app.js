console.log("Запросы")
/*
fetch ('https://jsonplaceholder.typicode.com/posts')
  .then( (response) => { return response.json(); } )
  .then(function(data) { console.log(data); } )
  .catch((message) => console.log(message + " message"))
  

async function jsonFetch (){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();
    console.log(result)
}
jsonFetch();
*/

const url = 'https://jsonplaceholder.typicode.com/posts';
const ul = document.getElementById('myList');
ul.style.display = "none"

const getData = async () =>{
    await fetch( url)
    .then( (response) => { return response.json(); } )
    .then((data) => {
        data.map((item) =>{
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let span = document.createElement('span');
            let li = document.createElement("li");
            span.appendChild(document.createTextNode(item.id));
            h2.appendChild(document.createTextNode(item.userId + ' ' + item.title ));
            p.appendChild(document.createTextNode(item.body));
            div.appendChild(h2);
            div.appendChild(p);
            li.appendChild(span);
            li.appendChild(div);
            ul.appendChild(li)
        })
    } )
    .catch((message) => console.log("Error message " + message ));
}
getData();


const gifs = document.getElementById('gifs');
async function findGif(){
    const input = document.getElementById('input');
    const url2 = `https://api.giphy.com/v1/gifs/search?api_key=MEBTqO8HwnLg1HnVgaB7NN3gTa74YFSx&limit=16&offset=0&rating=pg-13&q=${input.value}`
    input.value = "";
    fetch( url2 )
    .then( (response) => { return response.json(); } )
    .then((data) => {
        const imagesList = document.getElementById('images');
        while (imagesList.firstChild) {
            imagesList.removeChild(imagesList.firstChild);
        }

        if(data.data.length==0){
            imagesList.appendChild(document.createTextNode("We're so sorry ;( but we couldn't find anything for your request"));
        }
        else {
            data.data.map((item) =>{
                let imgGif = document.createElement('img');
                imgGif.src = item.images.downsized.url
                let itemGif = document.createElement('div');
                itemGif.className = 'img';
                itemGif.appendChild(imgGif);
                imagesList.appendChild(itemGif);
            })
        }
        console.log(data)
    } )
    .catch((message) => console.log("Error message " + message ));
}


const button1 = document.getElementById('tasks');
button1.innerHTML = "Посмотреть задание с FETCH запросом"
let myTask = 1

function tasks(){
    if(myTask==1){
        myTask=0;
        button1.innerHTML = "Посмотреть задание с GIPHY API"
        ul.style.display = "block"
        gifs.style.display = "none"
    }
    else{
        myTask=1;
        button1.innerHTML = "Посмотреть задание с FETCH запросом"
        ul.style.display = "none"
        gifs.style.display = "block"
    }
}




