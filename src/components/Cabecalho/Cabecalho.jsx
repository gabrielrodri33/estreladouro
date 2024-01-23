import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <ul>
        <li>
          <Image src="/img/logo.png" alt="logo" width={279} height={98}></Image>
        </li>
        <li>
          <Link href="">NOSSOS SERVIÇOS</Link>
        </li>
        <li>
          <Link href="">NOSSA HISTÓRIA</Link>
        </li>
        <li>
          <Link href="">DEPOIMENTOS</Link>
        </li>
      </ul>
    </header>
  );
}
