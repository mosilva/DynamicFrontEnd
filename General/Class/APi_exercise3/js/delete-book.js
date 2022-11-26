let tableBooks = document.querySelector("table");

tableBooks.addEventListener("dblclick",async function(event)
{
    event.preventDefault();  

    const removeItemTable = this.querySelector(".body-information");
    const itemDeleteTag = this.parentNode.querySelector("td");
    const itemDelete = itemDeleteTag.textContent;

    
    await api.deleteBook(itemDelete);

    deleteBooks(removeItemTable);

    setTimeout(function(){
        removeItemTable.remove();
    },500);

});