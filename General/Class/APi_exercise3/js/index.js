console.log(document);

(() => {
    for(const nameFile of [
        "api-conection.js",
        "styles.js",
        "read-book.js",
        "form.js",
        "create-book.js",
        "delete-establishments.js",
        "filter.js"
    ]) {
    const script = document.createElement("script");
    script.setAttribute("src", `./js/${nameFile}`);
    document.body.appendChild(script);
}})();

const header =  {
    Tiragem: "number",
    Título: "string",
    Autor: "string",
    Descrição: "string",
};

function generateHeader()
    {
        const headerCatalogo = document.createElement("header");
        const headerLogo = document.createElement("div");
        headerLogo.setAttribute("class", "main-logo");
        document.body.appendChild(headerCatalogo);
        headerCatalogo.appendChild(headerLogo);

    }

generateHeader();