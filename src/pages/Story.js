import React, { useEffect } from "react";
// mobx
import { inject, observer } from "mobx-react";
// material ui
import Container from "@material-ui/core/Container";
// component
import Header from "../components/Header";

const Story = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
        <main>
          <h3>hello bookmark </h3>
        </main>
      </Container>
    </div>
  );
};

export default Story;
