import deportesPage from './pages/deportes.js';

const getPageContext = (pagePath) => {
    console.log('Ruta recibida:', pagePath);
    return deportesPage;
}

export default getPageContext;