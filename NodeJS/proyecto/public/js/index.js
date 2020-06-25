window.onload = async function(){
    const peliculas = (await axios.get('/peliculas/listado')).data
    let contenido = ""
    for (const pelicula of peliculas) {
        contenido += `
            <div class="col-lg-3 my-4">
                <div class="card shadow">
                    <img src="${pelicula.poster}" alt="poster" class="card-img-top" style="height: 350px;">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-0">
                            ${pelicula.titulo}
                        </h5>
                        <p class="card-text text-muted">
                            ${pelicula.genero}
                        </p>
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector('#peliculas').innerHTML += contenido
}