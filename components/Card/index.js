import React from "react";
import { Card } from "react-bootstrap";

export default function FormCard(props) {
  return (
    <Card bg={props.bg} border={props.border}>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
}
