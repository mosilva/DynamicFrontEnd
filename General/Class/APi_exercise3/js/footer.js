(() => {
  const styleJs = document.createElement("script");
  styleJs.setAttribute("src", "js/footer-styles.js");
  document.body.appendChild(styleJs);
})();

const catalogEstablishment = [
  {
    Categoria: "Doce",
    Nome: "Cacau Show",
    Endereco: "Giovanni Gronchi, 5819 - Piso 1 - Loja 01",
    Cep: "05724-003",
    Telefone: "1158457187",
    Email: "dengoChocolateCacauShow@gmail.com",
  },
  {
    Categoria: "Fast Food",
    Nome: "Burguer King",
    Endereco: "Estrada do Campo Limpo, 459",
    Cep: "05777-001",
    Telefone: "1158401212",
    Email: "bkCampoLimpo@hotmail.com",
  },
  {
    Categoria: "Doceee",
    Nome: "Cacau Brasil",
    Endereco: "Giovanni Gronchi, 5819 - Piso 2 - Loja 32",
    Cep: "05724-003",
    Telefone: "115844058",
    Email: "cacau_brasil_gio@gmail.com",
  },
  {
    Categoria: "Drrrroce",
    Nome: "Cacau Show",
    Endereco: "Giovanni Gronchi, 5819 - Piso 1 - Loja 01",
    Cep: "05724-003",
    Telefone: "1158457187",
    Email: "dengoChocolateCacauShow@gmail.com",
  },
  {
    Categoria: "Fast Food",
    Nome: "Burguer King",
    Endereco: "Estrada do Campo Limpo, 459",
    Cep: "05777-001",
    Telefone: "1158401212",
    Email: "bkCampoLimpo@hotmail.com",
  },
  {
    Categoria: "Doce",
    Nome: "Cacau Brasil",
    Endereco: "Giovanni Gronchi, 5819 - Piso 2 - Loja 32",
    Cep: "05724-003",
    Telefone: "115844058",
    Email: "cacau_brasil_gio@gmail.com",
  },
  {
    Categoria: "BATATA",
    Nome: "Cacau Show",
    Endereco: "Giovanni Gronchi, 5819 - Piso 1 - Loja 01",
    Cep: "05724-003",
    Telefone: "1158457187",
    Email: "dengoChocolateCacauShow@gmail.com",
  },
  {
    Categoria: "Fast Food",
    Nome: "Burguer King",
    Endereco: "Estrada do Campo Limpo, 459",
    Cep: "05777-001",
    Telefone: "1158401212",
    Email: "bkCampoLimpo@hotmail.com",
  },
  {
    Categoria: "Doce",
    Nome: "Cacau Brasil",
    Endereco: "Giovanni Gronchi, 5819 - Piso 2 - Loja 32",
    Cep: "05724-003",
    Telefone: "115844058",
    Email: "cacau_brasil_gio@gmail.com",
  },
  {
    Categoria: "Doce",
    Nome: "Cacau Show",
    Endereco: "Giovanni Gronchi, 5819 - Piso 1 - Loja 01",
    Cep: "05724-003",
    Telefone: "1158457187",
    Email: "dengoChocolateCacauShow@gmail.com",
  },
  {
    Categoria: "Fast Food",
    Nome: "Burguer King",
    Endereco: "Estrada do Campo Limpo, 459",
    Cep: "05777-001",
    Telefone: "1158401212",
    Email: "bkCampoLimpo@hotmail.com",
  },
  {
    Categoria: "Doce",
    Nome: "Cacau Brasil",
    Endereco: "Giovanni Gronchi, 5819 - Piso 2 - Loja 32",
    Cep: "05724-003",
    Telefone: "115844058",
    Email: "cacau_brasil_gio@gmail.com",
  },
];

(function generateFooter() {
  const footer = document.createElement("footer");
  const list = document.createElement("list");
  const listUnordered = document.createElement("ul");
  const categories = {};
  catalogEstablishment.forEach((element) => {
    const seletor = element.Categoria.replaceAll(" ","");
    const notInCategories = !(element.Categoria in categories);
    if (notInCategories) {
      categories[element.Categoria] = 1;
      const listItem = document.createElement("li");
      const listLink = document.createElement("a");
      listLink.href = "#";
      listLink.classList.add("" + seletor);
      listLink.textContent = `${element.Categoria} `;
      listItem.appendChild(listLink);
      listUnordered.appendChild(listItem);
    }
    else{
      categories[element.Categoria] += 1;
    }
    countCategory(categories);
  });

  function countCategory(categories){
  console.warn("oii");
  for(let item in categories){
    console.log(item);
    console.log(categories[item]);
  }
  }



  list.appendChild(listUnordered);
  footer.appendChild(list);
  document.body.appendChild(footer);
})();