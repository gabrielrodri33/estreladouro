import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho py-7 flex mx-auto">
      <ul>
        <li>
          <Image
            className="h-auto w-44 xl:w-64 lg:w-60 md:w-56 sm:w-52 2sm:w-48 3sm:w-44"
            src="/img/logo.png"
            alt="logo"
            width={270}
            height={87}
          ></Image>
        </li>
        <li>
          <Link href="#nossos_servicos" className="botao">
            SERVIÇOS
          </Link>
        </li>
        <li>
          <Link href="#nossa_historia" className="botao">
            HISTÓRIA
          </Link>
        </li>
        <li>
          <Link href="#depoimentos" className="botao">
            DEPOIMENTOS
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link
            href="https://www.instagram.com/estreladouromazzei/"
            target="_blank"
          >
            <Image
              src="/img/instagram.png"
              alt="whatsapp"
              width={50}
              height={50}
            ></Image>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/estreladouromazzei/"
            target="_blank"
          >
            <Image
              src="/img/whatsapp.png"
              alt="whatsapp"
              width={50}
              height={50}
            ></Image>
          </Link>
        </li>
      </ul>

      <hr className="separator" />
    </header>
  );
}
