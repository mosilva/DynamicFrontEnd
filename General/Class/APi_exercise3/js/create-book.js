const buttonForm = document.querySelector("#main-button");

buttonForm.addEventListener("click", async function(event)
{
    event.preventDefault();    

    let newBook = 
        {
            "titulo": mainForm.titulo.value,     
            "autor": mainForm.autor.value,
            "descricao":  mainForm.descricao.value,
            "tiragem": mainForm.tiragem.value,
        }    

    let errors = functionBooks.validateBook(newBook);

    if(errors.length > 0)
    {
        functionBooks.showErrors(errors);
    }  
    else
    {          
        let ulError = document.querySelector("#error-message");
        ulError.innerHTML = "";


        await api.createBooks(newBook);

        showBooks(newBook);  

        mainForm.reset();

        location.reload();
    }    
});