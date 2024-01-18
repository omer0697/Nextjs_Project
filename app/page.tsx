import Button from "@/components/Button";
import Image from "next/image";
import image from "../public/images/4.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-1 px-10 text-gray-600 lg:px-40 text-center w-full">
      <div className="h-[36rem] overflow-hidden hidden lg:flex">
        <Image
            src={image}
            alt="Picture of the author"
            objectFit="cover"
            className="object-center object-cover"
          />
      </div>
      <h1 className="text-4xl w-full text-center lg:text-4xl flex flex-col py-10 gap-10 lg:flex-row font-semibold">
        <p className="text-4xl basis-7/12 ">Hayat Enerjisi İçin Ankara Jeneratör: Jeneratör Kiralama ve Satış</p>
        <p className="text-2xl lg:text-xl font-normal basis-5/12">
          Projelerinizi ve sizleri önemser hızlı ve kurumsal anlayışla sizlere hizmet vermekten gurur duyarız. Jeneratör grupları ile, projelerinize kaliteli ve uygun fiyat politikasıyla kesin çözüm üretiyoruz.
        </p>
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <Button text="Jeneratör Kiralama" />
        <Button text="Jeneratör Satış" />
        <Button text="Jeneratör Bakım" />
      </div>
    </div>
  );
}
