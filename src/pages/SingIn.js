import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      당근몬스터 {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [init, setInit] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (init) {
      setInit(false);
    }
    if (!passwordValidation(password) && !emailValidation(email)) {
      console.log("success");
    } else {
      console.log("fail");
    }
  };

  // 1. return : false -> 유효한 email
  // 2. return : true -> 유효하지 않은 email
  const emailValidation = (value) => {
    const regexResult = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/.test(
      value
    );

    if (!regexResult) {
      return true;
    }
    return false;
  };

  // 1. return : false -> 유효한 password
  // 2. return : true -> 유효하지 않은 password
  const passwordValidation = (value) => {
    // 영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상씩 포함된 8자 ~ 20자
    const regexResult = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,20}/.test(
      value
    );

    if (value.length < 8 || value.length > 20 || !regexResult) {
      return true;
    }
    return false;
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            value={email}
            error={emailValidation(email) && !init}
            onChange={({ target: { value } }) => setEmail(value)}
            helperText={
              emailValidation(email) && !init
                ? "이메일을 정확하게 입력해주세요"
                : ""
            }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            error={passwordValidation(password) && !init}
            onChange={({ target: { value } }) => setPassword(value)}
            helperText={
              passwordValidation(password) && !init
                ? "비밀번호를 정확하게 입력해주세요"
                : ""
            }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
  );
}
