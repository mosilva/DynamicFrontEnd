let tableBooks = document.querySelector("table");

tableBooks.addEventListener("dblclick", function(event)
{
    deleteEstab(event.target.parentNode);

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);


});