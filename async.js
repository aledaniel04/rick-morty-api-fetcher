const getImage = async () =>{
    try {
        const peticion = await fetch('https://rickandmortyapi.com/api/character');
        const {results} = await peticion.json()
    
        const divContenedor = document.createElement("div");
        divContenedor.classList.add("contendor");
    
        const divPadre = document.createElement("div");
        divPadre.classList.add("contendor-padre");
    
        for(let i = 0; i < results.length; i++){
            const personaje = results[i]
            //console.log(personaje.name)
            const div = document.createElement("div");
            const divtexto = document.createElement("div");
            const img = document.createElement("img")
            const nombre = document.createElement("p");
            const genero = document.createElement("p");
            const especie = document.createElement("p")
            const estado = document.createElement("p")
            const localizacion = document.createElement("p")
            const origen = document.createElement("p")
            img.src = personaje.image
            div.classList.add("contendor-hijo")
            nombre.classList.add("names");
            divtexto.classList.add("texto")
            nombre.textContent = ( `${personaje.name}`);
            genero.textContent = ( `Genero: ${personaje.gender}`);
            especie.textContent = ( `Especie: ${personaje.species}`);
            estado.textContent = ( `Estado: ${personaje.status}`);
            localizacion.textContent = ( `Ubicacion: ${personaje.location.name}`);
            origen.textContent = ( `Origen: ${personaje.origin.name}`);
            divPadre.appendChild(div)
            div.appendChild(img)
            div.appendChild(nombre)
            div.appendChild(divtexto)
            divtexto.appendChild(genero)
            divtexto.appendChild(especie)
            divtexto.appendChild(estado)
            divtexto.appendChild(localizacion)
            divtexto.appendChild(origen)
        }
    
        divContenedor.appendChild(divPadre)
    
        document.body.appendChild(divContenedor);

    } catch (error) {
        console.error("error:" + error)
    }
}

getImage()