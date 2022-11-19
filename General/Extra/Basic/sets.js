// Map

const grades = [10, 9.5, 8, 7, 6];

const gradesUpdated = grades.map((grade) => {
    return grade >= 10 ? 
    10 : grade === 9.5 ? 
    10 : grade + 1; 
})

// console.log(gradesUpdated);

//Filter

const names = ["Ana", "Marcos", "Maria", "Mauro"];
const averages = [7, 4.5, 8, 7.5];

const disapproved = names.filter((_, index) => {
    return averages[index] < 7;
});

// _ -> diz que não está utilizando o primeiro parâmetro, porque somos obrigados a passar o nome pra acessar o segundo parêmetro

// console.log(disapproved);


//Reduce

const jsClass = [7, 8, 9];
const csharpClass = [10, 9, 10];
const pythonClass = [4, 4, 4];

function calculateAverage(gradesClass){
    const sumGrades = gradesClass.reduce((acc, grade) => acc + grade, 0);

    const average = sumGrades / gradesClass.length;

    return average;
}

// console.log(`\nThe average of Python class is ${calculateAverage(pythonClass)}\n`)

// Spread Operator (operador de espalhamento) [... array]

const gradesUniversity = [7, 8, 7];

const gradesDuplicated = [...gradesUniversity];

gradesDuplicated.push(8);

// console.log(gradesDuplicated);
// console.log(gradesUniversity);


// Set (conjunto)

const namesStudents = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const mySet = new Set(namesStudents);

const namesStudentUpdated = [...mySet]

// or const namesStudentUpdated = [...new Set(namesStudents)]

console.log(namesStudentUpdated);





