
const buttonForm = document.querySelector("#add-books");

buttonForm.addEventListener("click", async function(event)
{
    event.preventDefault();    

    let newBook = 
        {
            "titulo": mainForm.Título.value,     
            "autor": mainForm.Autor.value,
            "descricao":  mainForm.Descrição.value,
            "tiragem": mainForm.Tiragem.value,
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


        const response = await api.createBooks(newBook);

        showBooks(newBook);  

        // mainForm.reset();
    }
    
});


function validateBook(book){
    let allErrors = [];

    if(book.titulo.length < 3)
    {
        allErrors.push("O título do livro deve ter no mínimo 3 letras!");
    }

    if(book.autor.length < 3)
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