import Image from "next/image";
import styles from "./styles/home.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cormac McCann | Fullstack Web Developer",
  description: "A fullstack web developer from Kildare, Ireland",
};

export default function Home() {
  return (
    <main>
      <div className={styles.homepageContainer}>
        <span>Hi</span>
        <h1>I'm Cormac McCann</h1>
        <p>
          a <strong>full stack software engineer</strong> from Kildare, Ireland
        </p>

        <div className="flex pt-1">
          <a
            className="btn"
            href="https://github.com/mccannsean421"
            target="_blank"
          >
            Github
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/cormac-mccann-70052283/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
