import React from "react";

export default function Text(props) {
  return (
    <div>
      <div className="mb-2">
        <label>{props.label}</label>
        <input autoComplete="off" />
      </div>
    </div>
  );
}
