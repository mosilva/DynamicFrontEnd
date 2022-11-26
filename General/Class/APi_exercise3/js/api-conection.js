const url = "http://livros.letscode.dev.netuno.org:25390/services";
const uidStudent = "94b602ba-bdbb-4080-9f71-cd2f0b0a20e0"

window.searchBooks = async function () {
  try {
  const promise = await fetch(`${url}/livro/lista`, {
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
};


window.createBooksApi = async function (Tiragem, Titulo, Autor, Descricao) {
  try {
  const promise = await fetch(`${url}/livro`, {
    method: "POST",
    headers: {
      Accept: 'application.json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify
    (
      {
        text: "",
        aluno: 
        {
            "uid": uidStudent,
        }, 
        tiragem: Tiragem,
        titulo: Titulo, 
        autor: Autor, 
        descricao: Descricao,
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
};


window.deleteBooks = async function (Uid) {
   try {
        const promise = await fetch(`${url}/livro`,
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
      };

// const uidBook = "29e5cbb2-df33-48e9-8de0-7bc75658226e";

// (
//     async () => {
//     await deleteBooks(uidBook);
//     const books = await searchBooks();
//     console.log(books);
// })();
