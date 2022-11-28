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
                                                      
                    const tableMainTbodyTd = document.createElement("td");
                    tableMainTbodyTd.textContent = value;
                    tableMainTbodyTd.setAttribute("class",`info-${key}`);
                    
                    if(key == "uid"){
                        tableMainTbodyTd.style.display = "none";
                    }
                    
                    tableMainTbodyTr.appendChild(tableMainTbodyTd);                                                                
                });

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

    const divCatalogo = document.createElement("div");
    divCatalogo.setAttribute("class","section-main");
    sectionCatalogo.appendChild(divCatalogo);

    const inputCatalogoSearch = document.createElement("input");
    inputCatalogoSearch.setAttribute("type","text");
    inputCatalogoSearch.setAttribute("name","filter");
    inputCatalogoSearch.setAttribute("id","filter-table");
    inputCatalogoSearch.setAttribute("placeholder","Digite o título do livro...");
    filterBooks(inputCatalogoSearch);
    divCatalogo.appendChild(inputCatalogoSearch);    
    
    const paragraphLastSearch = document.createElement("p");
    paragraphLastSearch.textContent =  "Salve os elementos pesquisados clicando na lupa. Os 3 últimos termos foram: ";
    divCatalogo.appendChild(paragraphLastSearch);  

    for (let index = 0; index < 3; index++) {
        const element = localStorage.getItem(localStorage.length-index);
        if(element != null) {
            const paragraphLastItem = document.createElement("p");
            paragraphLastItem.textContent =  `${element}`;
            paragraphLastItem.setAttribute("id",`item-${index}`);
            divCatalogo.appendChild(paragraphLastItem); 
        }    
    }
    
    const magnifyingGlass = document.createElement("img");
    magnifyingGlass.setAttribute("id", "image-magnifier");
    magnifyingGlass.setAttribute("src", "./img/magnifier.png");
    divCatalogo.appendChild(magnifyingGlass);
    
    const buttonRegistry = document.createElement("button");
    buttonRegistry.setAttribute("id","registry-button");
    buttonRegistry.setAttribute("class","registry-button");
    buttonRegistry.textContent = "Cadastrar um novo livro";  
    sectionCatalogo.appendChild(buttonRegistry);

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
}   

async function searchBooks() {

    const searchBooksConverted = await api.searchBooks();     

    showBooks(searchBooksConverted);   
    
    createIcon("delete");
    createIcon("draw");
    
};  

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

searchBooks();

async function deleteBooks(event)
{   
    const itemDelete = this.parentNode.parentNode.querySelectorAll("td");

    const uidDelete = itemDelete[0].textContent;

    const promiseDelete = await api.deleteBook(uidDelete);

    if(promiseDelete){
        location.reload();
    }
}


async function updateBooks(event)
{   
    const buttonFormRegistry = document.querySelector("#main-button");
    const buttonFormEdit = document.querySelector("#edit-button");
    
    buttonFormRegistry.style.display = "none";
    buttonFormEdit.style.display = "";


    const titleForm =  document.querySelector("#title-form");
    titleForm.textContent ="Formulário de edição";

    const itemUpdate = this.parentNode.parentNode.querySelectorAll("td");
    
    const uidEdit = itemUpdate[0].textContent;

    const tiragem = document.querySelector("#tiragem");
    tiragem.value = itemUpdate[1].textContent;
    const titulo = document.querySelector("#titulo");
    titulo.value = itemUpdate[2].textContent;
    const autor = document.querySelector("#autor");
    autor.value = itemUpdate[3].textContent;    
    const descricao = document.querySelector("#descricao");
    descricao.value = itemUpdate[3].textContent;

      buttonFormEdit.addEventListener("click", async (event) =>{

        event.preventDefault();

        const editBook = {
            uid: uidEdit,
            tiragem: tiragem.value,
            titulo: titulo.value,
            autor: autor.value,
            descricao: descricao.value
        };

        const promiseUpdate = await api.editBook(editBook)

        if(promiseUpdate){
            location.reload();
        }       
      })
}

async function createIcon(icon) {
    const allTr = document.querySelectorAll(".body-information");

    allTr.forEach((tr) => {
      const iconElement = document.createElement("td");
      const iconGoogle = document.createElement("img");
      iconGoogle.setAttribute("class", "imageIcon");
      iconElement.appendChild(iconGoogle);

      if (icon == "delete") {
        iconGoogle.setAttribute("id", "delete-image");
        iconGoogle.setAttribute("src", "./img/delete.png");
        iconGoogle.addEventListener("dblclick", deleteBooks);
      } else {
        iconGoogle.setAttribute("id", "edit-image");
        iconGoogle.setAttribute("src", "./img/draw.png");
        iconGoogle.addEventListener("dblclick", updateBooks);
      }

      tr.appendChild(iconElement);
    });
}

const buttonFormNew = document.querySelector("#registry-button");

buttonFormNew.addEventListener("click", async function(event){

    const buttonFormNewBook = document.querySelector("#main-button");
    const buttonFormEdit = document.querySelector("#edit-button");
    const form = document.querySelector(".form-add");

    buttonFormNewBook.style.display = "";
    buttonFormEdit.style.display = "none";
    form.reset();
    form.tiragem.focus();

});


const filterFieldSearch = document.querySelector("#filter-table");

filterFieldSearch.addEventListener("input", function () {

    const titleFilter = document.getElementsByClassName("info-titulo");

    for (let i = 0; i < titleFilter.length; i++) {

        const element = titleFilter[i].textContent;
        let filterFieldSelected = titleFilter[i];
        let filterFieldSelectedParentNode = filterFieldSelected.parentNode;

        if (this.value.length > 0) {
            let expressionRegular = new RegExp(this.value, "i");

            if (!expressionRegular.test(element)) {

                invisibleBooks(filterFieldSelectedParentNode);

        } else {

                visibleBooks(filterFieldSelectedParentNode);
        }
        
    } else {        
            visibleBooks(filterFieldSelectedParentNode);        
    }
  }
 
});

const buttonSearch = document.querySelector("#image-magnifier");


buttonSearch.addEventListener("click", async function(event){  

    const numberItem = localStorage.length+1
    localStorage.setItem(numberItem, filterFieldSearch.value);
    location.reload();
});


const item0 = document.querySelector("#item-0");

item0.addEventListener("click", async function(event){  

    console.log(filterFieldSearch);

    const count = localStorage.length;

    filterFieldSearch.value = localStorage.getItem(`${count}`);
});

const item1 = document.querySelector("#item-1");

item1.addEventListener("click", async function(event){ 

    const count = localStorage.length-1; 

    console.log(localStorage.getItem(`${count}`));

    filterFieldSearch.value = localStorage.getItem(`${count}`);
});

const item2 = document.querySelector("#item-2");

item2.addEventListener("click", async function(event){  

    const count = localStorage.length-2; 

    filterFieldSearch.value = localStorage.getItem(`${count}`);
});











