import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    FaSave,
    FaArrowLeft,
} from "react-icons/fa";

function EditEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        employeeId: "EMP001",
        name: "Ashish Kumar",
        email: "ashish@gmail.com",
        phone: "9876543210",
        gender: "Male",
        department: "IT",
        position: "Java Developer",
        joiningDate: "2026-01-15",
        salary: "4.2 LPA",
        status: "Active",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEmployee({
            ...employee,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Updated Employee:", {
            id,
            ...employee,
        });

        alert("Employee updated successfully!");

        navigate(`/employees/${id}`);
    };

    return (
        <main className="page">

            <div className="container">

                {/* Header */}

                <div className="form-page-header">

                    <div>
                        <h1 className="page-title">
                            Edit Employee
                        </h1>

                        <p className="page-subtitle">
                            Update employee information
                        </p>
                    </div>

                    <button
                        className="back-btn"
                        onClick={() => navigate(`/employees/${id}`)}
                    >
                        <FaArrowLeft />
                        Back to Details
                    </button>

                </div>

                {/* Form */}

                <form
                    className="employee-form"
                    onSubmit={handleSubmit}
                >

                    {/* Personal Information */}

                    <div className="form-section">

                        <div className="form-section-title">
                            <h2>Personal Information</h2>

                            <p>
                                Update basic employee information
                            </p>
                        </div>

                        <div className="form-grid">

                            {/* Employee ID */}

                            <div className="form-group">
                                <label>Employee ID</label>

                                <input
                                    type="text"
                                    name="employeeId"
                                    value={employee.employeeId}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            {/* Name */}

                            <div className="form-group">
                                <label>Full Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    value={employee.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            {/* Email */}

                            <div className="form-group">
                                <label>Email</label>

                                <input
                                    type="email"
                                    name="email"
                                    value={employee.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            {/* Phone */}

                            <div className="form-group">
                                <label>Phone Number</label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={employee.phone}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            {/* Gender */}

                            <div className="form-group">
                                <label>Gender</label>

                                <select
                                    name="gender"
                                    value={employee.gender}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                >
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

                        <div className="form-section-title">
                            <h2>Job Information</h2>

                            <p>
                                Update employee's professional details
                            </p>
                        </div>

                        <div className="form-grid">

                            {/* Department */}

                            <div className="form-group">
                                <label>Department</label>

                                <select
                                    name="department"
                                    value={employee.department}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                >
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

                            {/* Position */}

                            <div className="form-group">
                                <label>Position</label>

                                <input
                                    type="text"
                                    name="position"
                                    value={employee.position}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            {/* Joining Date */}

                            <div className="form-group">
                                <label>Joining Date</label>

                                <input
                                    type="date"
                                    name="joiningDate"
                                    value={employee.joiningDate}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            {/* Salary */}

                            <div className="form-group">
                                <label>Salary</label>

                                <input
                                    type="text"
                                    name="salary"
                                    value={employee.salary}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            {/* Status */}

                            <div className="form-group">
                                <label>Status</label>

                                <select
                                    name="status"
                                    value={employee.status}
                                    onChange={handleChange}
                                    className="form-control"
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
                                navigate(`/employees/${id}`)
                            }
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="btn-green save-btn"
                        >
                            <FaSave />
                            Update Employee
                        </button>

                    </div>

                </form>

            </div>

        </main>
    );
}

export default EditEmployee;