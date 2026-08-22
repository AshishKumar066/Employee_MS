import { Link } from "react-router-dom";

import {
    FaUsers,
    FaUserCheck,
    FaBuilding,
    FaUserClock,
    FaPlus,
    FaArrowRight,
} from "react-icons/fa";

import { useEffect, useState } from "react";

import StatCard from "../components/StateCard";

import { getEmployees } from "../data/employeeStorage";


function Home() {

    // Employee State
   
    const [employees, setEmployees] = useState([]);

    // Load Employees

    useEffect(() => {

        const data = getEmployees();

        setEmployees(data);

    }, []);

    // Dynamic Statistics
   
    // Total Employees

    const totalEmployees = employees.length;


    // Active Employees

    const activeEmployees = employees.filter(
        (employee) =>
            employee.status === "Active"
    ).length;


    // On Leave Employees

    const onLeaveEmployees = employees.filter(
        (employee) =>
            employee.status === "On Leave"
    ).length;


    // Inactive Employees

    const inactiveEmployees = employees.filter(
        (employee) =>
            employee.status === "Inactive"
    ).length;

    // Unique Departments
   
    const departments = [
        ...new Set(
            employees.map(
                (employee) => employee.department
            )
        ),
    ];


    const totalDepartments =
        departments.length;

    // Recent Employees
    
    const recentEmployees = [...employees]
        .sort(
            (a, b) =>
                new Date(b.joiningDate) -
                new Date(a.joiningDate)
        )
        .slice(0, 4);


    return (

        <main className="page">

            <section className="container hero-section">

                <div className="hero-content">

                    <p className="hero-small-title">
                        Employee Management System
                    </p>


                    <h1>

                        Manage Your Employees

                        <br />

                        <span>
                            Efficiently & Easily
                        </span>

                    </h1>


                    <p className="hero-description">

                        Manage employee information,
                        departments and workforce
                        status from one simple platform.

                    </p>


                    <div className="hero-buttons">

                        <Link
                            to="/employees/add"
                            className="btn-green"
                        >

                            <FaPlus />

                            Add Employee

                        </Link>

                        <Link
                            to="/employees"
                            className="btn-outline"
                        >

                            View Employees

                            <FaArrowRight />

                        </Link>

                    </div>

                </div>


                <div className="hero-icon">

                    👥

                </div>

            </section>

            <section className="container">

                <div className="stats-container">

                    <StatCard
                        title="Total Employees"
                        value={totalEmployees}
                        icon={<FaUsers />}
                    />

                    <StatCard
                        title="Active Employees"
                        value={activeEmployees}
                        icon={<FaUserCheck />}
                    />


                    {/* Departments */}

                    <StatCard
                        title="Departments"
                        value={totalDepartments}
                        icon={<FaBuilding />}
                    />

                    <StatCard
                        title="On Leave"
                        value={onLeaveEmployees}
                        icon={<FaUserClock />}
                    />
                </div>

            </section>

            <section className="container recent-section">


                <div className="section-header">

                    <div>

                        <h2>
                            Recent Employees
                        </h2>

                        <p>
                            Recently joined employees
                        </p>

                    </div>

                    <Link
                        to="/employees"
                        className="view-all"
                    >

                        View All

                        <FaArrowRight />
                    </Link>
                </div>

                <div className="employee-table-wrapper">


                    {recentEmployees.length > 0 ? (

                        <table className="employee-table">
                            <thead>
                                <tr>
                                    <th>
                                        Employee
                                    </th>

                                    <th>
                                        Department
                                    </th>

                                    <th>
                                        Position
                                    </th>

                                    <th>
                                        Status
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {recentEmployees.map(
                                    (employee) => (

                                        <tr
                                            key={employee.id}
                                        >


                                            {/* Employee */}

                                            <td>

                                                <div className="employee-name">


                                                    <div className="employee-avatar">

                                                        {employee.name
                                                            .charAt(0)
                                                            .toUpperCase()}

                                                    </div>


                                                    <span>

                                                        {employee.name}

                                                    </span>

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



                                            {/* Status */}

                                            <td>


                                                {employee.status ===
                                                    "Active" ? (

                                                    <span className="status-active">

                                                        Active

                                                    </span>

                                                ) : employee.status ===
                                                    "On Leave" ? (

                                                    <span className="status-leave">

                                                        On Leave

                                                    </span>

                                                ) : (

                                                    <span className="status-inactive">

                                                        Inactive

                                                    </span>

                                                )}


                                            </td>


                                        </tr>

                                    )
                                )}

                            </tbody>


                        </table>

                    ) : (

                        <div className="no-recent-employees">

                            No employees available.

                        </div>

                    )}


                </div>

            </section>



            {/* =================================
          Quick Actions
      ================================= */}

            <section className="container quick-section">


                <h2>
                    Quick Actions
                </h2>


                <div className="quick-actions">


                    {/* Add Employee */}

                    <Link
                        to="/employees/add"
                        className="quick-card"
                    >

                        <FaPlus />


                        <div>

                            <h3>
                                Add Employee
                            </h3>

                            <p>
                                Add a new employee
                            </p>

                        </div>

                    </Link>



                    {/* Manage Employees */}

                    <Link
                        to="/employees"
                        className="quick-card"
                    >

                        <FaUsers />


                        <div>

                            <h3>
                                Manage Employees
                            </h3>

                            <p>
                                View and manage employees
                            </p>

                        </div>

                    </Link>



                    {/* Departments */}

                    <Link
                        to="/departments"
                        className="quick-card"
                    >

                        <FaBuilding />


                        <div>

                            <h3>
                                Departments
                            </h3>

                            <p>
                                Manage departments
                            </p>

                        </div>

                    </Link>


                </div>

            </section>


        </main>
    );
}

export default Home;