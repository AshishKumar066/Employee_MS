import { Link, useParams } from "react-router-dom";
import {
    FaArrowLeft,
    FaEdit,
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaBriefcase,
    FaCalendarAlt,
    FaMoneyBillWave,
} from "react-icons/fa";

function EmployeeDetails() {
    const { id } = useParams();

    // Temporary employee data
    const employees = [
        {
            id: 1,
            employeeId: "EMP001",
            name: "Ashish Kumar",
            email: "ashish@gmail.com",
            phone: "9876543210",
            gender: "Male",
            department: "IT",
            position: "Java Developer",
            joiningDate: "15 January 2026",
            salary: "4.2 LPA",
            status: "Active",
        },
        {
            id: 2,
            employeeId: "EMP002",
            name: "Priya Sharma",
            email: "priya@gmail.com",
            phone: "9876543211",
            gender: "Female",
            department: "HR",
            position: "HR Executive",
            joiningDate: "10 November 2025",
            salary: "3.8 LPA",
            status: "Active",
        },
        {
            id: 3,
            employeeId: "EMP003",
            name: "Rahul Singh",
            email: "rahul@gmail.com",
            phone: "9876543212",
            gender: "Male",
            department: "Finance",
            position: "Accountant",
            joiningDate: "20 August 2025",
            salary: "4.0 LPA",
            status: "On Leave",
        },
        {
            id: 4,
            employeeId: "EMP004",
            name: "Amit Verma",
            email: "amit@gmail.com",
            phone: "9876543213",
            gender: "Male",
            department: "Sales",
            position: "Sales Executive",
            joiningDate: "05 February 2026",
            salary: "3.5 LPA",
            status: "Active",
        },
    ];

    const employee = employees.find(
        (item) => item.id === Number(id)
    );

    // If employee does not exist
    if (!employee) {
        return (
            <main className="page">
                <div className="container">
                    <div className="employee-not-found">
                        <h2>Employee Not Found</h2>
                        <p>
                            The employee you are looking for does not exist.
                        </p>

                        <Link to="/employees" className="btn-green">
                            <FaArrowLeft />
                            Back to Employees
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="page">

            <div className="container">

                {/* Header */}

                <div className="details-header">

                    <Link
                        to="/employees"
                        className="back-btn"
                    >
                        <FaArrowLeft />
                        Back to Employees
                    </Link>

                    <Link
                        to={`/employees/edit/${employee.id}`}
                        className="btn-green edit-employee-btn"
                    >
                        <FaEdit />
                        Edit Employee
                    </Link>

                </div>

                {/* Employee Profile */}

                <div className="employee-profile">

                    <div className="profile-top">

                        <div className="profile-avatar">
                            {employee.name.charAt(0)}
                        </div>

                        <div className="profile-name">

                            <h1>{employee.name}</h1>

                            <p>{employee.employeeId}</p>

                            {employee.status === "Active" ? (
                                <span className="status-active">
                                    Active
                                </span>
                            ) : employee.status === "On Leave" ? (
                                <span className="status-leave">
                                    On Leave
                                </span>
                            ) : (
                                <span className="status-inactive">
                                    Inactive
                                </span>
                            )}

                        </div>

                    </div>

                    {/* Basic Information */}

                    <div className="details-section">

                        <h2>Personal Information</h2>

                        <div className="details-grid">

                            <div className="detail-item">
                                <div className="detail-icon">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <span>Email</span>
                                    <strong>{employee.email}</strong>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon">
                                    <FaPhone />
                                </div>

                                <div>
                                    <span>Phone</span>
                                    <strong>{employee.phone}</strong>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon">
                                    👤
                                </div>

                                <div>
                                    <span>Gender</span>
                                    <strong>{employee.gender}</strong>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Job Information */}

                    <div className="details-section">

                        <h2>Job Information</h2>

                        <div className="details-grid">

                            <div className="detail-item">
                                <div className="detail-icon">
                                    <FaBuilding />
                                </div>

                                <div>
                                    <span>Department</span>
                                    <strong>{employee.department}</strong>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon">
                                    <FaBriefcase />
                                </div>

                                <div>
                                    <span>Position</span>
                                    <strong>{employee.position}</strong>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon">
                                    <FaCalendarAlt />
                                </div>

                                <div>
                                    <span>Joining Date</span>
                                    <strong>{employee.joiningDate}</strong>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon">
                                    <FaMoneyBillWave />
                                </div>

                                <div>
                                    <span>Salary</span>
                                    <strong>{employee.salary}</strong>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default EmployeeDetails;