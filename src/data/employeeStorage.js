import defaultEmployees from "./employees";

const STORAGE_KEY = "employee_management_data";

export const getEmployees = () => {
  const storedEmployees =
    localStorage.getItem(STORAGE_KEY);

  if (storedEmployees) {
    return JSON.parse(storedEmployees);
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(defaultEmployees)
  );

  return defaultEmployees;
};

export const saveEmployees = (employees) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(employees)
  );
};

export const addEmployee = (employee) => {
  const employees = getEmployees();

  const newEmployee = {
    ...employee,
    id: Date.now(),
  };

  const updatedEmployees = [
    ...employees,
    newEmployee,
  ];

  saveEmployees(updatedEmployees);

  return newEmployee;
};

export const updateEmployee = (
  id,
  updatedEmployee
) => {
  const employees = getEmployees();

  const updatedEmployees = employees.map(
    (employee) =>
      employee.id === Number(id)
        ? {
            ...employee,
            ...updatedEmployee,
          }
        : employee
  );

  saveEmployees(updatedEmployees);

  return updatedEmployees;
};

export const deleteEmployee = (id) => {
  const employees = getEmployees();

  const updatedEmployees = employees.filter(
    (employee) =>
      employee.id !== Number(id)
  );

  saveEmployees(updatedEmployees);

  return updatedEmployees;
};

export const getEmployeeById = (id) => {
  const employees = getEmployees();

  return employees.find(
    (employee) =>
      employee.id === Number(id)
  );
};