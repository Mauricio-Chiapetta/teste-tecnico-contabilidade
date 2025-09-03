import { BenefitsTable } from "@/components/BenefitsTable";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <section className="min-h-screen py-24">
      <div className="flex flex-col gap-16 justify-center items-center">
        <h1 className="text-center sm:text-[42px] text-3xl font-medium text-primary-500 leading-12">
          Por que a <span className="text-mint-400">Contabilidade.com</span>
          <br />é a melhor opção {`{cidade}`}?
        </h1>
        <BenefitsTable />
        <Footer />
      </div>
    </section>
  );
}
