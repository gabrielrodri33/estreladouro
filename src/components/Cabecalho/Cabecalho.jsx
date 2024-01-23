import Link from "next/link";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <Image src="/img/logo.png" alt="logo" width={700} height={500}></Image>
    </header>
  );
}