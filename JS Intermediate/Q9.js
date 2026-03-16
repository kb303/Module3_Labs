let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salaries) {
  let totalSalary = 0;
  const salaryArr = new Map(Object.entries(salaries));

  for (const salary of salaryArr.values()) {
    totalSalary += salary;
  }
  return totalSalary;
}
console.log(sumSalaries(salaries));

// function topEarner(salaries){
//   const salaryArr = new Map(Object.entries(salaries));
//   salaryArr.forEach((salary)=>)
// }
