import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";

import EmployeeCard from "../components/EmployeeCard";

function Employees() {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            employeeId: "EMP001",
            name: "Ashish Kumar",
            email: "ashish@gmail.com",
            phone: "9876543210",
            department: "IT",
            position: "Java Developer",
            joiningDate: "2026-01-15",
            salary: "4.2 LPA",
            status: "Active",
        },
        {
            id: 2,
            employeeId: "EMP002",
            name: "Priya Sharma",
            email: "priya@gmail.com",
            phone: "9876543211",
            department: "HR",
            position: "HR Executive",
            joiningDate: "2025-11-10",
            salary: "3.8 LPA",
            status: "Active",
        },
        {
            id: 3,
            employeeId: "EMP003",
            name: "Rahul Singh",
            email: "rahul@gmail.com",
            phone: "9876543212",
            department: "Finance",
            position: "Accountant",
            joiningDate: "2025-08-20",
            salary: "4.0 LPA",
            status: "On Leave",
        },
        {
            id: 4,
            employeeId: "EMP004",
            name: "Amit Verma",
            email: "amit@gmail.com",
            phone: "9876543213",
            department: "Sales",
            position: "Sales Executive",
            joiningDate: "2026-02-05",
            salary: "3.5 LPA",
            status: "Active",
        },
        {
            id: 5,
            employeeId: "EMP005",
            name: "Neha Gupta",
            email: "neha@gmail.com",
            phone: "9876543214",
            department: "Marketing",
            position: "Marketing Executive",
            joiningDate: "2025-09-12",
            salary: "3.7 LPA",
            status: "Inactive",
        },
        {
            id: 6,
            employeeId: "EMP006",
            name: "Vikas Yadav",
            email: "vikas@gmail.com",
            phone: "9876543215",
            department: "IT",
            position: "Frontend Developer",
            joiningDate: "2026-03-01",
            salary: "4.5 LPA",
            status: "Active",
        },
    ]);

    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");
    const [status, setStatus] = useState("All");

    // Delete employee
    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (confirmDelete) {
            setEmployees(
                employees.filter((employee) => employee.id !== id)
            );
        }
    };

    // Search + Filter
    const filteredEmployees = employees.filter((employee) => {

        const matchesSearch =
            employee.name.toLowerCase().includes(search.toLowerCase()) ||
            employee.employeeId.toLowerCase().includes(search.toLowerCase()) ||
            employee.email.toLowerCase().includes(search.toLowerCase());

        const matchesDepartment =
            department === "All" ||
            employee.department === department;

        const matchesStatus =
            status === "All" ||
            employee.status === status;

        return (
            matchesSearch &&
            matchesDepartment &&
            matchesStatus
        );
    });

    return (
        <main className="page">

            <div className="container">

                {/* Page Header */}

                <div className="employee-page-header">

                    <div>
                        <h1 className="page-title">
                            Employees
                        </h1>

                        <p className="page-subtitle">
                            Manage your organization's employees
                        </p>
                    </div>

                    <Link
                        to="/employees/add"
                        className="btn-green add-employee-btn"
                    >
                        <FaPlus />
                        Add Employee
                    </Link>

                </div>

                {/* Search and Filters */}

                <div className="employee-filters">

                    <div className="search-box">

                        <FaSearch />

                        <input
                            type="text"
                            placeholder="Search employee..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>

                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="filter-select"
                    >
                        <option value="All">All Departments</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                    </select>

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="filter-select"
                    >
                        <option value="All">All Status</option>
                        <option value="Active">Active</option>
                        <option value="On Leave">On Leave</option>
                        <option value="Inactive">Inactive</option>
                    </select>

                </div>

                {/* Employee Count */}

                <div className="employee-result-info">
                    <p>
                        Showing <strong>{filteredEmployees.length}</strong>{" "}
                        employees
                    </p>
                </div>

                {/* Employee Cards */}

                {filteredEmployees.length > 0 ? (

                    <div className="employee-grid">

                        {filteredEmployees.map((employee) => (
                            <EmployeeCard
                                key={employee.id}
                                employee={employee}
                                onDelete={handleDelete}
                            />
                        ))}

                    </div>

                ) : (

                    <div className="no-employees">
                        <h3>No employees found</h3>
                        <p>
                            Try changing your search or filter.
                        </p>
                    </div>

                )}

            </div>

        </main>
    );
}

export default Employees;