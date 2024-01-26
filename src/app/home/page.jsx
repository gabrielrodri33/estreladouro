import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        {/* Apresentação da oficina */}
        <section className="pt1">
          <h1 className="titulo">ESTRELA D'OURO IMPORTS</h1>
          <p>
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
                className="imagens_logo"
                src="/logo/logo_bmw.png"
                alt="logotipo_bmw"
                width={120}
                height={120}
              ></Image>
            </li>
            <li>
              <Image
                className="imagens_logo"
                src="/logo/logo_mercedes.png"
                alt="logotipo_mercedes"
                width={120}
                height={120}
              ></Image>
            </li>
            <li>
              <Image
                className="imagens_logo"
                src="/logo/logo_volks.png"
                alt="logotipo_volkswagen"
                width={120}
                height={120}
              ></Image>
            </li>
            <li>
              <Image
                className="imagens_logo"
                src="/logo/logo_porsche.png"
                alt="logotipo_porsche"
                width={120}
                height={120}
              ></Image>
            </li>
            <li>
              <Image
                className="imagens_logo"
                src="/logo/logo_volvo.png"
                alt="logotipo_volvo"
                width={120}
                height={120}
              ></Image>
            </li>
            <li>
              <Image
                className="imagens_logo"
                src="/logo/logo_honda.png"
                alt="logotipo_honda"
                width={120}
                height={120}
              ></Image>
            </li>
            <li>
              <Image
                className="imagens_logo"
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
                className="imagens_logo"
                src="/logo/logo_jeep.png"
                alt="logotipo_jeep"
                width={120}
                height={120}
              ></Image>
            </li>
            <li>
              <Image
                className="imagens_logo"
                src="/logo/logo_mini.png"
                alt="logotipo_mini"
                width={120}
                height={120}
              ></Image>
            </li>
            <li>
              <Image
                className="imagens_logo"
                src="/logo/logo_audi.png"
                alt="logotipo_audi"
                width={120}
                height={120}
              ></Image>
            </li>
            <li>
              <Image
                className="imagens_logo"
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

        <section id="nossos_servicos" className="pt3">
          <h1 className="titulo">Serviços</h1>
          <div className="pb-10 mx-12">
            <Image
              className="rounded-lg h-[h_img] w-auto lg:h-96 md:h-90"
              src="/img/servicos1.jpg"
              alt="mecanico"
              width={600}
              height={400}
            ></Image>
            <ul>
              <li>
                <p>Ar Condicionado</p>
              </li>
              <li>
                <p>Câmbio Automático</p>
              </li>
              <li>
                <p>Diagnóstico de Avarias</p>
              </li>
              <li>
                <p>Injeção Eletrônica, Abs e Airbag</p>
              </li>
              <li>
                <p>Motor e Mecatrônica</p>
              </li>
              <li>
                <p>Revisão Preventiva e Corretiva</p>
              </li>
              <li>
                <p>Revisão por Km</p>
              </li>
              <li>
                <p>Suspensão</p>
              </li>
            </ul>
          </div>

          <div className="pb-10 mx-12">
            <ul>
              <li>
                <p>Balanceamento</p>
              </li>
              <li>
                <p>Alinhamento</p>
              </li>
              <li>
                <p>Troca de Óleo</p>
              </li>
              <li>
                <p>Manutenção de Embreagem</p>
              </li>
              <li>
                <p>Sistema de Arrefecimento</p>
              </li>
              <li>
                <p>Revisão de Freio</p>
              </li>
              <li>
                <p>Amortecedor</p>
              </li>
              <li>
                <p>Filtros e Radiador</p>
              </li>
            </ul>
            <Image
              className="rounded-lg h-[h_img] w-auto lg:h-96 md:h-90"
              src="/img/servicos2.jpg"
              alt="mecanico"
              width={600}
              height={400}
            ></Image>
          </div>
        </section>

        {/* História da oficina */}

        <section
          id="nossa_historia"
          className="bg-zinc-900 text-slate-400 pt-10"
        >
          <h1 className="titulo">Nossa História</h1>
          <p className="pt-8 text-2xl font-thin px-96 xl:px-56 lg:px-44 md:px-36 sm:px-20 2sm:px-12 3sm:px-8 4sm:px-1 sm:text-2xl 2sm:text-xl 4sm:text-lg">
            A Estrela D Ouro Automotiva é uma oficina especializada em
            automóveis nacionais e importados, estabelecida em duas unidades na
            Vila Mazzei, São Paulo.
          </p>

          <p className="pt-8 text-2xl font-thin px-96 xl:px-56 lg:px-44 md:px-36 sm:px-20 2sm:px-12 3sm:px-8 4sm:px-1 sm:text-2xl 2sm:text-xl 4sm:text-lg">
            Com mais de 35 anos de experiência e história, oferecemos uma
            estrutura diferenciada com equipamentos de última geração,
            garantindo diagnósticos precisos e atendendo às demandas específicas
            de cada cliente.
          </p>

          <p className="pt-8 text-2xl font-thin px-96 xl:px-56 lg:px-44 md:px-36 sm:px-20 2sm:px-12 3sm:px-8 4sm:px-1 pb-12 sm:text-2xl 2sm:text-xl 4sm:text-lg">
            Nosso comprometimento é com a excelência em todos os nossos
            serviços, mantendo-nos sempre atualizados com conhecimentos e
            tecnologias para melhor satisfazer nossos clientes e acompanhar a
            evolução do setor automotivo.
          </p>
          <hr className="separator" />
        </section>

        {/* Parte de depoimentos */}

        <section
          id="depoimentos"
          className="bg-zinc-950 text-white pt-10 xl:px-32 lg:px-20 md:px-16 sm:px-12 2sm:px-8 3sm:px-6 4sm:px-4 ziro:px-2"
        >
          <h1 className="titulo pb-8">Depoimentos</h1>
          <ul className="xl:flex xl:flex-row justify-center pb-56 lg:flex-col xl:space-x-10 xl:space-y-0 4sm:space-y-5">
            <li className="p-5 border">
              <h2 className="flex justify-center font-semibold text-xl ">
                Mastiguinha 2005
              </h2>
              <Image
                className="mx-auto py-4"
                src="/img/five_stars.png"
                alt="cinco_estrelas"
                width={155}
                height={30}
              ></Image>
              <p>
                Tinha uma audi a3 sedan ambition ano 2015 fiz a revisão de 30mil
                km na concessionária após uma semana de uso, luz da injeção
                ascendeu no painel, voltei na concessionária e eles me deram o
                diagnóstico de arrefecimento, custo, 7 mil reais de orçamento.
              </p>
              <p>
                Acionei o seguro peguei o guincho e levei para a Mecanica
                estrela, após analise e restauração do sistema elétrico, apenas
                troquei a bateria!
              </p>
              <p className="pb-4">Empresa séria, honesta, digna!</p>
            </li>
            <li className="p-5 border">
              <h2 className="flex justify-center font-semibold text-xl ">
                Lucas Taha
              </h2>
              <Image
                className="mx-auto py-4"
                src="/img/five_stars.png"
                alt="cinco_estrelas"
                width={155}
                height={30}
              ></Image>
              <p className="pb-4">
                Sou cliente por volta de 3 anos, já fiz várias manutenções na
                minha Pajero Sport 98, eles são super atenciosos comigo e com o
                carro, dia 21julho2022, precisei levar o carro guinchado da
                cidade de Socorro até a oficina, liguei falei com o Senhor
                Sérgio e prontamente pediu pra levar o carro, os filhos Anderson e Diego também sempre prestativos.
              </p>
            </li>
            <li className="p-5 border">
              <h2 className="flex justify-center font-semibold text-xl ">
                Alvaro Rocha
              </h2>
              <Image
                className="mx-auto py-4"
                src="/img/five_stars.png"
                alt="cinco_estrelas"
                width={155}
                height={30}
              ></Image>
              <p>
                Venho aqui agradecer e elogiar o trabalho, atendimento e
                respeito que recebi da oficina, em especial do Diogo, que além
                de conhecer da profissão mecânico, é um excelente rapaz, educado
                e preocupado com um bom resultado e satisfação do cliente,
                graças a Deus encontrei uma oficina que respeita o cliente.
              </p>
              <p className="pb-4">
                Serei um cliente fiel a partir de hoje. Que Deus abençoe os
                profissionais que ali trabalham para garantir o melhor resultado
                nos serviços prestados.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
