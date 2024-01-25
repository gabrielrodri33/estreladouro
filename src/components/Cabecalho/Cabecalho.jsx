import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <ul>
        <li>
          <Image src="/img/logo.png" alt="logo" width={270} height={87}></Image>
        </li>
        <li>
          <Link href="#nossos_servicos" className="botao">SERVIÇOS</Link>
        </li>
        <li>
          <Link href="#nossa_historia" className="botao">HISTÓRIA</Link>
        </li>
        <li>
          <Link href="#depoimentos" className="botao">DEPOIMENTOS</Link>
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
      <hr className="separator"/>
    </header>
  );
}
