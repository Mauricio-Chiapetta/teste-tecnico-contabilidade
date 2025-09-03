import Image from "next/image";
import Coin from "@/assets/icons/Coin.png";
import Link from "next/link";

export function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-mint-400 font-medium sm:text-2xl flex items-center gap-4">
        <Image src={Coin} alt="money" />
        Uma economia média de <span className="font-bold">R$ 9.456/ano</span>
      </p>
      <Link
        href={"/"}
        className="bg-blue-500 px-6 py-3 rounded-full text-white font-medium hover:bg-blue-400 transition-all duration-300"
      >
        Abrir empresa grátis
      </Link>
    </div>
  );
}
