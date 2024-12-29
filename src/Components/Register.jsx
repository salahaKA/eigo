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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="Background.default"
    >
      <Card elevation={3} sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Register
          </Typography>
          {err && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {err}
            </Alert>
          )}

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
            ></TextField>
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
            ></TextField>
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
            ></TextField>
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
            ></TextField>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{mt:2}}>Register</Button>

          </form>
          <Typography variant="body2" align="center" sx={{mt:2}}>Already have an account?{""}
            <Link to="/login" style={{textDecoration:"none", color:"#1976d2"}}>Login</Link>
            
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Register;
