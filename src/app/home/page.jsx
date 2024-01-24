import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Apresentação da oficina */}
      <section className="pt1">
        <h1>ESTRELA D'OURO IMPORTS</h1>
        <p className="pb-4">
          Somos especialistas na manutenção e revisão de veículos importados e
          nacionais. Nossa equipe qualificada está pronta para garantir a
          excelência no serviço, utilizando tecnologia de ponta e peças
          genuínas. Proporcionamos atendimento personalizado, focado na
          satisfação total dos nossos clientes. Conte conosco para manter seu
          veículo importado em ótimas condições de funcionamento e desempenho.
        </p>
        <p className="fade"></p>
      </section>

      {/* Logotipos das marcas de carros */}

      <section className="pt2">
        <ul>
          <li>
            <Image
              src="/logo/logo_bmw.png"
              alt="logotipo_bmw"
              width={120}
              height={120}
            ></Image>
          </li>
          <li>
            <Image
              src="/logo/logo_mercedes.png"
              alt="logotipo_mercedes"
              width={120}
              height={120}
            ></Image>
          </li>
          <li>
            <Image
              src="/logo/logo_volks.png"
              alt="logotipo_volkswagen"
              width={120}
              height={120}
            ></Image>
          </li>
          <li>
            <Image
              src="/logo/logo_porsche.png"
              alt="logotipo_porsche"
              width={120}
              height={120}
            ></Image>
          </li>
          <li>
            <Image
              src="/logo/logo_volvo.png"
              alt="logotipo_volvo"
              width={120}
              height={120}
            ></Image>
          </li>
          <li>
            <Image
              src="/logo/logo_honda.png"
              alt="logotipo_honda"
              width={120}
              height={120}
            ></Image>
          </li>
          <li>
            <Image
              src="/logo/logo_mitsubishi.png"
              alt="logotipo_mitsubishi"
              width={120}
              height={120}
            ></Image>
          </li>
        </ul>

        <ul>
        <li>
            <Image
              src="/logo/logo_jeep.png"
              alt="logotipo_jeep"
              width={120}
              height={120}
            ></Image>
          </li>
          <li>
            <Image
              src="/logo/logo_mini.png"
              alt="logotipo_mini"
              width={120}
              height={120}
            ></Image>
          </li>
          <li>
            <Image
              src="/logo/logo_audi.png"
              alt="logotipo_audi"
              width={120}
              height={120}
            ></Image>
          </li>
          <li>
            <Image
              src="/logo/logo_landrover.png"
              alt="logotipo_landrover"
              width={120}
              height={120}
            ></Image>
          </li>
        </ul>

        <p className=" h-16 bg-gradient-to-b from-zinc-900  to-zinc-950 opacity-25 dark:opacity-100"></p>
      </section>

      {/* Serviços da oficina */}

      <section className="bg-zinc-950 pt-12 text-white pb-10">
        <h1 className="flex flex-row justify-center font-bold text-5xl pb-6">
          Serviços
        </h1>
        <div className="flex flex-row justify-center items-center space-x-5">
          <Image
            className="rounded-lg"
            src="/img/servicos1.jpg"
            alt="mecanico"
            width={600}
            height={400}
          ></Image>
          <ul className=" text-2xl space-y-4">
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Ar Condicionado</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Câmbio Automático</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Diagnóstico de Avarias</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Injeção Eletrônica, Abs e Airbag</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Motor e Mecatrônica</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Revisão Preventiva e Corretiva</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Revisão por Km</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Suspensão</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-center items-center space-x-5 pt-10">
          <ul className="text-2xl space-y-4">
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Balanceamento</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Alinhamento</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Troca de Óleo</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Manutenção de Embreagem</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Sistema de Arrefecimento</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Revisão de Freio</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Amortecedor</p>
            </li>
            <li className="flex flex-row items-center space-x-2">
              <Image
                className="invert"
                src="/img/ponto.png"
                alt="mecanico"
                width={8}
                height={8}
              ></Image>
              <p>Filtros e Radiador</p>
            </li>
          </ul>
          <Image
            className="rounded-lg"
            src="/img/servicos2.jpg"
            alt="mecanico"
            width={600}
            height={400}
          ></Image>
        </div>
      </section>

      {/* História da oficina */}

      <section className="bg-zinc-900 text-white">
        <h1 className="flex justify-center">
          Nossa História
        </h1>
        <p>
          A Estrela D’Ouro Mecânica é uma oficina especializada em veículos nacionais e importados, localizada em duas unidades na Vila Mazzei, São Paulo.
        </p>

        <p>
          Com mais de 35 anos de experiência e tradição, oferecemos uma estrutura diferenciada com equipamentos de primeira linha, proporcionando diagnósticos precisos e atendendo às necessidades específicas de cada cliente.
        </p>

        <p>
          Nosso compromisso é com a qualidade em todos os nossos serviços, mantendo-nos sempre atualizados com conhecimentos e tecnologias para melhor atender nossos clientes e acompanhar a evolução do mercado automotivo.
        </p>
      </section>
    </>
  );
}
