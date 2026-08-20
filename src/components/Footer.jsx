function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h3>🌿 EMS</h3>
                    <p>
                        Employee Management System
                    </p>
                </div>

                <div className="footer-info">
                    <p>
                        © {new Date().getFullYear()} Employee Management System
                    </p>
                    <p>
                        Built with React
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;