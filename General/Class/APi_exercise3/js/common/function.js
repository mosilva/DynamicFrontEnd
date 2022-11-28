
window.functionBooks = {  

    removeAccent: (text) => 
        {       
            text = text.toLowerCase();                                                         
            text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
            text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
            text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
            text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
            text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
            text = text.replace(new RegExp('[Ç]','gi'), 'c');
            return text;                 
        },

    validateBook: (book) => 
        {
        let allErrors = [];

        if(book.titulo.length < 3)
        {
            allErrors.push("O título do livro deve ter no mínimo 3 letras!");
        }

        if(book.autor.length < 2)
        {
            allErrors.push("O autor do livro deve ter no mínimo 2 letras!");

        }    

        if(book.descricao.length < 5)
        {
            allErrors.push("A descrição do livro deve ter no mínimo 5 letras!");
        }

        if(parseInt(book.tiragem) < 1 || book.tiragem == "")
        {
            allErrors.push("A tiragem deve ter pelo menos 1 livro");

        }    
        return allErrors;

    },


    showErrors: (errors) => {

        let ulError = document.querySelector("#error-message");
        ulError.innerHTML = "";

        errors.forEach(element => {
            let liError = document.createElement("li");
            liError.textContent = element;
            ulError.appendChild(liError);
            
        });
        },

    createPage: () => {
    
        


    },    

    createNewPageSearch: () => {
        
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
    }

}
