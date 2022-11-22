const mainCatalogo = document.createElement("main");
const tableMainTbody = document.createElement("tbody");
tableMainTbody.setAttribute("class","books-table");
const tableMainCatalogo = document.createElement("table");

function showBooks(book){
    
        const tableMainTbodyTr = document.createElement("tr");
        tableMainTbodyTr.setAttribute("class","book");
        tableMainTbodyTr.setAttribute("class","body-information");

        for (let k = 0; k < header.length; k++) 
        {
          const tableMainTbodyTd = document.createElement("td");
          tableMainTbodyTd.textContent = Object.values(book)[k];
          tableMainTbodyTd.setAttribute("class","info-"+ Object.keys(book)[k]);
          tableMainTbodyTr.appendChild(tableMainTbodyTd);

          tableMainTbody.appendChild(tableMainTbodyTr);
          tableMainCatalogo.appendChild(tableMainTbody);
        }
}


function generateTableShowsBooks(){

    const sectionCatalogo = document.createElement("section");
    sectionCatalogo.setAttribute("class","section-main");
    document.body.appendChild(mainCatalogo);
    mainCatalogo.appendChild(sectionCatalogo);

    const h2Catalogo = document.createElement("h2");
    h2Catalogo.textContent = "Catálogo da Livraria";
    sectionCatalogo.appendChild(h2Catalogo);

    const labelCatalogoSearch = document.createElement("label");
    labelCatalogoSearch.setAttribute("for", "filter-table");
    labelCatalogoSearch.textContent = "Filter: "
    sectionCatalogo.appendChild(labelCatalogoSearch);

    const inputCatalogoSearch = document.createElement("input");
    inputCatalogoSearch.setAttribute("type","text");
    inputCatalogoSearch.setAttribute("name","filter");
    inputCatalogoSearch.setAttribute("id","filter-table");
    inputCatalogoSearch.setAttribute("placeholder","Digite o título do livro...");
    filterBooks(inputCatalogoSearch);
    sectionCatalogo.appendChild(inputCatalogoSearch);     
    
    sectionCatalogo.appendChild(tableMainCatalogo);
    const tableMainThead = document.createElement("thead");
    tableMainCatalogo.appendChild(tableMainThead);

    const tableMainTheadTr = document.createElement("tr");
    tableMainTheadTr.setAttribute("class","catalog-table");
    tableMainThead.appendChild(tableMainTheadTr);

    for (const element of header) 
    {
        const tableMainTheadTh = document.createElement("th");
        const texti = document.createTextNode(element);
        tableMainTheadTh.appendChild(texti);
        tableMainTheadTr.appendChild(tableMainTheadTh);
        tableMainThead.appendChild(tableMainTheadTr);
    }

    for (const element of CatalogBooks) 
    {
        showBooks(element);
    }
}   

generateTableShowsBooks();