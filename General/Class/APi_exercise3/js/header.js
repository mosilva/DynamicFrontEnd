console.log(document);

(() => {
    for(const nameFile of [
        "styles.js",
        "read-establishments.js",
        "form.js",
        "create-establishments.js",
        "delete-establishments.js",
        "filter.js"
    ]) {
    const script = document.createElement("script");
    script.setAttribute("src", `./js/${nameFile}`);
    document.body.appendChild(script);
}})();


let CatalogBooks = 
    [
        {
            "Titulo": "O Pequeno Príncipe",
            "Autor": "Antoine de Saint-Exupéry",
            "Descricao": "Le Petit Prince é uma novela do escritor, aviador aristocrata francês Antoine de Saint-Exupéry, originalmente publicada em inglês e francês em abril de 1943 nos Estados Unidos.",
            "Tiragem": 50
        },
        {
            "Titulo": "O Homem Mais Rico da Babilônia",
            "Autor": "George Samuel Clason",
            "Descricao": " mostra soluções ao mesmo tempo sábias e muito atuais para evitar a falta de dinheiro, como não desperdiçar recursos durante tempos de opulência, buscar conhecimento e informação em vez de apenas lucro, assegurar uma renda para o futuro, manter a pontualidade no pagamento de dívidas e, sobretudo, cultivar as próprias aptidões, tornando-se cada vez mais habilidoso e consciente.",
            "Tiragem": 150
        },
        {
            "Titulo": "O Senhor dos Anéis",
            "Autor": "J. R. R. Tolkien",
            "Descricao": "O Senhor dos Anéis é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit.",
            "Tiragem": 5
        },
    ]

const header = ["Título", "Autor", "Descrição", "Tiragem"];

function generateHeader()
    {
        const headerCatalogo = document.createElement("header");
        const headerLogo = document.createElement("div");
        headerLogo.setAttribute("class", "main-logo");
        document.body.appendChild(headerCatalogo);
        headerCatalogo.appendChild(headerLogo);

    }

generateHeader();