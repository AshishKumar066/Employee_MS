import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

import { addEmployee } from "../data/employeeStorage";

function AddEmployee() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        employeeId: "",
        name: "",
        email: "",
        phone: "",
        gender: "",
        department: "",
        position: "",
        joiningDate: "",
        salary: "",
        status: "Active",
    });

    const [error, setError] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        // Basic validation
        if (
            !formData.employeeId ||
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.gender ||
            !formData.department ||
            !formData.position ||
            !formData.joiningDate ||
            !formData.salary
        ) {
            setError("Please fill all required fields.");
            return;
        }

        // Save employee
        addEmployee(formData);

        // Go back to employees page
        navigate("/employees");
    };

    return (
        <main className="page">

            <div className="container">

                {/* Header */}

                <div className="add-employee-header">

                    <div className="add-employee-title-icon">
                        <FaUserPlus />
                    </div>

                    <div>
                        <h1 className="page-title">
                            Add Employee
                        </h1>

                        <p className="page-subtitle">
                            Add a new employee to your organization
                        </p>
                    </div>

                </div>

                {/* Form Card */}

                <div className="employee-form-card">

                    {error && (
                        <div className="form-error">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>

                        {/* Personal Information */}

                        <div className="form-section">

                            <h2>Personal Information</h2>

                            <div className="form-grid">

                                <div className="form-group">

                                    <label>
                                        Employee ID *
                                    </label>

                                    <input
                                        type="text"
                                        name="employeeId"
                                        placeholder="Example: EMP005"
                                        value={formData.employeeId}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="form-group">

                                    <label>
                                        Full Name *
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter employee name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="form-group">

                                    <label>
                                        Email *
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="employee@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="form-group">

                                    <label>
                                        Phone *
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="form-group">

                                    <label>
                                        Gender *
                                    </label>

                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="">
                                            Select Gender
                                        </option>

                                        <option value="Male">
                                            Male
                                        </option>

                                        <option value="Female">
                                            Female
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>

                                    </select>

                                </div>

                            </div>

                        </div>

                        {/* Job Information */}

                        <div className="form-section">

                            <h2>Job Information</h2>

                            <div className="form-grid">

                                <div className="form-group">

                                    <label>
                                        Department *
                                    </label>

                                    <select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select Department
                                        </option>

                                        <option value="IT">
                                            IT
                                        </option>

                                        <option value="HR">
                                            HR
                                        </option>

                                        <option value="Finance">
                                            Finance
                                        </option>

                                        <option value="Sales">
                                            Sales
                                        </option>

                                        <option value="Marketing">
                                            Marketing
                                        </option>

                                        <option value="Operations">
                                            Operations
                                        </option>

                                    </select>

                                </div>

                                <div className="form-group">

                                    <label>
                                        Position *
                                    </label>

                                    <input
                                        type="text"
                                        name="position"
                                        placeholder="Example: Java Developer"
                                        value={formData.position}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="form-group">

                                    <label>
                                        Joining Date *
                                    </label>

                                    <input
                                        type="date"
                                        name="joiningDate"
                                        value={formData.joiningDate}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="form-group">

                                    <label>
                                        Salary *
                                    </label>

                                    <input
                                        type="text"
                                        name="salary"
                                        placeholder="Example: 4.5 LPA"
                                        value={formData.salary}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="form-group">

                                    <label>
                                        Status *
                                    </label>

                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                    >

                                        <option value="Active">
                                            Active
                                        </option>

                                        <option value="On Leave">
                                            On Leave
                                        </option>

                                        <option value="Inactive">
                                            Inactive
                                        </option>

                                    </select>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="form-actions">

                            <button
                                type="button"
                                className="cancel-btn"
                                onClick={() =>
                                    navigate("/employees")
                                }
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="btn-green"
                            >
                                <FaUserPlus />
                                Add Employee
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </main>
    );
}

export default AddEmployee;