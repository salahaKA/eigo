import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      setErr("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setErr("Password do not match.");
      return;
    }
    setErr("");
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <Box className="register-container">
      <Card className="register-card">
        <CardContent>
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/eigo.jpg`} alt="Eigo" className="logo-img" />
          </div>
          {err && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {err}
            </Alert>
          )}
          {/* <Typography variant="h5" align="center" gutterBottom>
            Register
          </Typography> */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              margin="normal"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              variant="outlined"
              margin="normal"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              variant="outlined"
              margin="normal"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" fullWidth className="register-button">
              Register
            </Button>
          </form>
          <Typography variant="body2" align="center" className="sign-up-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Register;
