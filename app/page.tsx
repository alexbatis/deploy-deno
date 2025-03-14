import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Next.js on Deno Deploy (next version 15.2.2)</div>
      <Link href="/server-component">Server Component Example</Link>
    </main>
  );
}
