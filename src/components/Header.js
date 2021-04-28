import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// mobx
import { inject, observer } from "mobx-react";

// router
import { useHistory, Link, NavLink } from "react-router-dom";

const sections = [
  { title: "홈", url: "/" },
  { title: "추억", url: "/story" },
  { title: "북마크", url: "/bookmark" },
];

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    overflowX: "auto",
  },
  toolbarLink: {
    marginRight: theme.spacing(3),
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration: "none",
    color: "black",
  },
}));

const Header = inject("accountStore")(
  observer((props) => {
    const classes = useStyles();
    const history = useHistory();
    const activeStyle = {
      color: "#648dae",
      fontSize: "1.2rem",
      fontWeight: "bold",
    };

    /**
     * 이하 로그아웃
     */
    const logOut = () => {
      props.accountStore.logout();
      history.push("/signIn");
      return;
    };

    return (
      <>
        <Toolbar className={classes.toolbar}>
          <Button variant="outlined" size="small">
            내 정보
          </Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Blog
          </Typography>
          <Button variant="outlined" size="small" onClick={logOut}>
            로그아웃
          </Button>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {sections.map((section) => (
            <NavLink
              exact
              key={section.title}
              variant="body2"
              to={section.url}
              className={classes.toolbarLink}
              activeStyle={activeStyle}
            >
              {section.title}
            </NavLink>
          ))}
        </Toolbar>
      </>
    );
  })
);

export default Header;
