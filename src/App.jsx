import { useState } from "react";
import "./App.css";
import Name from "./components/Name";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmpassword: "",
    email: "",
    gender: "",
    studentNo: "",
    rollNo: "",
    city: "",
    username: "",
    // copassword:""
  });

  const [errors, setErrors] = useState({});
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setPasswordMatch(true);
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation using regular expressions
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const studentNoRegex = /^\d{7}$/;
    const rollNoRegex = /^\d{13}$/;
    const usernameRegex = /^[A-Za-z0-9\s]+$/;
    const contactRegex = /^\d{10}$/;

    if (!formData.name.match(nameRegex)) {
      newErrors.name = "Name is invalid";
    }
    if (!formData.email.match(emailRegex)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password.match(passwordRegex)) {
      newErrors.password = "Password is invalid.It must contain at least 6 characters, including at least one digit, one lowercase letter, and one uppercase letter.";
    }
    if (!formData.studentNo.match(studentNoRegex)) {
      newErrors.studentNo = "Student number is invalid";
    }
    if (!formData.rollNo.match(rollNoRegex)) {
      newErrors.rollNo = "Roll number is invalid";
    }
    if (!formData.username.match(usernameRegex)) {
      newErrors.username = "UserName is invalid";
    }
    if (!formData.contact.match(contactRegex)) {
      newErrors.contact = "Contact number is invalid";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (formData.password === formData.confirmpassword) {
        // Submit the form or perform other actions here
        console.log("Form data:", formData);
      } else {
        setPasswordMatch(false);
        // Passwords do not match, set an error message
        // setErrors({ ...errors, password: "Passwords do not match" });
      }
    }
    // } else {
    //   alert("Passwords do not match");
    // }
  };

  return (
    <div>
      <h1>REGISTRATION FORM</h1>
      <p>Please fill out this form with the required information</p>
      <form onSubmit={handleSubmit}>
        <Name
          text="Enter Your Name : "
          placeholder="Must contains only alphabets"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <div className="em">
          {errors.name && <span className="em1">! {errors.name}</span>}
        </div>
        {/* <Gender /><br />
        <Dob /><br /> */}
        <Name
          placeholder="Ex: xyz@abc.in  "
          type="email"
          name="email"
          text="Enter Your email : "
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <div className="em">
          {errors.email && <span className="em1">! {errors.email}</span>}
        </div>
        <p> Select your Gender</p>
        <Name
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          text="male"
          onChange={handleChange}
        />
        <br />
        <Name
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          text="female"
          onChange={handleChange}
        />
        <br />
        <Name
          type="radio"
          name="gender"
          value="other"
          checked={formData.gender === "other"}
          text="other"
          onChange={handleChange}
        />
        <br />
        <Name
          placeholder="must contain 7 digits"
          type="number"
          name="studentNo"
          text="Enter Your student number : "
          value={formData.studentNo}
          onChange={handleChange}
        />
        <br />
        <div className="em">
          {errors.studentNo && (
            <span className="em1">! {errors.studentNo}</span>
          )}
        </div>
        <Name
          placeholder="must contain 13 digits"
          type="number"
          name="rollNo"
          text="Enter Your roll number : "
          value={formData.rollNo}
          onChange={handleChange}
        />
        <br />
        <div className="em">
          {errors.rollNo && <span className="em1">! {errors.rollNo}</span>}
        </div>
        <Name
          text="Enter Contact number : "
          placeholder="Must contains 10 digits"
          type="number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <br />
        <div className="em">
          {errors.contact && <span className="em1">! {errors.contact}</span>}
        </div>
        <Name
          placeholder="Enter Your City"
          type="text"
          name="city"
          text="Enter Your City : "
          value={formData.city}
          onChange={handleChange}
        />
        <br />
        <Name
          placeholder="Enter Your UserName"
          type="text"
          name="username"
          text="Enter Your UserName : "
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <div className="em">
          {errors.username && <span className="em1">! {errors.username}</span>}
        </div>
        <Name
          placeholder="must be of length 7"
          type="password"
          name="password"
          text="Enter Password : "
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <div className="em">
          {errors.password && <span className="em1">! {errors.password}</span>}
        </div>
        <br />
        <Name
          placeholder="Confirm password"
          type="password"
          name="confirmpassword"
          text="Confirm Password: "
          value={formData.confirmpassword}
          onChange={handleChange}
        />
        <br />
        {passwordMatch === false && (
          <div className="em">
            <span className="em1">Passwords do not match</span>
          </div>
        )}
        {/* {errors.password && <span>{errors.password}</span>} */}
        {/* {errors.password && <span className="em1">{errors.password}</span>} */}
        {/* if (formData.password !== formData.confirmpassword){
          <span className="em1">{errors.password}</span>
         } */}

        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
