import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePage from "../components/layout/BasePage";
import { Button, Container, Row, Col } from "reactstrap";

const Catalog = props => {
  return (
    <BaseLayout {...props.auth}>
      <BasePage title="Catalog page" />
    </BaseLayout>
  );
};

export default Catalog;
