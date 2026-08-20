import { Link } from "react-router-dom";
import {
    FaUsers,
    FaUserCheck,
    FaBuilding,
    FaUserClock,
    FaPlus,
    FaArrowRight,
} from "react-icons/fa";
import StateCard from "../components/StateCard"

function Home() {
    const recentEmployees = [
        {
            id: 1,
            name: "Ashish Kumar",
            department: "IT",
            position: "Java Developer",
            status: "Active",
        },
        {
            id: 2,
            name: "Priya Sharma",
            department: "HR",
            position: "HR Executive",
            status: "Active",
        },
        {
            id: 3,
            name: "Rahul Singh",
            department: "Finance",
            position: "Accountant",
            status: "On Leave",
        },
        {
            id: 4,
            name: "Amit Verma",
            department: "Sales",
            position: "Sales Executive",
            status: "Active",
        },
    ];

    return (
        <main className="page">

            {/* Hero Section */}

            <section className="container hero-section">
                <div className="hero-content">
                    <p className="hero-small-title">
                        Employee Management System
                    </p>

                    <h1>
                        Manage Your Employees
                        <br />
                        <span>Efficiently & Easily</span>
                    </h1>

                    <p className="hero-description">
                        Manage employee information, departments and workforce
                        status from one simple platform.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/employees/add" className="btn-green">
                            <FaPlus /> Add Employee
                        </Link>

                        <Link to="/employees" className="btn-outline">
                            View Employees
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>

                <div className="hero-icon">
                    👥
                </div>
            </section>

            {/* Statistics */}

            <section className="container">
                <div className="stats-container">

                    <StateCard
                        title="Total Employees"
                        value="52"
                        icon={<FaUsers />}
                    />

                    <StateCard
                        title="Active Employees"
                        value="45"
                        icon={<FaUserCheck />}
                    />

                    <StateCard
                        title="Departments"
                        value="6"
                        icon={<FaBuilding />}
                    />

                    <StateCard
                        title="On Leave"
                        value="7"
                        icon={<FaUserClock />}
                    />

                </div>
            </section>

            {/* Recent Employees */}

            <section className="container recent-section">

                <div className="section-header">
                    <div>
                        <h2>Recent Employees</h2>
                        <p>Recently added employees</p>
                    </div>

                    <Link to="/employees" className="view-all">
                        View All <FaArrowRight />
                    </Link>
                </div>

                <div className="employee-table-wrapper">

                    <table className="employee-table">

                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Department</th>
                                <th>Position</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {recentEmployees.map((employee) => (
                                <tr key={employee.id}>

                                    <td>
                                        <div className="employee-name">
                                            <div className="employee-avatar">
                                                {employee.name.charAt(0)}
                                            </div>

                                            <span>{employee.name}</span>
                                        </div>
                                    </td>

                                    <td>{employee.department}</td>

                                    <td>{employee.position}</td>

                                    <td>
                                        {employee.status === "Active" ? (
                                            <span className="status-active">
                                                Active
                                            </span>
                                        ) : (
                                            <span className="status-leave">
                                                On Leave
                                            </span>
                                        )}
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            </section>

            {/* Quick Actions */}

            <section className="container quick-section">

                <h2>Quick Actions</h2>

                <div className="quick-actions">

                    <Link to="/employees/add" className="quick-card">
                        <FaPlus />
                        <div>
                            <h3>Add Employee</h3>
                            <p>Add a new employee</p>
                        </div>
                    </Link>

                    <Link to="/employees" className="quick-card">
                        <FaUsers />
                        <div>
                            <h3>Manage Employees</h3>
                            <p>View and manage employees</p>
                        </div>
                    </Link>

                    <Link to="/departments" className="quick-card">
                        <FaBuilding />
                        <div>
                            <h3>Departments</h3>
                            <p>Manage departments</p>
                        </div>
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default Home;