import {
    FaUsers,
    FaUserCheck,
    FaUserClock,
    FaUserTimes,
    FaChartPie,
} from "react-icons/fa";

function Status() {
    const statusData = [
        {
            title: "Total Employees",
            value: 52,
            icon: <FaUsers />,
            className: "status-total",
        },
        {
            title: "Active",
            value: 45,
            icon: <FaUserCheck />,
            className: "status-active-card",
        },
        {
            title: "On Leave",
            value: 4,
            icon: <FaUserClock />,
            className: "status-leave-card",
        },
        {
            title: "Inactive",
            value: 3,
            icon: <FaUserTimes />,
            className: "status-inactive-card",
        },
    ];

    const statusBreakdown = [
        {
            name: "Active",
            count: 45,
            percentage: 87,
            className: "progress-active",
        },
        {
            name: "On Leave",
            count: 4,
            percentage: 8,
            className: "progress-leave",
        },
        {
            name: "Inactive",
            count: 3,
            percentage: 5,
            className: "progress-inactive",
        },
    ];

    return (
        <main className="page">

            <div className="container">

                {/* Page Header */}

                <div className="status-page-header">
                    <div>
                        <h1 className="page-title">
                            Employee Status
                        </h1>

                        <p className="page-subtitle">
                            Overview of employee status across the organization
                        </p>
                    </div>
                </div>

                {/* Status Cards */}

                <div className="status-cards">

                    {statusData.map((status) => (
                        <div
                            className={`status-card ${status.className}`}
                            key={status.title}
                        >
                            <div className="status-card-icon">
                                {status.icon}
                            </div>

                            <div>
                                <p>{status.title}</p>
                                <h2>{status.value}</h2>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Status Overview */}

                <div className="status-content-grid">

                    {/* Breakdown */}

                    <div className="status-panel">

                        <div className="status-panel-header">
                            <div>
                                <h2>Status Breakdown</h2>
                                <p>
                                    Current employee distribution
                                </p>
                            </div>

                            <FaChartPie />
                        </div>

                        <div className="status-breakdown">

                            {statusBreakdown.map((item) => (
                                <div
                                    className="breakdown-item"
                                    key={item.name}
                                >

                                    <div className="breakdown-info">

                                        <span>{item.name}</span>

                                        <strong>
                                            {item.count} Employees
                                        </strong>

                                    </div>

                                    <div className="progress-bar">

                                        <div
                                            className={`progress-fill ${item.className}`}
                                            style={{
                                                width: `${item.percentage}%`,
                                            }}
                                        ></div>

                                    </div>

                                    <span className="percentage">
                                        {item.percentage}%
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Quick Information */}

                    <div className="status-panel">

                        <div className="status-panel-header">
                            <div>
                                <h2>Workforce Summary</h2>
                                <p>
                                    Quick overview
                                </p>
                            </div>

                            <FaUsers />
                        </div>

                        <div className="workforce-summary">

                            <div className="summary-row">
                                <span>Working Employees</span>
                                <strong>45</strong>
                            </div>

                            <div className="summary-row">
                                <span>Employees on Leave</span>
                                <strong>4</strong>
                            </div>

                            <div className="summary-row">
                                <span>Inactive Employees</span>
                                <strong>3</strong>
                            </div>

                            <div className="summary-row total-row">
                                <span>Total Employees</span>
                                <strong>52</strong>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Status Information */}

                <div className="status-info-box">

                    <h2>About Employee Status</h2>

                    <div className="status-info-grid">

                        <div>
                            <span className="status-active">
                                Active
                            </span>

                            <p>
                                Employees currently working in the organization.
                            </p>
                        </div>

                        <div>
                            <span className="status-leave">
                                On Leave
                            </span>

                            <p>
                                Employees who are temporarily away from work.
                            </p>
                        </div>

                        <div>
                            <span className="status-inactive">
                                Inactive
                            </span>

                            <p>
                                Employees who are currently not active in the organization.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default Status;