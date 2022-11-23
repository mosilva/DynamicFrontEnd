
const mainForm = document.createElement("form");
mainForm.setAttribute("class","form-add");

function createInputs(){

    for (let [k, v] of Object.entries(header))
    {            
        const divForm = document.createElement("div");
        divForm.setAttribute("class","group-input");
        styleSpace(divForm);
        
        const labelForm = document.createElement("label");
        labelForm.setAttribute("for",k);
        labelForm.textContent = k + " : ";
        divForm.appendChild(labelForm);

        const inputForm = document.createElement("input");
        inputForm.setAttribute("id", k);
        inputForm.setAttribute("name", k);
        inputForm.setAttribute("placeholder","Digite aqui para o campo " + (k.toLowerCase()) + "...");
        inputForm.setAttribute("type",v);
        inputForm.setAttribute("class", "campo");     
        divForm.appendChild(inputForm);
        
        mainForm.appendChild(divForm);
    }
}

function generateForm()
{    
    const mainFormSection = document.createElement("section");
    mainFormSection.setAttribute("class","regristry-form");
    mainCatalogo.appendChild(mainFormSection);
    
    const mainFormH2 = document.createElement("h2");
    mainFormH2.setAttribute("id","title-form");
    mainFormH2.textContent ="Adicionar um novo livro";
    mainFormSection.appendChild(mainFormH2);    

    const mainFormUl = document.createElement("ul");
    mainFormUl.setAttribute("id","error-message");
    styleSpanError(mainFormUl);
    mainFormSection.appendChild(mainFormUl);

    mainFormSection.appendChild(mainForm);

    createInputs();

    const buttonForm = document.createElement("button");
    buttonForm.setAttribute("id","add-books");
    buttonForm.setAttribute("class","main-button");
    buttonForm.textContent = "Adicionar Livro";  
    mainForm.appendChild(buttonForm);
}

generateForm();
