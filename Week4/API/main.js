let img = document.querySelector('img');

async function getCats() {  
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=QEh0lI6T35St8HQWSk0vUFKaolijwURm&s=cats', { mode:'cors'})
    const catData = await response.json();
    img.src = catData.data.images.original.url;

    return cat;

};

getCats()
    .catch((error) => {console.log(error)});

// second then to get to the body of the promise