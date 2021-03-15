// Write your solution in this file!

const employee = {name: 'Lilo Stitch', streetAddress: '123 4th Ave', city: 'Five Six', state: 'Seven Eight', zip: '91011'}

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const nextEmployee = {...obj};

  nextEmployee[key] = value;
  return nextEmployee;
}

/*const employee1 = updateEmployeeWithKeyAndValue(employee, 'name', 'Arnoud Swart');
console.log(employee1);
console.log(employee);*/

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
/*const employee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Celia Swart');
console.log(employee2);
console.log(employee);*/

function deleteFromEmployeeByKey(obj, key) {
  const employee3 = {...obj};
  delete employee3[key];
  return employee3;
}
/*const employee3 = deleteFromEmployeeByKey(employee1, 'zip');
console.log(employee3);
console.log(employee1);*/

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}
/*destructivelyDeleteFromEmployeeByKey(employee1, 'zip');
console.log(employee1);*/