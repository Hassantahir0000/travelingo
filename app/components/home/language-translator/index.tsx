import Image from "next/image";

export default function LanguageTranslator() {
  return (
    <div className="w-screen  shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] min-h-screen h-auto bg-maya-blue px-12 pt-2 pb-[20rem] mt-[-8rem] rounded-tl-[3%] rounded-tr-[3%] ">
      <h2 className="self-stretch font-poppinsM text-black text-[4.25rem] mt-[68px] font-normal  leading-normal">
        Language Translator
      </h2>

      <p className="self-stretch  text-black text-[1.9rem] font-poppinsR  font-normal mt-4 mb-5 leading-[2.5rem]">
        Lorem ipsum dolor sit amet consectetur. Tristique cursus faucibus
        aliquet amet massa. Viverra elit tempor libero sit mattis ut ac
        pharetra. Ultrices lectus et sagittis aliquet nam ornare. Iaculis
        consequat faucibus tortor amet est.
      </p>

      <div className="bg-dodger-blue rounded-[20px] shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)] mt-[5rem]">
        <div className="flex flex-row px-10 py-[5rem]">
          <div className="w-[40%] flex justify-center items-center">
            <Image
              src={"/images/language-translator/img-translator.png"}
              width={800}
              height={800}
              alt=""
              className="w-[22rem] m-auto h-auto "
            />
          </div>
          <div className="w-[60%] p-5">
            <h2 className="self-stretch font-poppinsM text-black text-[2.8rem]  font-normal  leading-[3.5rem]">
              Image Translator
            </h2>

            <p className="self-stretch font-poppinsR text-black text-[1.4rem] w-[90%]  font-normal   mt-5">
              Dive into the heart of each destination with tailored cultural
              insights, visa guidance, and essential travel tips. Our app
              provides in-depth country-specific information to enrich your
              journey and ensure a seamless travel experience. Explore the world
              confidently with every detail you need right at your fingertips.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-x-10 mt-[2rem]">
        <div className="bg-dodger-blue w-[55%] py-[3rem]  rounded-[20px] shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)]">
          <div className="flex flex-row">
            <div className="w-[40%] flex justify-center items-center">
              <Image
                src={"/images/language-translator/text-to-voice.png"}
                width={800}
                height={800}
                alt=""
                className="w-[18rem] m-auto h-auto "
              />
            </div>
            <div className="w-[60%] p-5">
              <h2 className="self-stretch font-poppinsM  text-black text-[2.8rem]  font-normal  leading-[3.5rem]">
                Text to Voice
              </h2>

              <p className="self-stretch  font-poppinsR text-black text-[1.4rem] w-[90%]  font-normal   mt-5">
                Dive into the heart of each destination with tailored cultural
                insights, visa guidance, and essential travel tips. Our app
                provides in-depth.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-dodger-blue w-[45%]  rounded-[20px] shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)]">
          <div className="flex h-full flex-row items-center justify-center">
            <Image
              src={"/images/language-translator/play-button.png"}
              width={800}
              height={800}
              alt=""
              className="w-[6rem] m-auto h-auto "
            />
          </div>
        </div>
      </div>

      <div className="flex gap-x-10 mt-[2rem]">
        <div className="bg-dodger-blue w-[35%]  rounded-[20px] shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)]">
          <div className="flex mx-auto  h-full flex-row items-center justify-center">
            <div className=" p-5 flex flex-col justify-center  mx-auto w-[90%] ">
              <h2 className="self-stretch font-poppinsM  text-black text-[2.8rem]  font-normal  leading-[3.5rem]">
                Voice to Text
              </h2>

              <p className="self-stretch font-poppinsR text-black text-[1.4rem] w-[90%]  font-normal   mt-5">
                Dive into the heart of each destination with tailored cultural
                insights, visa guidance, and essential travel tips. Our app
                provides in-depth.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-dodger-blue w-[65%] py-[3rem] rounded-[20px] shadow-[0px_0px_50px_rgba(255,_255,_255,_0.46)]">
          <div className="flex flex-row">
            <div className="w-[40%] flex justify-center items-center">
              <Image
                src={"/images/language-translator/conversation.png"}
                width={800}
                height={800}
                alt=""
                className="w-[15rem] m-auto h-auto "
              />
            </div>
            <div className="w-[60%] p-5">
              <h2 className="self-stretch font-poppinsM  text-black text-[2.8rem]  font-normal  leading-[3.5rem]">
                Conversation Translator
              </h2>

              <p className="self-stretch font-poppinsR text-black text-[1.4rem] w-[90%]  font-normal   mt-5">
                Dive into the heart of each destination with tailored cultural
                insights, visa guidance, and essential travel tips. Our app
                provides in-depth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
