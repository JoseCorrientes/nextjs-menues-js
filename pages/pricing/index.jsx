import MainLayout from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";
import { useRouter } from "next/router";
import Link from "next/link";

function PricingPage() {
  const { asPath } = useRouter();

  return (
    <MainLayout>
      <h1>Pricing Page</h1>
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
        <Link href="/about" className="card">
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Ruta para volver a /About.</p>
        </Link>
        <Link href="/contact" className="card">
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>Ruta para ir a /Contact.</p>
        </Link>
      </div>
    </MainLayout>
  );
}

export default PricingPage;
