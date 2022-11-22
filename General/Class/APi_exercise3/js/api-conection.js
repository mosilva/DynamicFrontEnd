const url = "http://livros.letscode.dev.netuno.org:25390/services";

let CatalogBooks2 = "";

function searchBooks() {
  CatalogBooks2 = fetch(`${url}/livro/lista`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      text: "",
      aluno: {
        uid: "94b602ba-bdbb-4080-9f71-cd2f0b0a20e0",
      },
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        throw Error("Falha");
      } else {
        return response;
      }
    })
    .catch((error) => console.log(error));
}

searchBooks();
console.log(CatalogBooks2);

let bookApi = "";
function updateBooks() {
  bookApi = fetch(`${url}/livro/lista`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      uid: "6548fd31-d4f1-4940-8c89-009e53b68a4b",
      aluno: {
        uid: "94b602ba-bdbb-4080-9f71-cd2f0b0a20e0",
      },
      tiragem: books.tiragem.value,
      titulo: "string",
      autor: "string",
      descricao: "string",
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        throw Error("Falha");
      } else {
        return response;
      }
    })
    .catch((error) => console.log(error));
}

// (async () => {
//     const books = await searchBooks();
//     console.log(books);
// })();

// async function deleteBooks(uid)
// {
//         const books = await fetch(`${url}/livro`,
//         {
//                 method: 'DELETE',
//                 headers:
//                 {
//                     "Content-Type": "application/json"
//                 },

//                 body: JSON.stringify
//                 (
//                     {
//                         "aluno":
//                         {
//                             "uid": "94b602ba-bdbb-4080-9f71-cd2f0b0a20e0"
//                         },
//                         uid
//                     }
//                 )

//         })

//         if(books.ok)
//         {
//             return books.ok;
//         }

// }

// // const uidBook = "29e5cbb2-df33-48e9-8de0-7bc75658226e";

// // (
// //     async () => {
// //     await deleteBooks(uidBook);
// //     const books = await searchBooks();
// //     console.log(books);
// // })();
