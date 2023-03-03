import React from "react";
import classes from "./Button.module.css";
import Link from "next/link";

const Button = (props) => {
  return (
    <Link className={classes.btn} href={props.link}>
      {props.children}
    </Link>
  );
};

export default Button;
