const JSON_SRC = '/public/data/manuals.json'; 

async function loadManuals() {
    try {
        let response = await fetch(JSON_SRC);
        let manuals = await response.json();
        
        console.log(manuals);
        return manuals;
    } catch (error) {
        console.error('Error loading manuals:', error);
        return []
    }
}

async function getAllManuals() {
    return await loadManuals();
}

async function getManualsByCategory(category) {
    let manuals = await loadManuals();
    let filteredManuals = manuals.filter(item => item.category === category);
    console.log(filteredManuals);
    return filteredManuals;
}

export {
    getAllManuals,
    getManualsByCategory
}