import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="bg-zinc-950 pt-5 md:font-bold text-center sticky top-0 z-20 py-7">
      <div className="flex pb-5">
        <Image
          className="justify-start h-auto w-44 xl:w-64 lg:w-60 md:w-56 sm:w-52 2sm:w-48 3sm:w-44"
          src="/img/logo.png"
          alt="logo"
          width={270}
          height={87}
        ></Image>
        <div className="flex flex-row justify-center items-center" style={{ flex: 1 }}>
          <ul className="flex md:flex-row flex-col text-xs md:text-lg md:items-center xl:space-x-52 lg:space-x-36 md:space-x-12 space-x-0">
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
        </div>
        <ul className="flex ml-auto mr-4 space-x-8 items-center">
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
      </div>
      <hr className="separator w-screen" />
    </header>
  );
}
