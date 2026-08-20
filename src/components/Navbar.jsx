import { NavLink } from "react-router-dom";
import { FaUsers, FaHome, FaBuilding, FaChartPie, FaInfoCircle } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <NavLink to="/" className="navbar-logo">
                    🌿 EMS
                </NavLink>

                {/* Navigation Links */}
                <div className="navbar-links">

                    <NavLink to="/" className="nav-link">
                        <FaHome />
                        Home
                    </NavLink>

                    <NavLink to="/employees" className="nav-link">
                        <FaUsers />
                        Employees
                    </NavLink>

                    <NavLink to="/departments" className="nav-link">
                        <FaBuilding />
                        Departments
                    </NavLink>

                    <NavLink to="/status" className="nav-link">
                        <FaChartPie />
                        Status
                    </NavLink>

                    <NavLink to="/about" className="nav-link">
                        <FaInfoCircle />
                        About
                    </NavLink>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;