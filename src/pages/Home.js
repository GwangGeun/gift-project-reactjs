// mobx
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

const Home = inject("accountStore")(
  observer((props) => {
    return (
      <>
        <Link to="/signIn">SignIn</Link>
        <h3>hello home : {props.accountStore.user.email}</h3>
      </>
    );
  })
);

export default Home;
