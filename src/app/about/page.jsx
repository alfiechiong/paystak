import React from "react";
// import Header from "../components/common/Headers/main/MainHeader";
// import Footer from "../components/common/Footers/main/MainFooter";
// import "./about.scss";
const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="about" style={{ margin: "auto", maxWidth: "80%" }}>
        <h1 style={{ textAlign: "left", marginBottom: "20px" }}>About Us</h1>
        <p style={{ textAlign: "left" }}>
          online payroll system named Paystack. It is designed to simplify and
          automate the process of managing employee salaries, tax deductions,
          and other payroll-related tasks. With Paystack, businesses can easily
          calculate and distribute salaries, generate payslips, and handle tax
          filings. It provides a user-friendly interface for both employers and
          employees to access and manage their payroll information. Paystack
          also offers features such as direct deposit, automatic tax
          calculations, and integration with accounting software. It ensures
          accuracy, efficiency, and compliance with payroll regulations, making
          it an essential tool for businesses of all sizes.
        </p>

        <button
          style={{
            background: "linear-gradient(to right, #00c6ff, #0072ff)",
            color: "white",
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
