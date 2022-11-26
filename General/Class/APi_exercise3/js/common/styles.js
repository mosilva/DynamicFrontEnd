(() => {
  const style = document.createElement("style");
  style.innerHTML = 
    `
        html, body {
            font-family: Arial;
            font-size: 1rem;
        }

        form {
            width: 300px;
            margin: 20px auto;
            padding: 20px;
            background-color: #f1f1f1;
            border-radius: 20px;
            text-align: center;
        }  
    `;
    document.body.appendChild(style);      
})();

function styleSpanError(tag) {
    Object.assign(tag.style, {
      margin: "0 0 0 1vw",
      fontSize: "1.2em",
      padding: "0 0 1vw 0",
      marginBottom: "1vw",
      color: "red"
    });
  }

function styleSpace(tag) {
    Object.assign(tag.style, {
      padding: "1vw"
    });
  }


window.deleteBooks = (tag) => {
    Object.assign(tag.style, {
      opacity: "0",
      transition: "0.5s"
    });
  }

function filterBooks(tag) {
    Object.assign(tag.style, {
      width: "20em",
      height: "2em",
      marginBottom: "1em",
      display: "flex"
    });
  }


  function invisibleBooks(tag) 
  {
    Object.assign(tag.style, 
    {
      display: "none"
    });
  }

  function visibleBooks(tag) 
  {
    Object.assign(tag.style, 
    {
        display: ""
    });
  }
