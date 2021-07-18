const name_pokes = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise"]
const description = [
    {
    "status": "001",
    "level": "10",
    "type": "Grass",
    "hability": "Tackle",
    "height": "1,1 m",
    "weight": "90,1 Kg",
    },
    {
    "status": "002",
    "level": "100",
    "type": "Grass",
    "hability": "Tackle 2",
    "height": "1,2 m",
    "weight": "90,2 Kg",
    },
    {
    "status": "003",
    "level": "1000",
    "type": "Grass",
    "hability": "Tackle 3",
    "height": "1,3 m",
    "weight": "90,3 Kg",
    },
    {
    "status": "004",
    "level": "15",
    "type": "Fire",
    "hability": "Flames",
    "height": "1,4 m",
    "weight": "90,4 Kg",
    },
    {
    "status": "005",
    "level": "150",
    "type": "Fire",
    "hability": "Flames 2",
    "height": "1,5 m",
    "weight": "90,5 Kg",
    },
    {
    "status": "006",
    "level": "1500",
    "type": "Fire",
    "hability": "Flames 3",
    "height": "1,6 m",
    "weight": "90,6 Kg",
    },
    {
    "status": "007",
    "level": "20",
    "type": "Water",
    "hability": "Bubble",
    "height": "1,7 m",
    "weight": "90,7 Kg",
    },
    {
    "status": "008",
    "level": "200",
    "type": "Water",
    "hability": "Bubble 2",
    "height": "1,8 m",
    "weight": "90,8 Kg",
    },
    {
    "status": "009",
    "level": "2000",
    "type": "Water",
    "hability": "Bubble 3",
    "height": "1,9 m",
    "weight": "90,9 Kg",
    }
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
    nspan[0].innerText = description[id-1].status;
    nspan[1].innerText = description[id-1].level;
    nspan[2].innerText = description[id-1].type; 
    nspan[3].innerText = description[id-1].hability;
    nspan[4].innerText = description[id-1].height;
    nspan[5].innerText = description[id-1].weight;
}