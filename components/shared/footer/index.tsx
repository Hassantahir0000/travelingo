import Image from "next/image";

type FooterProps = {
  heading: string;
  description: string;
  buttonLabel: string;
};

export default function Footer({
  heading,
  description,
  buttonLabel,
}: FooterProps) {
  return (
    <div className="w-screen min-h-screen px-10 h-auto bg-blue-blur pt-[4rem] mt-[-4rem] rounded-tl-[3rem] rounded-tr-[3rem]">
      <div className="bg-white flex-col mx-auto rounded-[28px] pt-[3rem] pb-[7rem] flex items-center justify-center">
        <h2 className="self-stretch footer_big_text font-poppinsM text-center text-blue-blur text-[6.25rem] mt-[68px] font-normal leading-normal">
          {heading}
        </h2>

        <p className="self-stretch text-black text-[1.8rem] font-poppinsM font-normal text-center leading-[2.5rem]">
          {description}
        </p>

        <button className="bg-blue-blur rounded-full w-[90%] max-w-[30rem] px-10 items-center gap-x-5 py-5 mt-[3rem] text-white flex justify-between">
          <div className="flex gap-x-5 justify-between">
            <p className="text-white text-[1.8rem] footer_btn_p font-poppinsR">
              {buttonLabel}
            </p>
          </div>
          <Image src={"/icons/arrow.svg"} width={30} height={30} alt="" />
        </button>
      </div>

      <div className="flex justify-between items-center mt-10">
        <div className="flex w-[70%]">
          <Image
            src={"/images/logo.png"}
            width={500}
            height={500}
            className="h-[3rem] w-fit"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
