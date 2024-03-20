// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // Create an employees array
  let employees = [];
  let addEmployee = true;
   
  while(addEmployee) {
    // Prompt user to enter employee information and store them in variables
    let employeeFirstName = prompt("Enter first name: ");
    let employeeLastName = prompt("Enter last name: ");
    let employeeSalary = prompt("Enter salary: ");
    // Check if the employee's salary entered is not a number, if it is not then salary defaults to 0
    if(isNaN(employeeSalary)){
      employeeSalary = 0;
    }
    // Create an employee object using the employee information collected from the user prompts
    let employee = {
      firstName: employeeFirstName,
      lastName: employeeLastName,
      salary: employeeSalary
    };
    // Add the employee object to an array of employee objects 
    // Ask user if they want to add another employee, if true then the while loop will restart, if not then we exit the loop
    employees.push(employee);
    addEmployee = confirm("Do you want to add another employee?");
  }
  
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // Get the number of employees stored in the array and loop through each employee's salary and add them up
  let numOfEmployees = employeesArray.length;
  let totalSalary = 0;
  for (let i = 0; i < numOfEmployees; i++){
    totalSalary += employeesArray[i].salary;
  }
  // Calculate the average salary between all the employees and log the information using template literals
  let averageSalary = (totalSalary / numOfEmployees);
  console.log(`The average employee salary between our ${numOfEmployees} employee(s) is $${averageSalary}.00`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // Get the number of employees in the array and use it to set the range for choosing a random employee
  let numOfEmployees = employeesArray.length;
  let randomEmployee = Math.floor(Math.random() * numOfEmployees);
  // Use the randomEmployee value as an index to get the employees information to be logged using template literals and dot bracket notation
  console.log(`Congratulations to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
