"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/src/context/ThemeContext";

const ThemeToggle = () => {
  const { changeTheme, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
      onClick={changeTheme}
    >
      <Image src="/moon.png" alt="dark" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { right: 1, background: "#0f172a" }
            : { left: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="light" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
