
const buttonForm = document.querySelector("#add-books");

buttonForm.addEventListener("click", async function(event)
{
    event.preventDefault();    

    let newBook = 
        {
            "Titulo": mainForm.Título.value,     
            "Autor": mainForm.Autor.value,
            "Descricao":  mainForm.Descrição.value,
            "Tiragem": mainForm.Tiragem.value,
        }    

    let errors = validateBook(newBook);

    if(errors.length > 0)
    {
        showErrors(errors);
    }  
    else
    {          
        let ulError = document.querySelector("#error-message");
        ulError.innerHTML = "";


        await createBooksApi(newBook.Tiragem, newBook.Titulo, newBook.Autor, newBook.Descricao);

        showBooks(newBook);  

        mainForm.reset();
    }
    
});


function validateBook(book){
    let allErrors = [];

    if(book.Titulo.length < 3)
    {
        allErrors.push("O título do livro deve ter no mínimo 3 letras!");
    }

    if(book.Autor.length < 3)
    {
        allErrors.push("O autor do livro deve ter no mínimo 3 letras!");

    }    
    return allErrors;

}


function showErrors(errors){

    let ulError = document.querySelector("#error-message");
    ulError.innerHTML = "";

    errors.forEach(element => {
        let liError = document.createElement("li");
        liError.textContent = element;
        ulError.appendChild(liError);
        
    });


}