import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Image
        className={styles.image}
        src="/cat-clapping.gif"
        alt="A cat clapping"
        width={381}
        height={498}
        unoptimized
        priority
      />
    </main>
  );
}
