import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </Link>
      </div>
      <div className={styles.logo}>Quirkify</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
