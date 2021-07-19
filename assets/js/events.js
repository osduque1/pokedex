const name_pokes = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise"]
const [statuss, level, type, hability, height, weight] = [
    ["001", "002", "003", "004", "005", "006", "007", "008", "009"],
    ["10", "100", "1000", "15", "150", "1500", "20", "200", "2000"],
    ["Grass", "Grass", "Grass", "Fire", "Fire", "Fire", "Water", "Water", "Water"],  
    ["Tackle", "Tackle 2", "Tackle 3", "Flames", "Flames 2", "Flames 3", "Bubble", "Bubble 2", "Bubble 3"],
    ["1,1 m", "1,2 m", "1,3 m", "1,4 m", "1,5 m", "1,6 m", "1,7 m", "1,8 m", "1,9 m"],
    ["90,1 Kg", "90,2 Kg", "90,3 Kg", "90,4 Kg", "90,5 Kg", "90,6 Kg", "90,7 Kg", "90,8 Kg", "90,9 Kg"],
]

window.onload = () => {
    var footer = document.getElementById("footer_poke");
    for (let index = 1; index < 10; index++) {
        let images = document.createElement("img");
        images.src = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;
        images.alt = index;
        images.className = "pokemon";
        images.setAttribute('onclick',`pokemon(${index})`);
        footer.appendChild(images);  
    }
}

function pokemon(id) {
    jQuery("img").remove(".pokemon_main");

    let name_poke = document.getElementById("name_poke");
    name_poke.innerText = name_pokes[id-1];

    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.src = `./assets/audio/${id}.mp3`;
    etiquetaAudio.play();

    let pokemon_main = document.getElementById("content_pokemons");
    let image_p = document.createElement("img");
    image_p.src = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    image_p.alt = id;
    image_p.id = id;
    image_p.className = "pokemon_main";
    pokemon_main.appendChild(image_p); 

    var nspan = document.getElementsByTagName("span");
    nspan[0].innerText = statuss[id-1];
    nspan[1].innerText = level[id-1];
    nspan[2].innerText = type[id-1]; 
    nspan[3].innerText = hability[id-1];
    nspan[4].innerText = height[id-1];
    nspan[5].innerText = weight[id-1];
}