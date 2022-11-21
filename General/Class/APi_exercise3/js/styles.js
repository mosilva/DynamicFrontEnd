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


function deleteBooks(tag) {
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
