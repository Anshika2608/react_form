import React, { useState } from "react";
import Name from "./components/Name";

function PasswordInput(props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="showbutton1">
      <input
        type={passwordVisible ? "text" : "password"}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <button onClick={togglePasswordVisibility} className="showButton">
        {passwordVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}
function App() {
  const initialErrors = {
    name: "",
    email: "",
    gender: "",
    studentNo: "",
    rollNo: "",
    username: "",
    password: "",
    confirmpassword: "",
    contact: "",
  };

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
    contact: "",
  });

  const [errors, setErrors] = useState(initialErrors);

  const nameRegex = /^[A-Za-z\s]+$/;
  const cityRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const studentNoRegex = /^\d{7}$/;
  const rollNoRegex = /^\d{13}$/;
  const usernameRegex = /^[A-Za-z0-9\s]+$/;
  const contactRegex = /^\d{10}$/;

  const validate = (inputName, value) => {
    switch (inputName) {
      case "name":
        if (value.length > 20) {
          return "Name must not exceed 20 characters.";
        }
        if (!nameRegex.test(value)) {
          return "Name can only have alphabets and space.";
        }
        if (nameRegex.test(value)) {
          return true;
        }

        break;
      case "city":
        if (value.length > 20) {
          return "Name must not exceed 20 characters.";
        }
        if (!cityRegex.test(value)) {
          return "Name can only have alphabets and space.";
        }
        if (cityRegex.test(value)) {
          return true;
        }

        break;

      case "email":
        if (!emailRegex.test(value)) {
          return "Invalid email format.";
        } else {
          return true;
        }
        break;

      case "studentNo":
        if (!studentNoRegex.test(value)) {
          return "Student number must contain 7 digits.";
        }
        if (studentNoRegex.test(value)) {
          return true;
        }
        break;

      case "rollNo":
        if (!rollNoRegex.test(value)) {
          return "Roll number must contain 13 digits.";
        }
        if (rollNoRegex.test(value)) {
          return true;
        }
        break;

      case "username":
        if (value.length > 20) {
          return "Username must not exceed 20 characters.";
        }
        if (!usernameRegex.test(value)) {
          return "Invalid username format.";
        }
        if (usernameRegex.test(value)) {
          return true;
        }
        break;

      case "contact":
        if (!contactRegex.test(value)) {
          return "Contact number must contain 10 digits.";
        }
        if (contactRegex.test(value)) {
          return true;
        }
        break;

      case "password":
        const minMaxLength = /^[\s\S]{8,32}$/;
        const upper = /[A-Z]/;
        const lower = /[a-z]/;
        const number = /[0-9]/;
        const special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

        if (
          minMaxLength.test(value) &&
          upper.test(value) &&
          lower.test(value) &&
          number.test(value) &&
          special.test(value)
        ) {
          return true;
        } else {
          const errorMsg = [];
          if (!minMaxLength.test(value)) errorMsg.push("at least 8 characters");
          if (!upper.test(value)) errorMsg.push("an uppercase letter");
          if (!lower.test(value)) errorMsg.push("a lowercase letter"); // Fixed typo here
          if (!number.test(value)) errorMsg.push("a digit");
          if (!special.test(value)) errorMsg.push("a special character");

          return `Password must contain ${errorMsg.join(", ")}.`;
        }

      case "confirmpassword":
        if (value !== formData.password) {
          return "Passwords do not match";
        }
        if (value == formData.password) {
          return true;
        }
        break;

      default:
        return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    const validationResult = validate(name, value);
   
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationResult !== true ? validationResult : "",
    }));
  };

  const validateForm = () => {
    return (
      Object.values(errors).every((error) => error === "") &&
      formData.password === formData.confirmpassword
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm())
    { console.log("Form data:", formData);}
  };
  return (
    <div className="container">
      <h1>REGISTRATION FORM</h1>
      <p>Please fill out this form with the required information</p>
      <form onSubmit={handleSubmit}>
        <Name
          text="Enter Your Name : "
          placeholder="Must contain only alphabets"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error-message">{errors.name}</div>}

        <Name
          placeholder="Ex: xyz@abc.in"
          type="email"
          name="email"
          text="Enter Your email : "
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error-message">{errors.email}</div>}

        <p>Select your Gender</p>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleChange}
            />{" "}
            Other
          </label>
        </div>

        <Name
          placeholder="Must contain 7 digits"
          type="number"
          name="studentNo"
          text="Enter Your student number : "
          value={formData.studentNo}
          onChange={handleChange}
        />
        {errors.studentNo && (
          <div className="error-message">{errors.studentNo}</div>
        )}

        <Name
          placeholder="Must contain 13 digits"
          type="number"
          name="rollNo"
          text="Enter Your roll number : "
          value={formData.rollNo}
          onChange={handleChange}
        />
        {errors.rollNo && <div className="error-message">{errors.rollNo}</div>}

        <Name
          text="Enter Contact number : "
          placeholder="Must contain 10 digits"
          type="number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        {errors.contact && (
          <div className="error-message">{errors.contact}</div>
        )}

        <Name
          placeholder="Enter Your City"
          type="text"
          name="city"
          text="Enter Your City : "
          value={formData.city}
          onChange={handleChange}
        />

        <Name
          placeholder="Enter Your UserName"
          type="text"
          name="username"
          text="Enter Your UserName : "
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && (
          <div className="error-message">{errors.username}</div>
        )}

        <div>
          <label>
            <span>Enter Password :</span>

            <PasswordInput
              placeholder="Must be at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character."
              type="password"
              name="password"
              text="Enter Password : "
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        {errors.password && (
          <div className="error-message">{errors.password}</div>
        )}
        <div>
          <label>
            <span>Confirm Password :</span>
            <PasswordInput
              placeholder="Confirm password"
              type="password"
              name="confirmpassword"
              text="Confirm Password: "
              value={formData.confirmpassword}
              onChange={handleChange}
            />
          </label>
        </div>
        {errors.confirmpassword && (
          <div className="error-message">{errors.confirmpassword}</div>
        )}

        <div className="button">
          <button type="submit" disabled={!validateForm()}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
