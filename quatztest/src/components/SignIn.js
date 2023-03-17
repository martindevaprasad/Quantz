import React, { useState } from "react";
import ticket from "../Assets/toppng 1.png";
import Box from "@mui/material/Box";
import axios from "axios";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [requestToken, setrequestToken] = React.useState();

  const [redata, setRedata] = React.useState();

  const [user, setuser] = React.useState({
    username: "",
    password: ""
  });
  function loginhandler() {
    axios
      .post(
        "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=dceb34c1fc8eac0fbef020eebf55eaea",
        // {
        //   headers: {
        //     "content-type": "text/json"
        //   }
        // },
        {
          username: user.username,
          password: user.password,
          request_token: requestToken.request_token
        }
      )
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("success", res.data.success);
          localStorage.setItem("token", res.data.request_token);
          // setuser(res.data);
          setRedata(res.data);
          navigate("/homepage")
     
        }
      })
      .catch((err) => console.log(err.response.data.status_message));
  }

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/authentication/token/new?api_key=dceb34c1fc8eac0fbef020eebf55eaea"
        // {
        //   headers: {
        //     "content-type": "text/json"
        //   }
        // },
      )
      .then((res) => setrequestToken(res.data));
  }, []);

  return (
    <>
     <div>
        <nav style={{ background: "#263E60" }} className="navbar sticky-top ">
          <a className="navbar-brand" href="#">
            <img src={ticket} style={{ width: "40px" }} alt="" />
          </a>
        
        </nav>
      </div>
      <Container component="main" sx={{ width: "50%" }}>
        <Box
          className="p-4"
          sx={{
            marginTop: 14,
            borderRadius: "14px",
            display: "flex",
            background: "#fff",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div style={{ alignSelf: "flex-start" }}>
            <Typography
              style={{ fontSize: "42px" }}
              className="mb-3"
              component="h1"
              variant="h5"
            >
              Sign up
            </Typography>
            <p>Sign in to your self service portal</p>
          </div>

          <Grid className="mt-2" container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Username"
                name="username"
                autoComplete="Username"
                onChange={(e) => setuser({ ...user, username: e.target.value })}
                // value={user.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => setuser({ ...user, password: e.target.value })}
                // value={user.password}
              />
            </Grid>
          </Grid>
          <Button
            onClick={loginhandler}
            disableRipple
            disableFocusRipple
            fullWidth
            variant="contained"
            sx={{
              p: 2,
              mt: 3,
              mb: 2,
              background: "#FF7D65",
              fontSize: "16px",
              "&:hover": { background: "#FF7D65" }
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </>
  );
};
