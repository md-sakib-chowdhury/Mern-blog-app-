// import React, { useState } from "react";
// import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux"

// const Header = () => {

//     // globalstate
//     const isLogin = useSelector(state => state.auth.isLogin);
//     console.log(isLogin);

//     // state
//     const [value, setValue] = useState();
//     return (
//         <>
//             <AppBar position="sticky">
//                 <Toolbar>
//                     <Typography variant="h4">My Blog APP</Typography>
//                     <Box display="flex" marginLeft="auto">
//                         {!isLogin && (
//                             <>
//                                 <Button
//                                     sx={{ margin: 1, color: "white" }}
//                                     LinkComponent={Link}
//                                     to="/login"
//                                 >
//                                     Login
//                                 </Button>
//                                 <Button
//                                     sx={{ margin: 1, color: "white" }}
//                                     LinkComponent={Link}
//                                     to="/register"
//                                 >
//                                     Register
//                                 </Button>
//                             </>
//                         )}
//                         <Button sx={{ margin: 1, color: "white" }}>Logout</Button>
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//         </>
//     );
// };
// export default Header;
// const Header = () => {
//     const isLogin = useSelector((state) => state.auth.isLogin);
//     const [value, setValue] = useState(0);

//     return (
//         <AppBar position="sticky">
//             <Toolbar>
//                 <Typography variant="h4">My Blog APP</Typography>

//                 {isLogin && (
//                     <Box sx={{ marginLeft: "auto", marginRight: "auto" }}>
//                         <Tabs
//                             textColor="inherit"
//                             value={value}
//                             onChange={(e, val) => setValue(val)}
//                         >
//                             <Tab label="Blogs" component={Link} to="/blogs" />
//                             <Tab label="My Blogs" component={Link} to="/my-blogs" />
//                         </Tabs>
//                     </Box>
//                 )}

//                 <Box sx={{ marginLeft: "auto" }}>
//                     {!isLogin ? (
//                         <>
//                             <Button sx={{ margin: 1, color: "white" }} component={Link} to="/login">
//                                 Login
//                             </Button>
//                             <Button sx={{ margin: 1, color: "white" }} component={Link} to="/register">
//                                 Register
//                             </Button>
//                         </>
//                     ) : (
//                         <Button sx={{ margin: 1, color: "white" }}>
//                             Logout
//                         </Button>
//                     )}
//                 </Box>
//             </Toolbar>
//         </AppBar>
//     );
// };
// export default Header;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// // import { useSelector } from "react-redux";  // সেমিকোলন যোগ করুন

// const Header = () => {
//     // globalstate
//     const isLogin = useSelector(state => state.isLogin);
//     const dispatch = dispatch();
//     const navigate = useNavigate();
//     // console.log(isLogin);

//     // state
//     const [value, setValue] = useState(0);  // 0 ডিফল্ট ভ্যালু দিন
//     // logout
//     const handleLogout = () => {
//         try {
//             dispatch(authActions.logout());
//             alert('Logout Successfully');
//             navigate('/login');
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     return (
//         <>
//             <AppBar position="sticky">
//                 <Toolbar>
//                     <Typography variant="h4">My Blog APP</Typography>

//                     {isLogin && (
//                         <Box display="flex" marginLeft="auto" marginRight="auto">
//                             <Tabs
//                                 textColor="inherit"
//                                 value={value}
//                                 onChange={(e, val) => setValue(val)}
//                             >
//                                 <Tab
//                                     label="Blogs"
//                                     component={Link}  // LinkComponent → component
//                                     to="/blogs"
//                                 />
//                                 <Tab
//                                     label="My Blogs"
//                                     component={Link}  // LinkComponent → component
//                                     to="/my-blogs"
//                                 />
//                             </Tabs>
//                         </Box>
//                     )}

//                     <Box display="flex" marginLeft="auto">
//                         {!isLogin && (
//                             <>
//                                 <Button
//                                     sx={{ margin: 1, color: "white" }}
//                                     component={Link}  // LinkComponent → component
//                                     to="/login"
//                                 >
//                                     Login
//                                 </Button>
//                                 <Button
//                                     sx={{ margin: 1, color: "white" }}
//                                     component={Link}  // LinkComponent → component
//                                     to="/register"
//                                 >
//                                     Register
//                                 </Button>
//                             </>
//                         )}

//                         {isLogin && (
//                             <Button onClick={handleLogout}
//                                 sx={{ margin: 1, color: "white" }}>  Logout
//                             </Button>
//                         )}
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//         </>
//     );
// };

// export default Header;  // export যোগ করুন
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";  // এই import টা যোগ করুন

const Header = () => {
    // globalstate
    const isLogin = useSelector(state => state.isLogin);
    const dispatch = useDispatch();  // dispatch() → useDispatch() ঠিক করুন
    const navigate = useNavigate();

    // state
    const [value, setValue] = useState(0);

    // logout
    const handleLogout = () => {
        try {
            dispatch(authActions.logout());
            alert('Logout Successfully');
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h4">My Blog APP</Typography>

                    {isLogin && (
                        <Box display="flex" marginLeft="auto" marginRight="auto">
                            <Tabs
                                textColor="inherit"
                                value={value}
                                onChange={(e, val) => setValue(val)}
                            >
                                <Tab
                                    label="Blogs"
                                    component={Link}
                                    to="/blogs"
                                />
                                <Tab
                                    label="My Blogs"
                                    component={Link}
                                    to="/my-blogs"
                                />
                            </Tabs>
                        </Box>
                    )}

                    <Box display="flex" marginLeft="auto">
                        {!isLogin && (
                            <>
                                <Button
                                    sx={{ margin: 1, color: "white" }}
                                    component={Link}
                                    to="/login"
                                >
                                    Login
                                </Button>
                                <Button
                                    sx={{ margin: 1, color: "white" }}
                                    component={Link}
                                    to="/register"
                                >
                                    Register
                                </Button>
                            </>
                        )}

                        {isLogin && (
                            <Button
                                onClick={handleLogout}
                                sx={{ margin: 1, color: "white" }}
                            >
                                Logout
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;