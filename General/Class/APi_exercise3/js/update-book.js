
window.updateBooks = async (event) => {
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

      const promise = await api.editBook(editBook)

      if(promise){
        location.reload();
      }
      

      })

    }
}