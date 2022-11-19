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

const disapproved = names.filter((student, index) => {
    return averages[index] < 7;
});

console.log(disapproved);


