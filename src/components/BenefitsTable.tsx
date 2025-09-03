import Image from "next/image";
import Logo from "@/assets/icons/ContabilidadeLogo.png";
const benefits = [
  { name: "Certificado Digital", included: true, market: "R$ 200/ano" },
  {
    name: "Abertura de empresa, 100% digital",
    included: true,
    market: "R$ 700/ano",
  },
  {
    name: "Contabilidade Consultiva",
    included: true,
    market: "R$ 5.880,00/mês",
  },
  {
    name: "Conta PJ gratuita, digital e integrada à sua contabilidade",
    included: true,
    market: "R$ 756,00/ano",
  },
  {
    name: "Atendimento personalizado por telefone e WhatsApp a partir do plano de entrada",
    included: true,
    market: "R$ 1.920/ano",
  },
];

export function BenefitsTable() {
  return (
    <table className="max-w-[986px] max-h-[495px]">
      <thead>
        <tr className="text-left border-b-2 border-mint-400">
          <th className="py-8">
            <h4 className="font-medium text-mint-400 lg:text-2xl sm:text-sm">
              {" "}
              Benefícios inclusos no seu pacote
            </h4>
          </th>
          <th className="bg-neutral-100 rounded-t-2xl">
            <Image
              src={Logo}
              alt="Logo Contabilidade.com"
              className="mx-auto"
            />
          </th>
          <th className="px-6">
            <h5 className="text-right text-xl font-normal leading-5">
              Média de Mercado
            </h5>
          </th>
        </tr>
      </thead>
      <tbody>
        {benefits.map((benefit, index) => (
          <tr key={index} className="border-t border-neutral-200">
            <td className="py-5 font-medium text-lg hover:bg-neutral-100 transition-colors duration-300">
              {benefit.name}
            </td>
            <td className="text-center text-mint-400 font-bold text-lg bg-neutral-100 px-16">
              {benefit.included ? "Incluso" : "Não incluso"}
            </td>
            <td className="p-3 text-right font-medium text-lg">
              {benefit.market}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
