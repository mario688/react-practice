import React from "react";
import style from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={style.main}>{props.children}</main>
    </>
  );
}
