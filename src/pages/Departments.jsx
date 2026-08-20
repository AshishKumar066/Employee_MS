import { useState } from "react";
import {
    FaBuilding,
    FaPlus,
    FaUsers,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

function Departments() {
    const [departments, setDepartments] = useState([
        {
            id: 1,
            name: "IT",
            description: "Technology and software development",
            employees: 15,
        },
        {
            id: 2,
            name: "HR",
            description: "Human resource management",
            employees: 8,
        },
        {
            id: 3,
            name: "Finance",
            description: "Financial and accounting operations",
            employees: 10,
        },
        {
            id: 4,
            name: "Sales",
            description: "Sales and business development",
            employees: 9,
        },
        {
            id: 5,
            name: "Marketing",
            description: "Marketing and brand management",
            employees: 6,
        },
        {
            id: 6,
            name: "Operations",
            description: "Daily business operations",
            employees: 4,
        },
    ]);

    const [showForm, setShowForm] = useState(false);

    const [departmentName, setDepartmentName] = useState("");
    const [description, setDescription] = useState("");

    // Add Department
    const handleAddDepartment = (e) => {
        e.preventDefault();

        if (!departmentName.trim()) {
            return;
        }

        const newDepartment = {
            id: Date.now(),
            name: departmentName,
            description:
                description || "Department description",
            employees: 0,
        };

        setDepartments([
            ...departments,
            newDepartment,
        ]);

        setDepartmentName("");
        setDescription("");
        setShowForm(false);
    };

    // Delete Department
    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this department?"
        );

        if (confirmDelete) {
            setDepartments(
                departments.filter(
                    (department) => department.id !== id
                )
            );
        }
    };

    return (
        <main className="page">

            <div className="container">

                {/* Header */}

                <div className="department-header">

                    <div>
                        <h1 className="page-title">
                            Departments
                        </h1>

                        <p className="page-subtitle">
                            Manage your organization's departments
                        </p>
                    </div>

                    <button
                        className="btn-green department-add-btn"
                        onClick={() =>
                            setShowForm(!showForm)
                        }
                    >
                        <FaPlus />
                        Add Department
                    </button>

                </div>

                {/* Add Department Form */}

                {showForm && (
                    <div className="department-form-card">

                        <h2>Add Department</h2>

                        <form
                            onSubmit={handleAddDepartment}
                        >

                            <div className="department-form-grid">

                                <div className="form-group">
                                    <label>
                                        Department Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Example: Development"
                                        value={departmentName}
                                        onChange={(e) =>
                                            setDepartmentName(
                                                e.target.value
                                            )
                                        }
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>
                                        Description
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Department description"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                            </div>

                            <div className="department-form-actions">

                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={() =>
                                        setShowForm(false)
                                    }
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="btn-green"
                                >
                                    Add Department
                                </button>

                            </div>

                        </form>

                    </div>
                )}

                {/* Department Count */}

                <div className="department-summary">
                    <div className="department-summary-icon">
                        <FaBuilding />
                    </div>

                    <div>
                        <span>Total Departments</span>
                        <strong>
                            {departments.length}
                        </strong>
                    </div>
                </div>

                {/* Department Cards */}

                <div className="department-grid">

                    {departments.map((department) => (
                        <div
                            className="department-card"
                            key={department.id}
                        >

                            <div className="department-card-top">

                                <div className="department-icon">
                                    <FaBuilding />
                                </div>

                                <div className="department-actions">

                                    <button
                                        className="department-action edit-department"
                                        title="Edit Department"
                                    >
                                        <FaEdit />
                                    </button>

                                    <button
                                        className="department-action delete-department"
                                        title="Delete Department"
                                        onClick={() =>
                                            handleDelete(
                                                department.id
                                            )
                                        }
                                    >
                                        <FaTrash />
                                    </button>

                                </div>

                            </div>

                            <h2>
                                {department.name}
                            </h2>

                            <p>
                                {department.description}
                            </p>

                            <div className="department-footer">

                                <div>
                                    <FaUsers />
                                    <span>
                                        {department.employees} Employees
                                    </span>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </main>
    );
}

export default Departments;