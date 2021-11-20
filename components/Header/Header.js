import Head from "next/head";
import styles from "styles/Home.module.css";
import Link from "next/link";

const Header = ({}) => {
  return (
    <header className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">Index</Link>
          </li>
          <li>
            <Link href="/page2">Page 2</Link>
          </li>
          <li>
            <Link href="/page3">Page 3</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
