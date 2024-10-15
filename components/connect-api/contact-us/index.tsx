"use client";

import { useScroll } from "@/utils/context";

export default function ContactUs() {

  const { contactUsRef } = useScroll();

  return (
    <div ref={contactUsRef} className="w-screen centralise min-h-screen px-10 drop-shadow-[0_-25px_20px_rgba(255,255,255,0.25)] contact_us_container h-auto bg-[#5FBEFF]  pt-0 pb-[20rem] mt-[-4rem] rounded-tl-[3rem] rounded-tr-[3rem]">
      <div className="container max_width_container mx-auto">
        <h2 className="self-stretch  section_heading font-poppinsM text-black text-[4.25rem] mt-[68px] font-normal  leading-normal">
          Contact Us
        </h2>
        <p className="self-stretch section_para text-black text-[1.9rem] font-poppinsM font-normal mt-4 ml-4 mb-5 leading-[2.5rem]">
          Your all-in-one solution for Visa Information, Weather, Culture, and
          more!
        </p>

        <div className="flex flex-col mt-[4rem] contact_us_panel bg-white px-10 py-[4rem] rounded-[30px] gap-y-5">
          <input
            className="px-4 py-5 ps-6 bg-blue-blur/50 text-black text-[1.5rem] rounded-[40px] font-poppinsR placeholder:text-black"
            type="text"
            placeholder="Name"
          />

          <input
            className="px-4 py-5 ps-6 bg-blue-blur/50 text-black text-[1.5rem] rounded-[40px] font-poppinsR placeholder:text-black"
            type="text"
            placeholder="Email"
          />

          <textarea
            rows={10}
            className="px-4 py-5 ps-6 bg-blue-blur/50 text-black text-[1.5rem] rounded-[40px] font-poppinsR placeholder:text-black"
            placeholder="Why you  need our API?"
          />

          <button className="rounded-[50px] submit_btn text-[2rem] w-fit mx-auto text-white mt-5 px-[3rem] py-4 font-poppinsR bg-blue-blur hover:opacity-50">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
