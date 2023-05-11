import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";

export default function AboutPage() {
  const { asPath } = useRouter();

  return (
    <MainLayout>
      <h1>About Page</h1>
      <DarkLayout>
        <div className="description">
          {asPath && (
            <p>
              Estamos en la ruta&nbsp;
              <code className="code">pages{asPath}</code>
            </p>
          )}
        </div>
      </DarkLayout>

      <div className="grid">
        <Link href="/" className="card">
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Ruta para volver a /Home.</p>
        </Link>
        <Link href="/contact" className="card">
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>Ruta para ir a /Contact.</p>
        </Link>
        <Link href="/pricing" className="card">
          <h2>
            Pricing <span>-&gt;</span>
          </h2>
          <p>Ruta para ir a /Pricing.</p>
        </Link>
      </div>
    </MainLayout>
  );
}
