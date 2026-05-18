const misEstudios = [
    {
        titulo: "Grado Superior DAW",
        centro: "IES Gregorio Prieto",
        fecha: "2025 - Actualidad",
    },
    {
        titulo: "Grado en Logopedia",
        centro: "Universidad de Granada",
        fecha: "2016 - 2020",
    }
];

const contenedor = document.getElementById('lista-estudios');
const formulario = document.getElementById('modal-estudios');
const btnToggle = document.getElementById('btn-abrir-formulario');
const btnGuardar = document.getElementById('btn-guardar-estudio');

function cargarEstudios() {
    contenedor.innerHTML = '';

    misEstudios.forEach((item) => {
        const article = document.createElement('article');
        article.className = 'item-estudio';
        article.innerHTML = `
            <p><strong>${item.titulo}</strong><br>${item.centro}</p>
            <small>${item.fecha}</small>
        `;
        contenedor.appendChild(article);
    });
}

btnToggle.addEventListener('click', () => {
    formulario.classList.toggle('activo');
    btnToggle.textContent = formulario.classList.contains('activo') ? '-' : '+';
});

btnGuardar.addEventListener('click', () => {
    const nuevoEstudio = {
        titulo: document.getElementById('input-titulo').value,
        centro: document.getElementById('input-centro').value,
        fecha: document.getElementById('input-fecha').value
    };

    if (nuevoEstudio.titulo && nuevoEstudio.centro) {
        misEstudios.push(nuevoEstudio);
        cargarEstudios();
        formulario.classList.remove('activo');
        btnToggle.textContent = '+';
    }
});

cargarEstudios();