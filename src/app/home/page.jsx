import Image from "next/image"

export default function Home() {
  return (
    <>
    {/* Apresentação da oficina */}
    <div className="pt1">
        <h1>ESTRELA D'OURO IMPORTS</h1>
        <p>Somos especialistas na manutenção e revisão de veículos importados e nacionais. Nossa equipe qualificada está pronta para garantir a excelência no serviço, utilizando tecnologia de ponta e peças genuínas. Proporcionamos atendimento personalizado, focado na satisfação total dos nossos clientes. Conte conosco para manter seu veículo importado em ótimas condições de funcionamento e desempenho.</p>
        <p className="fade"></p>
    </div>

    {/* Logotipos das marcas de carros */}

    <div className="pt2">
      <ul>
        <li>
          <Image src="/logo/logo_bmw.png" alt="logotipo_bmw" width={100} height={100}></Image>
        </li>
        <li>
          <Image src="/logo/logo_mercedes.png" alt="logotipo_mercedes" width={100} height={100}></Image>
        </li>
        <li>
          <Image src="/logo/logo_volks.png" alt="logotipo_volkswagen" width={100} height={100}></Image>
        </li>
        <li>
          <Image src="/logo/logo_jeep.png" alt="logotipo_jeep" width={100} height={100}></Image>
        </li>
        <li>
          <Image src="/logo/logo_mini.png" alt="logotipo_mini" width={100} height={100}></Image>
        </li>
        <li>
          <Image src="/logo/logo_audi.png" alt="logotipo_audi" width={100} height={100}></Image>
        </li>
        <li>
          <Image src="/logo/logo_landrover.png" alt="logotipo_landrover" width={100} height={100}></Image>
        </li>
        <li>
          <Image src="/logo/logo_porsche.png" alt="logotipo_porsche" width={100} height={100}></Image>
        </li>
        <li>
          <Image src="/logo/logo_volvo.png" alt="logotipo_volvo" width={100} height={100}></Image>
        </li>
      </ul>
      <p className=" h-16 bg-gradient-to-b from-zinc-900  to-zinc-950 opacity-25 dark:opacity-100"></p>
    </div>

    {/* Serviços da oficina */}

    <section className="bg-zinc-950 pt-10">
      <div className="flex flex-row justify-center items-center space-x-5">
        <Image className="rounded-lg" src="/img/servicos1.jpg" alt="mecanico" width={600} height={400}></Image>
        <ul className="text-white text-2xl space-y-4">
          <li className="flex flex-row items-center space-x-2">
            <Image className="invert" src="/img/ponto.png" alt="mecanico" width={8} height={8}></Image>
            <p>Ar Condicionado</p>
          </li>
          <li className="flex flex-row items-center space-x-2">
            <Image className="invert" src="/img/ponto.png" alt="mecanico" width={8} height={8}></Image>
            <p>Câmbio Automático</p>
          </li>
          <li className="flex flex-row items-center space-x-2">
            <Image className="invert" src="/img/ponto.png" alt="mecanico" width={8} height={8}></Image>
            <p>Diagnóstico de Avarias</p>
          </li>
          <li className="flex flex-row items-center space-x-2">
            <Image className="invert" src="/img/ponto.png" alt="mecanico" width={8} height={8}></Image>
            <p>Injeção Eletrônica, Abs e Airbag</p>
          </li>
          <li className="flex flex-row items-center space-x-2">
            <Image className="invert" src="/img/ponto.png" alt="mecanico" width={8} height={8}></Image>
            <p>Motor e Mecatrônica</p>
          </li>
          <li className="flex flex-row items-center space-x-2">
            <Image className="invert" src="/img/ponto.png" alt="mecanico" width={8} height={8}></Image>
            <p>Revisão Preventiva e Corretiva</p>
          </li>
          <li className="flex flex-row items-center space-x-2">
            <Image className="invert" src="/img/ponto.png" alt="mecanico" width={8} height={8}></Image>
            <p>Revisão por Km</p>
          </li>
          <li className="flex flex-row items-center space-x-2">
            <Image className="invert" src="/img/ponto.png" alt="mecanico" width={8} height={8}></Image>
            <p>Suspensão</p>
          </li>
        </ul>
      </div>
    </section>
    </>
  )
}

{/* <p>Ar Condicionado</p>
<p>Câmbio Automático</p>
<p>Diagnóstico de Avarias</p>
<p>Injeção Eletrônica, Abs e Airbag</p>
<p>Motor e Mecatrônica</p>
<p>Revisão Preventiva e Corretiva</p>
<p>Revisão por Km</p>
<p>Suspensão</p> */}