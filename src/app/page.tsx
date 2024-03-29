"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main
      className={styles.main}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px", // Increase font size to make it bigger
      }}
    >
      <h1>PAYSTAK</h1>
      <div></div>
      <div className={styles.searchContainer}></div>
      <input
        type="email" // Change input type to "email"
        placeholder="Email" // Change placeholder to "Email"
        className={styles.searchInput}
        style={{
          width: "40vh", // Set width to 20vh
          height: "50px", // Set height to 20px
          borderRadius: "10px", // Set border radius to 10px
          fontSize: "24px", // Set font size to 24px
          padding: "10px", // Set padding to 10px
          marginBottom: "20px", // Set margin bottom to 20px
        }}
      />
      <button
        onClick={() => router.push("login")}
        className={styles.searchButton}
        style={{
          width: "40vh", // Set width to 40vh
          height: "50px", // Set height to 50px
          background: "linear-gradient(to right, lightblue, lightblue)", // Add gradient light blue background
          borderRadius: "10px", // Set border radius to 10px
          color: "white", // Set text color to white
          border: "none", // Remove border
          outline: "none", // Remove outline
          fontSize: "24px", // Set font size to 24px
          cursor: "pointer", // Add pointer cursor
          transition: "all 0.3s", // Add transition effect
        }}
      >
        🔐 Login
      </button>
    </main>
  );
}
