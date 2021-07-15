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
    let pokemon_main = document.getElementById("content_pokemons");
    let image_p = document.createElement("img");
    image_p.src = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    image_p.alt = id;
    image_p.id = id;
    image_p.className = "pokemon_main";
    pokemon_main.appendChild(image_p); 
}