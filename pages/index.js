import { useRouter } from "next/router.js";
// import styles from "@/styles/Home.module.css";
import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout.jsx";

export default function Home() {
  const { asPath } = useRouter();

  return (
    <>
      <MainLayout>
        <h1>Home Page</h1>
        <div className="description">
          {asPath && (
            <p>
              Estamos en la ruta&nbsp;
              <code className="code">pages{asPath}</code>
            </p>
          )}
        </div>

        <div className="grid">
          <Link href="/about" className="card">
            <h2>
              About <span>-&gt;</span>
            </h2>
            <p>Ruta para ir a /About.</p>
          </Link>
          <Link href="/pricing" className="card">
            <h2>
              Pricing <span>-&gt;</span>
            </h2>
            <p>Ruta para ir a /Pricing.</p>
          </Link>
          <Link href="/contact" className="card">
            <h2>
              Contact <span>-&gt;</span>
            </h2>
            <p>Ruta para ir a /Contact.</p>
          </Link>
        </div>
      </MainLayout>
    </>
  );
}
