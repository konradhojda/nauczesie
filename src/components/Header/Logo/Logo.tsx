import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <img
        src="./logo.png"
        alt="kitten"
        className="h-[60px] w-auto"
        width={60}
        height={60}
      />
    </Link>
  );
}
