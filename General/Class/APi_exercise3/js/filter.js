const filterField = document.querySelector("#filter-table");

filterField.addEventListener("input", function(){

    let books = document.querySelectorAll(".body-information");
    
    if(this.value.length > 0)
    {
        for(const element of books)
        {
            const tdTitulo = element.querySelector(".info-Titulo");
            const titulo = tdTitulo.textContent;
            let expressionRegular = new RegExp(this.value, "i" );       

            if(!(expressionRegular.test(titulo))){
                invisibleBooks(element);
            }
            else
            {
                visibleBooks(element);
            }
        }
    }
    else
    {
        for(const element of books){
                visibleBooks(element);    
        } 
    }
});