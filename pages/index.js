import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>Hello pages router</h1>
      </div>
      <div>
        <Link href="/about">Go to about page</Link>
        <Link href="/cabins">Go to cabins page</Link>
      </div>
    </>
  );
}
