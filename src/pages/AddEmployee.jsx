import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSave, FaArrowLeft } from "react-icons/fa";

function AddEmployee() {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
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

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEmployee({
            ...employee,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Employee Data:", employee);

        alert("Employee added successfully!");

        navigate("/employees");
    };

    return (
        <main className="page">
            <div className="container">
                {/* Header */}

                <div className="form-page-header">
                    <div>
                        <h1 className="page-title">Add Employee</h1>

                        <p className="page-subtitle">
                            Add a new employee to your organization
                        </p>
                    </div>

                    <button className="back-btn" onClick={() => navigate("/employees")}>
                        <FaArrowLeft />
                        Back to Employees
                    </button>
                </div>

                {/* Form */}

                <form className="employee-form" onSubmit={handleSubmit}>
                    {/* Personal Information */}

                    <div className="form-section">
                        <div className="form-section-title">
                            <h2>Personal Information</h2>
                            <p>Enter basic employee information</p>
                        </div>

                        <div className="form-grid">
                            {/* Employee ID */}

                            <div className="form-group">
                                <label>Employee ID</label>

                                <input
                                    type="text"
                                    name="employeeId"
                                    placeholder="Example: EMP007"
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
                                    placeholder="Enter full name"
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
                                    placeholder="employee@gmail.com"
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
                                    placeholder="Enter phone number"
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
                                    <option value="">Select Gender</option>

                                    <option value="Male">Male</option>

                                    <option value="Female">Female</option>

                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Job Information */}

                    <div className="form-section">
                        <div className="form-section-title">
                            <h2>Job Information</h2>
                            <p>Enter employee's professional details</p>
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
                                    <option value="">Select Department</option>

                                    <option value="IT">IT</option>

                                    <option value="HR">HR</option>

                                    <option value="Finance">Finance</option>

                                    <option value="Sales">Sales</option>

                                    <option value="Marketing">Marketing</option>

                                    <option value="Operations">Operations</option>
                                </select>
                            </div>

                            {/* Position */}

                            <div className="form-group">
                                <label>Position</label>

                                <input
                                    type="text"
                                    name="position"
                                    placeholder="Example: Java Developer"
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
                                    placeholder="Example: 4.5 LPA"
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
                                    <option value="Active">Active</option>

                                    <option value="On Leave">On Leave</option>

                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}

                    <div className="form-actions">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => navigate("/employees")}
                        >
                            Cancel
                        </button>

                        <button type="submit" className="btn-green save-btn">
                            <FaSave />
                            Save Employee
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default AddEmployee;
