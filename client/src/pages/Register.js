import { Box, Typography, TextField, Button } from "@mui/material";

const Register = () => {
    return (
        <>
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
                <Typography variant="h4">Register</Typography>
                <TextField placeholder="Name" fullWidth margin="normal" />
                <TextField placeholder="Email" fullWidth margin="normal" />
                <TextField placeholder="Password" type="password" fullWidth margin="normal" />
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>Submit</Button>
                <Button sx={{ mt: 2 }}>Already Registered? Please Login</Button>
            </Box>
        </>
    );
};

export default Register;