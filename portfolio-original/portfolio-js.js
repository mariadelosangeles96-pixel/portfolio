//tema oscuro
const btnTema = document.getElementById('theme-toggle');
const root = document.documentElement;

const temaGuardado = localStorage.getItem('tema-preferido');

if (temaGuardado) {
    root.setAttribute('data-tema', temaGuardado);
}

btnTema.addEventListener('click', () => {
    let temaActual = root.getAttribute('data-tema');
    let nuevoTema;

    if (temaActual === 'dark') {
        nuevoTema = 'light';
    } else {
        nuevoTema = 'dark';
    }

    root.setAttribute('data-tema', nuevoTema);
    localStorage.setItem('tema-preferido', nuevoTema);
});

//api github
const usuarioGithub = "mariadelosangeles96-pixel";

async function cargarRepos() {
    const listaRepos = document.getElementById("lista-repos");

    try {
        const respuesta = await fetch(`https://api.github.com/users/${usuarioGithub}/repos?sort=updated&per_page=5`);
        
        if (!respuesta.ok) {
            listaRepos.innerHTML = '<li class="cargando" style="color: red;">No se pudo conectar con el perfil de GitHub.</li>';
            return;
        }

        const repositorios = await respuesta.json();

        listaRepos.innerHTML = "";

        if (repositorios.length === 0) {
            listaRepos.innerHTML = '<li class="cargando">No se encontraron repositorios públicos.</li>';
            return;
        }

        repositorios.forEach(repo => {
            const li = document.createElement("li");
            li.className = "repo-card";

            const descripcion = repo.description ? repo.description : "Repositorio sin descripción";
            const lenguaje = repo.language ? `${repo.language}` : "";

            li.innerHTML = `
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
                <p>${descripcion}</p>
                <div class="repo-detalles">
                    <span>${lenguaje}</span>
                </div>
            `;
            listaRepos.appendChild(li);
        });
    } catch (error) {
        console.error("Error: ", error);
        listaRepos.innerHTML = '<li class="cargando" style="color: red;">Error de conexión. Revisa tu internet.</li>';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarRepos();
});