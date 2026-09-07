const JSON_SRC = '../data/catalogs.json';

export async function loadCatalogs() {
    try {
        let response = await fetch(JSON_SRC);
        let catalogs = await response.json();
        console.log(catalogs);
        return catalogs;
    } catch (error) {
        console.error("Error loadin catalogs: ", error);
        return []
    }
}

export async function getAllCatalogs() {
    let catalogs = await loadCatalogs();
    console.log(catalogs);
    return catalogs;
}
