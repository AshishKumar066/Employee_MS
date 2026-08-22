import { useEffect, useState } from "react";
import {
    FaEye,
    FaEdit,
    FaTrash,
    FaPlus,
    FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
    getEmployees,
    deleteEmployee,
} from "../data/employeeStorage";

function Employees() {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");

    // Load employees
    useEffect(() => {
        const data = getEmployees();
        setEmployees(data);
    }, []);

    // Delete employee
    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this employee?"
        );

        if (!confirmDelete) {
            return;
        }

        const updatedEmployees = deleteEmployee(id);

        setEmployees(updatedEmployees);
    };

    // Search employees
    const filteredEmployees = employees.filter((employee) => {
        const searchText = search.toLowerCase();

        return (
            employee.name
                .toLowerCase()
                .includes(searchText) ||
            employee.employeeId
                .toLowerCase()
                .includes(searchText) ||
            employee.email
                .toLowerCase()
                .includes(searchText)
        );
    });

    return (
        <main className="page">

            <div className="container">

                {/* Header */}

                <div className="employees-header">

                    <div>
                        <h1 className="page-title">
                            Employees
                        </h1>

                        <p className="page-subtitle">
                            Manage all employees in your organization
                        </p>
                    </div>

                    <Link
                        to="/employees/add"
                        className="btn-green"
                    >
                        <FaPlus />
                        Add Employee
                    </Link>

                </div>

                {/* Search */}

                <div className="employee-search-box">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search by name, employee ID or email..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

                {/* Employee Count */}

                <div className="employee-list-info">
                    Showing{" "}
                    <strong>
                        {filteredEmployees.length}
                    </strong>{" "}
                    of{" "}
                    <strong>
                        {employees.length}
                    </strong>{" "}
                    employees
                </div>

                {/* Employee Table */}

                <div className="employee-table-container">

                    <table className="employee-table">

                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Department</th>
                                <th>Position</th>
                                <th>Joining Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {filteredEmployees.length > 0 ? (

                                filteredEmployees.map((employee) => (

                                    <tr key={employee.id}>

                                        {/* Employee */}

                                        <td>
                                            <div className="employee-name-cell">

                                                <div className="employee-avatar">
                                                    {employee.name
                                                        .charAt(0)
                                                        .toUpperCase()}
                                                </div>

                                                <div>
                                                    <strong>
                                                        {employee.name}
                                                    </strong>

                                                    <span>
                                                        {employee.employeeId}
                                                    </span>

                                                    <small>
                                                        {employee.email}
                                                    </small>
                                                </div>

                                            </div>
                                        </td>

                                        {/* Department */}

                                        <td>
                                            {employee.department}
                                        </td>

                                        {/* Position */}

                                        <td>
                                            {employee.position}
                                        </td>

                                        {/* Joining Date */}

                                        <td>
                                            {employee.joiningDate}
                                        </td>

                                        {/* Status */}

                                        <td>

                                            <span
                                                className={`employee-status ${employee.status
                                                    .toLowerCase()
                                                    .replace(" ", "-")
                                                    }`}
                                            >
                                                {employee.status}
                                            </span>

                                        </td>

                                        {/* Actions */}

                                        <td>

                                            <div className="employee-actions">

                                                <Link
                                                    to={`/employees/${employee.id}`}
                                                    className="action-view"
                                                    title="View Employee"
                                                >
                                                    <FaEye />
                                                </Link>

                                                <Link
                                                    to={`/employees/edit/${employee.id}`}
                                                    className="action-edit"
                                                    title="Edit Employee"
                                                >
                                                    <FaEdit />
                                                </Link>

                                                <button
                                                    className="action-delete"
                                                    title="Delete Employee"
                                                    onClick={() =>
                                                        handleDelete(
                                                            employee.id
                                                        )
                                                    }
                                                >
                                                    <FaTrash />
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td
                                        colSpan="6"
                                        className="no-employees"
                                    >
                                        No employees found.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </main>
    );
}

export default Employees;