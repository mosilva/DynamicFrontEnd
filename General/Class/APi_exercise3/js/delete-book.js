let tableBooks = document.querySelector("table");

tableBooks.addEventListener("dblclick", function(event)
{
    event.preventDefault();  
    
    console.log(event.target.parentNode);

    // deleteEstab(event.target.parentNode);

    // setTimeout(function(){
    //     event.target.parentNode.remove();
    // },500);


});