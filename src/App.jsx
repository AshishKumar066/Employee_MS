import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import Departments from "./pages/Departments";
import Status from "./pages/Status";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/employees/edit/:id" element={<EditEmployee />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/status" element={<Status />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;