import {
    FaUsers,
    FaBullseye,
    FaEye,
    FaHandshake,
    FaChartLine,
} from "react-icons/fa";

function About() {
    return (
        <main className="page">

            <div className="container">

                {/* Page Header */}

                <div className="about-header">

                    <h1 className="page-title">
                        About Our Employee Management System
                    </h1>

                    <p className="page-subtitle">
                        A simple and efficient solution for managing
                        employees and organizational information.
                    </p>

                </div>

                {/* Introduction */}

                <div className="about-introduction">

                    <div className="about-icon">
                        <FaUsers />
                    </div>

                    <div>
                        <h2>
                            Employee Management Made Simple
                        </h2>

                        <p>
                            Our Employee Management System helps
                            organizations manage employee information,
                            departments and employee status from one
                            centralized application.
                        </p>

                        <p>
                            The system is designed to make everyday HR
                            operations easier, faster and more organized.
                        </p>
                    </div>

                </div>

                {/* Mission & Vision */}

                <div className="mission-vision-grid">

                    <div className="about-info-card">

                        <div className="about-card-icon">
                            <FaBullseye />
                        </div>

                        <h2>Our Mission</h2>

                        <p>
                            To provide a simple and reliable employee
                            management platform that helps organizations
                            maintain employee information efficiently.
                        </p>

                    </div>

                    <div className="about-info-card">

                        <div className="about-card-icon">
                            <FaEye />
                        </div>

                        <h2>Our Vision</h2>

                        <p>
                            To make employee management more organized,
                            transparent and accessible for businesses of
                            all sizes.
                        </p>

                    </div>

                </div>

                {/* Features */}

                <div className="about-features">

                    <div className="about-section-title">

                        <h2>
                            What Our System Provides
                        </h2>

                        <p>
                            Important features designed for everyday
                            employee management.
                        </p>

                    </div>

                    <div className="feature-grid">

                        <div className="feature-card">

                            <div className="feature-icon">
                                <FaUsers />
                            </div>

                            <h3>
                                Employee Management
                            </h3>

                            <p>
                                Add, view, update and manage employee
                                information from one place.
                            </p>

                        </div>

                        <div className="feature-card">

                            <div className="feature-icon">
                                <FaHandshake />
                            </div>

                            <h3>
                                Department Management
                            </h3>

                            <p>
                                Organize employees according to their
                                respective departments.
                            </p>

                        </div>

                        <div className="feature-card">

                            <div className="feature-icon">
                                <FaChartLine />
                            </div>

                            <h3>
                                Employee Status
                            </h3>

                            <p>
                                Monitor active, inactive and leave status
                                of employees.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Technology */}

                <div className="technology-section">

                    <div className="about-section-title">

                        <h2>
                            Technologies Used
                        </h2>

                        <p>
                            This project is built using modern web
                            development technologies.
                        </p>

                    </div>

                    <div className="technology-list">

                        <span>React</span>
                        <span>JavaScript</span>
                        <span>React Router</span>
                        <span>CSS</span>
                        <span>React Icons</span>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default About;