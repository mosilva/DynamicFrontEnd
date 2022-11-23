const url = "http://livros.letscode.dev.netuno.org:25390/services";
const uidStudent = "94b602ba-bdbb-4080-9f71-cd2f0b0a20e0"

window.searchBooks = async function () {
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
    return [];
  }

  return promise.json();
};

window.createBooks = async function (Tiragem, Titulo, Autor, Descricao) {
    return await fetch(`${url}/livro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "",
      aluno: {
        uid: uidStudent,
      }, 
        tiragem: Tiragem,
        titulo: Titulo, 
        autor: Autor, 
        descricao: Descricao
    })
  })
};



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
