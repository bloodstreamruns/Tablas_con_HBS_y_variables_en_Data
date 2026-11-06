import deportesPage from './pages/deportes.js';

const getPageContext = (pagePath) => {
    console.log('Ruta recibida:', pagePath);
    if (pagePath.includes('deportes')) {
        return { deportes: deportesPage };
    }
    return { deportes: deportesPage };
}

export default getPageContext;