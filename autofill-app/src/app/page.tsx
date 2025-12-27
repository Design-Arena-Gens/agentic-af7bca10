import { Suspense } from "react";
import styles from "./page.module.css";
import ProfileAutofill from "@/components/profile-autofill";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>JSON-powered Autofill Playground</h1>
          <p>
            Load profile data from JSON models, preview the structure, and apply
            it instantly to web forms. Use the built-in dataset or plug in your
            own URLs to test autofill workflows.
          </p>
        </section>
        <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
          <ProfileAutofill />
        </Suspense>
      </main>
    </div>
  );
}
