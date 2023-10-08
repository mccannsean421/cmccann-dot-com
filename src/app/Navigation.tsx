import styles from "./styles/navigation.module.css";

export default function Navigation() {
  return (
    <>
      <nav className={styles.nav}>
        <div className="">
          <div>
            <a href="/">home</a>
            <a href="/about">a little about me</a>
            <a href="/my-work">my work</a>
          </div>
        </div>
      </nav>
    </>
  );
}
