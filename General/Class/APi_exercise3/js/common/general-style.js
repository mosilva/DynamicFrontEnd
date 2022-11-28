(() => {
    const style = document.createElement("style");
    style.innerHTML += `
      .section-main {
        flex-direction: row;
      }

      main {
          height: 100%;
          padding: 4 rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #f5dd7e;
        }

       button {
          margin:3vh;
       } 
    `;
    document.body.appendChild(style);
  })();
  