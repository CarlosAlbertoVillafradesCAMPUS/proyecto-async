const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC2t5bjwHdUX4vM2g8TRDq5g&part=snippet%2Cid&order=date&maxResults=12';
const content = null || document.querySelector('#content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b776fbfe3amsh0048685753f14b8p1432c1jsn68c4b0ee05ac',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const fetchData = async (urlApi) => {
    const response = await fetch(urlApi, options);
    const data = await response.json();

    return data;
};

const anotherFunt = async (urlApi) =>{
    try {
        const videos = await fetchData(`${urlApi}`);
        //crearemos un template en html para que itere por los elementos de la respuesta
        //view es esa porcion de html
        //usamos js para iterar 
        //en esta API , para acceder a los videos, se refiere a items, se hace un map para devolver un nuevo arreglo con el template por cada resultado
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        `).slice(0, 12).join('')}
         `;
         content.innerHTML = view;
    } catch (error) {
        console.log(error)
    }
};

anotherFunt(API)