import React, { useState, useEffect } from "react";

// router
import { useHistory } from "react-router-dom";

// compomnent
import Loading from "../components/Loading";

// mobx
import { inject, observer } from "mobx-react";

// material ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// utils
import { saveToken, getTokenPayload } from "../utils/LocalStorage";

// api
import { loginApi } from "../api/pages/SignInApi";

// additional component
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      당근몬스터 {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// css
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  loading: {
    backgroundColor: "red",
  },
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

// page
const SignIn = inject(
  "accountStore",
  "componentStore"
)(
  observer((props) => {
    const history = useHistory();
    const classes = useStyles();

    const [init, setInit] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    /*
     *  mount 시에, 사용자 인증 여부 확인 후 필요한 로직 처리
     */
    useEffect(() => {
      // mobx & localStorage 에 유저 정보가 정상적으로 있으면 -> home 으로 이동
      if (props.accountStore.auth && getTokenPayload() !== "error") {
        history.push("/");
      }
    }, [history, props.accountStore.auth]);

    /**
     *  이하 function
     */
    const login = async () => {
      setInterval(console.log("hello"), 5000);
      // props.componentStore.setLoading(true, "hello");
      if (init) {
        setInit(false);
      }
      if (!passwordValidation(password) && !emailValidation(email)) {
        props.componentStore.setLoading(true, "로그인 중...");
        const res = await loginApi({
          email: "test@gmail.com",
          password: "123abc!!",
        });

        if (res === "401") {
          return;
        } else {
        }
        props.componentStore.setLoading(false, "");
        saveToken(res.data.token);
        // mobx > 사용자 인증여부 셋팅
        props.accountStore.login();
        history.push("/");
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
        {/* <Backdrop
          className={classes.backdrop}
          open={props.componentStore.loadingStatus}
        >
          <Box position="relative" display="inline-flex">
            <CircularProgress size={100} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="body2" component="div">
                {props.componentStore.loadingContents}
              </Typography>
            </Box>
          </Box>
        </Backdrop> */}
        <Loading />
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
  })
);

export default SignIn;
