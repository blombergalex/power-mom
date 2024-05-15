import Image from "next/image";
import Introduction from "@/components/Introduction";
import Motherhood from "../../public/images/motherhood.jpeg"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Introduction />
      <Image className={styles.motherhoodImg} src={Motherhood} alt="Motherhood"
      />
    </main>
  );
}
