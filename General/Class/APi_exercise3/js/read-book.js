const mainCatalogo = document.createElement("main");
const tableMainTbody = document.createElement("tbody");
tableMainTbody.setAttribute("class","books-table");
const tableMainCatalogo = document.createElement("table");




function showBooks(books){
        
        for (let i = 0; i < books.length; i++) 
            {   
                const tableMainTbodyTr = document.createElement("tr");
                tableMainTbodyTr.setAttribute("class","book");
                tableMainTbodyTr.setAttribute("class","body-information");

                Object.entries(books[i]).forEach((entry) => 
                {                    
                    const [key, value] = entry;
                    
                    if(key != "uid")
                    {
                        const tableMainTbodyTd = document.createElement("td");
                        tableMainTbodyTd.textContent = value;
                        tableMainTbodyTd.setAttribute("class",`info-${key}`);
                        tableMainTbodyTr.appendChild(tableMainTbodyTd);
                    }                    
                });

                const tableMainTbodyTdEditar = document.createElement("td");
                tableMainTbodyTdEditar.textContent = "Editar";
                tableMainTbodyTdEditar.setAttribute("class",`info-editar`);
                tableMainTbodyTr.appendChild(tableMainTbodyTdEditar);       
                
                const tableMainTbodyTd = document.createElement("td");
                tableMainTbodyTd.textContent = "Excluir";
                tableMainTbodyTd.setAttribute("class",`info-excluir`);
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

    for (let [k] of Object.entries(header))
    {
        const tableMainTheadTh = document.createElement("th");
        const texti = document.createTextNode(k);
        tableMainTheadTh.appendChild(texti);
        tableMainTheadTr.appendChild(tableMainTheadTh);
        tableMainThead.appendChild(tableMainTheadTr);
    }

    (async () => {

        const searchBooksConverted = await api.searchBooks();     

        showBooks(searchBooksConverted);      
    })();  
}   

function readBooks(response){
    response.forEach(element => 
    {
         return book = 
        {                    
            "Titulo": element.Titulo,
            "Autor": element.Autor,
            "Descricao": element.Descricao,
            "Tiragem": element.Tiragem
            
        }                  
    });
}

generateTableShowsBooks();



