import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min h-screen flex flex-col">
        {/* Apresentação da oficina */}
        <section className="pt1">
          <h1 className="titulo">ESTRELA D OURO IMPORTS</h1>
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
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <div>
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
              </ul>
            </div>

            <div>
              <ul>
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
            </div>
          </div>

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
          <h1 className="titulo pb-6">Serviços</h1>
          <div className="pb-10 mx-10 flex flex-col lg:flex-row md:justify-center lg:space-x-10">
            <Image
              className="rounded-xl h-auto w-auto justify-center pb-7"
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

          <div className="pt-3 pb-10 mx-10">
            <div className="flex flex-col-reverse lg:flex-row md:justify-center space-x-0 lg:space-x-5">
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
                <li className="pb-7">
                  <p>Filtros e Radiador</p>
                </li>
              </ul>
              <Image
                className="rounded-xl pb-7 w-auto h-auto mx-auto"
                src="/img/servicos2.jpg"
                alt="mecanico"
                width={600}
                height={400}
              ></Image>
            </div>
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
          className="bg-zinc-950 text-white pt-10 xl:px-32 lg:px-20 md:px-16 sm:px-12 2sm:px-8 3sm:px-6 4sm:px-2 px-0"
        >
          <h1 className="titulo pb-8">Depoimentos</h1>
          <ul className="xl:flex xl:flex-row justify-center pb-20 lg:flex-col xl:space-x-10 xl:space-y-0 4sm:space-y-5">
            <li className="3sm:p-5 px-2 pt-4 border">
              <h2 className="flex justify-center font-semibold text-xl text-center">
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
            <li className="3sm:p-5 px-2 pt-4 border">
              <h2 className="flex justify-center font-semibold text-xl text-center">
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
                Sérgio e prontamente pediu pra levar o carro, os filhos Anderson
                e Diego também sempre prestativos.
              </p>
            </li>
            <li className="3sm:p-5 px-2 pt-4 border">
              <h2 className="flex justify-center font-semibold text-xl text-center">
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
        {/* relative h-0 overflow-hidden pb-3/4 */}
        <section className="bg-zinc-800 py-5">
          <div className="items-center justify-center sm:my-16 xl:mx-32 lg:mx-24 md:mx-16 sm:mx-12 2sm:mx-10 3sm:mx-8 mx-3">
            <iframe
              className="ring-2 ring-yellow-500 h-64 w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.843482867402!2d-46.59714299999999!3d-23.4661096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef67975ba4275%3A0xca7afc39fdc16c0b!2sAv.%20Mazzei%2C%201882%20-%20Vila%20Nova%20Mazzei%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002310-002!5e0!3m2!1spt-BR!2sbr!4v1706647303474!5m2!1spt-BR!2sbr"
              allowfullscreen={true}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <ul className="flex flex-row items-center justify-center pt-6 space-x-12">
              <li>
                <Link
                  href="https://maps.app.goo.gl/auZvUSr2HXAfqTzf6"
                  className=""
                  target="_blank"
                >
                  <Image
                    className="h-auto md:w-12 w-9 resize-none"
                    src="/img/google-maps.png"
                    alt="whatsapp"
                    width={65}
                    height={65}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link
                  href="https://ul.waze.com/ul?ll=-23.46601183%2C-46.59713745&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  className=""
                  target="_blank"
                >
                  <Image
                    className="h-auto md:w-12 w-10 resize-none"
                    src="/img/waze.png"
                    alt="whatsapp"
                    width={65}
                    height={65}
                  ></Image>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <footer className="w-full text-center p-4 text-white bg-zinc-950">
          <div>
            <p>
              © Todos os direitos reservados | Desenvolvido por: gabrielrodri33
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
