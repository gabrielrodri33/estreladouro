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
          <Link href="https://www.instagram.com/estreladouromazzei/" className="botao">NOSSOS SERVIÇOS</Link>
        </li>
        <li>
          <Link href="" className="botao">NOSSA HISTÓRIA</Link>
        </li>
        <li>
          <Link href="" className="botao">DEPOIMENTOS</Link>
        </li>
        <li>
          <Link href='https://www.instagram.com/estreladouromazzei/' target="_blank">
            <Image src="/img/instagram.png" alt="whatsapp" width={50} height={50}></Image>
          </Link>
        </li>
        <li>
          <Link href='https://www.instagram.com/estreladouromazzei/' target="_blank">
            <Image src="/img/whatsapp.png" alt="whatsapp" width={50} height={50}></Image>
          </Link>
        </li>
      </ul>
    </header>
  );
}
