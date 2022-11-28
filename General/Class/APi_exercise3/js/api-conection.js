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
      alert("Algo deu errado no sistema! Tente novamente!");
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

  switch (response.status) {
    case 200:
      alert("Livro cadastrado com sucesso!");
      break;
    case 422:
      alert("Esse livro já foi cadastrado! Procure na lista usando o filtro!");
      break;
    default: alert("Huumm, algo deu errado nesse cadastro! Tente novamente!");
    }

  return await response.json();

},

deleteBook: async (uid) => {
      const response = await fetch(`${url}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aluno:
          {
              uid: uidStudent
          },
          uid
        }),
    }).catch((error) => {
        console.log("Erro na comunicação:", error);
    });

    switch (response.status) {
      case 200:
        alert("Livro foi excluído com sucesso!");
        break;
      case 404:
        alert("Esse livro não foi identificado para exclusão! Tente novamente");
        break;
      default: alert("Huumm, algo deu errado nessa exclusão! Tente novamente!");
      }

    return await response.json();
  },


editBook : async (editBook) => { 
    const response = await fetch(`${url}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          uid: editBook.uid,
          aluno: {
            uid: uidStudent,
          },
          tiragem: parseInt(editBook.tiragem),
          titulo: editBook.titulo,
          autor: editBook.autor,
          descricao: editBook.descricao,
      }),
  }).catch((error) => {
      console.log("Erro na comunicação:", error);
  });

  switch (response.status) {
    case 200:
      alert("Os dados do livro foram alterados com sucesso!");
      break;
    case 404:
      alert("Algo deu errado nessa alteração! Tente novamente!");
      break;
    case 422:
      alert("Essa alteração coincide com um livro já cadastrado! Procure no filtro!");
      break;
    default: alert("Huumm, algo deu errado nessa alteração! Tente novamente!");
    }

  return await response.json();
  }
}