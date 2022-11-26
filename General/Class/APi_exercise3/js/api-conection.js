const url = "http://livros.letscode.dev.netuno.org:25390/services/livro";
const uidStudent = "94b602ba-bdbb-4080-9f71-cd2f0b0a20e0";

window.api = {
  searchBooks: async () => {
  try {
  const promise = await fetch(`${url}/lista`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },    
    body: JSON.stringify({
      text: "",
      aluno: {
        uid: uidStudent,
      }
    })
  })

  if (!promise) {
    alert("Algo deu errado na requisição! Tente novamente!");
    return [];
  }

  return promise.json();
} catch (error) {
  console.error("Erro na comunicação: ", error);
  }
},


createBooks : async (newBook) => { 
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        aluno: {
        uid: uidStudent,
        },
        tiragem: parseInt(newBook.tiragem),
        titulo: newBook.titulo,
        autor: newBook.autor,
        descricao: newBook.descricao,
    }),
}).catch((error) => {
    console.log("Erro na comunicação:", error);
});

if (!response) {
    alert("Algo deu errado na requisição! Tente novamente!");
}
return await response.json();
},

deleteBooks: async (Uid) => {
   try {
        const promise = await fetch(`${url}`,
        {
                method: 'DELETE',
                headers:
                {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify
                (
                    {
                        "aluno":
                        {
                            "uid": uidStudent
                        },
                        Uid
                    }
                )

        })

        if (!promise) {
          alert("Algo deu errado na requisição! Tente novamente!");
          return [];
        }
      
        return promise.json();
      } catch (error) {
        console.error("Erro na comunicação: ", error);
        }
      },
}

// const uidBook = "29e5cbb2-df33-48e9-8de0-7bc75658226e";

// (
//     async () => {
//     await deleteBooks(uidBook);
//     const books = await searchBooks();
//     console.log(books);
// })();
