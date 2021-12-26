import React from "react";
import { Button } from "react-bootstrap";

export default function FormButton(props) {
  return (
    <Button
      variant={props.variant}
      size={props.size}
      className="m-1"
      type={props.type}
    >
      {props.children}
    </Button>
  );
}
