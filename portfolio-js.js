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