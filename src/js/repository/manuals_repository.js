const JSON_SRC = '/data/manuals.json'; 

/**
 * 
 * Accede al archivo JSON y saca todos los Manuales.
 */
async function loadManuals() {
    try {
        let response = await fetch(JSON_SRC);
        let manuals = await response.json();        
        return manuals;
    } catch (error) {
        return []
    }
}

/**
 * Devuelve todos los manuales
 * @returns 
 */
async function getAllManuals() {
    return await loadManuals();
}

/**
 * Devuelve los manuales filtrados. 
 * @param {String} category 
 * @param {String} title 
 */
async function getFilteredManuals(category, title) {
    let manuals = await loadManuals();

    return manuals.filter(item => {

        const matchCategory = !category || 
                              category === "Categoría" || 
                              category === "Ninguno" || 
                              item.category === category;
                              
        const searchText = title ? title.trim().toLowerCase() : '';
        const matchText = !searchText || 
            (item.title && item.title.toLowerCase().includes(searchText));
        
        return matchCategory && matchText;
    });
}

export {
    getAllManuals,
    getFilteredManuals
}