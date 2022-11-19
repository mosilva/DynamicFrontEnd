const client = {
    name: "Marcelo",
    cpf: "12345678910",
    email: "marcelo.olisi@gmail.com",
    phones: ["11991147854","1157238845"],    
    balance: 100,        
    deposit:  function(money){
        this.balance += money;
    }

}

const keys = ["name", "cpf", "email","phones","endereco"];

//Show props

// console.log(`\nMy name is ${client.name} the first three numbers of my cpf are ${client.cpf.substring(0,3)} e my e-mail is ${client[keys[2]]} \n`);

client.endereco = "Rua Alberto de Miranda - SP";

// keys.forEach(key => console.log(`${client[key]} \n`));

// for(phone of client.phones){
//     console.log(phone);
// }


//Acrescentar objetos dentro do objeto

client.dependents = [{
    name: "Dulce",
    kinship: "mother"

}]

client.dependents.name = "dulcinea";

client.dependents.push({
    name: "Juliana",
    kinship: "girlfriend"
});


//************** CALLS **************************

// console.log(client);

// const girlfriendName = client.dependents.filter(dependent => dependent.kinship === "girlfriend");

// console.log(girlfriendName);

client.deposit(500);
// console.log(client.balance);

// ************** Report ******************/

// let report = "";

// for(let info in client)
// {
//     if(typeof client[info] === "object" || typeof client[info] === "function")
//     {
//         continue;
//     }
//     console.log(`${info} ==> ${client[info]}\n`);
// }

//********************* */ Table

// const student = {
//     name: "Rafaela",
//     age: 10
// }

// console.table(student);

function Client(name, cpf, email, balance)
{
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.balance = balance;
    
    this.deposit = function(money)
    {
        balance += money;
    }
}

const marcelo = new Client("Marcelo", "11122233344", "marcelo.olisi@gmail.com","100","200");

console.log(marcelo);

function ClientSavings(name,cpf,email,balanceSavings){

    Client.call(this,name,cpf,email);
    this.balanceSavings = balanceSavings;

}

ClientSavings.prototype.DepositSavings = function(money){
    this.balanceSavings += money;
}











