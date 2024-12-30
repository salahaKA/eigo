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
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErr("Please fill in all fields.");
      return;
    }
    alert(`Logged in as ${email}`);
    setErr("");
    navigate("/");
  };

  return (
    <Box className="login-container">
      <Card className="login-card">
        <CardContent>
          <div className="logo">
            <img
              src={`${process.env.PUBLIC_URL}/eigo.jpg`}
              alt="Eigo"
              className="logo-img"
            />
            {/* <Typography variant="h6" align="center" className="logo-text">
              Eigo
            </Typography> */}
          </div>
          {err && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {err}
            </Alert>
          )}
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Typography align="right" className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </Typography>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="login-button"
            >
              Login
            </Button>
          </form>
          <Typography variant="body2" align="center" className="sign-up-link">
          Don't have an account?{" "} <Link to="/register">Sign Up</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;

// import React, { useState } from "react";
// import {
//   Alert,
//   Box,
//   Button,
//   Card,
//   CardContent,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState("");
//   const navigate= useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setErr("Please fill in all fields.");
//       return;
//     }
//     alert(`logged in as ${email}`);
//     setErr("");

//     navigate("/");
//   };
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="100vh"
//       bgcolor="Background.default"
//     >
//       <Card elevation={3} sx={{ width: 350, padding: 2 }}>
//         <CardContent>
//           <Typography variant="h5" align="center" gutterBottom>
//             Login
//           </Typography>
//           {err && (
//             <Alert severity="error" sx={{ mb: 2 }}>
//               {err}
//             </Alert>
//           )}

//           <form onSubmit={handleLogin}>
//             <TextField
//               fullWidth
//               label="Email"
//               variant="outlined"
//               margin="normal"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             ></TextField>
//             <TextField
//               fullWidth
//               label="Password"
//               variant="outlined"
//               margin="normal"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             ></TextField>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ mt: 2 }}
//             >
//               Login
//             </Button>
//           </form>
//           <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//             Don't have an account?{" "}
//             <Link to="/register" style={{ textDecoration: "none", color: "#1976d2" }}>
//               Sign Up
//             </Link>
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

// export default Login;
