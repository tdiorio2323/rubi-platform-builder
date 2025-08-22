import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>Welcome</h1>
      <p style={{ marginBottom: 16 }}>This is a minimal Next.js App Router setup.</p>
      <p>
        Try the Rubi demo at{' '} 
        <Link href="/rubi">/rubi</Link>
      </p>
    </main>
  );
}

