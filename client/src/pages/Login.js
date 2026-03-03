// import React from "react";
// import { Box, Typography, TextField, Button } from "@mui/material";

// const Login = () => {
//     return (
//         <>
//             <h1>Login Page</h1>
//         </>
//     );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from 'axios'
const Register = () => {
    const navigate = useNavigate();
    // state
    const [inputs, setInputs] = useState({
        
        email: '',
        password: ''

    });
    //handle input change
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    // fromhandller
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/user/login", {
              
                email: inputs.email,
                password: inputs.password,
            });
            if (data.success) {
                alert("User login Successfully");
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                    maxWidth={450}
                    display="flex"
                    flexDirection={"column"}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    boxShadow="10px 10px 20px #ccc"
                    padding={3}
                    borderRadius={15}
                >
                    <Typography variant="h4" sx={{ textTransform: "uppercase " }} padding={3} textAlign="center">
                        Login
                    </Typography>

                  

                    <TextField
                        placeholder="email"
                        value={inputs.email}
                        name="email"
                        margin="normal"
                        type={"email"}
                        required
                        onChange={handleChange}
                    />

                    <TextField
                        placeholder="psssword"
                        value={inputs.password}
                        name="password"
                        margin="normal"
                        type={"password"}
                        required
                        onChange={handleChange}
                    />
                    {/* <Button variant="contained" fullWidth sx={{ mt: 2 }}>Submit</Button>
                <Button sx={{ mt: 2 }}>Already Registered? Please Login</Button> */}
                    <Button
                        type="submit"
                        sx={{ borderRadius: 3, marginTop: 3 }}
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>

                    <Button
                        onClick={() => navigate("/login")}
                        sx={{ borderRadius: 3, marginTop: 3 }}
                    >
                        Already Registered? Please Login
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default Register;