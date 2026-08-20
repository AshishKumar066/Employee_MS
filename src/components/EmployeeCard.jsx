import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

function EmployeeCard({ employee, onDelete }) {
    return (
        <div className="employee-card">

            {/* Employee Header */}
            <div className="employee-card-header">

                <div className="employee-card-avatar">
                    {employee.name.charAt(0)}
                </div>

                <div>
                    <h3>{employee.name}</h3>
                    <p>{employee.employeeId}</p>
                </div>
            </div>

            {/* Employee Information */}
            <div className="employee-card-info">

                <div>
                    <span>Department</span>
                    <strong>{employee.department}</strong>
                </div>

                <div>
                    <span>Position</span>
                    <strong>{employee.position}</strong>
                </div>

                <div>
                    <span>Email</span>
                    <strong>{employee.email}</strong>
                </div>

                <div>
                    <span>Status</span>

                    {employee.status === "Active" ? (
                        <span className="status-active">Active</span>
                    ) : employee.status === "On Leave" ? (
                        <span className="status-leave">On Leave</span>
                    ) : (
                        <span className="status-inactive">Inactive</span>
                    )}
                </div>

            </div>

            {/* Actions */}
            <div className="employee-card-actions">

                <Link
                    to={`/employees/${employee.id}`}
                    className="action-btn view-btn"
                >
                    <FaEye />
                    View
                </Link>

                <Link
                    to={`/employees/edit/${employee.id}`}
                    className="action-btn edit-btn"
                >
                    <FaEdit />
                    Edit
                </Link>

                <button
                    className="action-btn delete-btn"
                    onClick={() => onDelete(employee.id)}
                >
                    <FaTrash />
                    Delete
                </button>

            </div>

        </div>
    );
}
export default EmployeeCard;