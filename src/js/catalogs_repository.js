const JSON_SRC = '../data/catalogs.json';

export async function loadCatalogs() {
    try {
        let response = await fetch(JSON_SRC);
        let catalogs = await response.json();
        return catalogs;
    } catch (error) {
        return []
    }
}

export async function getAllCatalogs() {
    let catalogs = await loadCatalogs();
    return catalogs;
}
