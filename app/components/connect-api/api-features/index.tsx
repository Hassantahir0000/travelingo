import Image from "next/image";

export default function APIFeatures() {
  return (
    <div className="w-screen min-h-screen px-10  h-auto bg-light-sky-blue  pt-2 pb-[20rem] mt-[-4rem] rounded-tl-[3%] rounded-tr-[3%]">
      <h2 className="self-stretch font-poppinsM text-black text-[4.25rem] mt-[68px] font-normal  leading-normal">
        Our API’s Features
      </h2>
      <p className="self-stretch  text-black text-[1.9rem] font-poppinsR  font-normal mt-4 ml-4 mb-5 leading-[2.5rem]">
        Your all-in-one solution for Visa Information, Weather, Culture, and
        more!
      </p>

      <div className="flex flex-col gap-y-5 mt-16">
        <div className="bg-white rounded-[50px] px-[40px] py-[30px]">
          <p className="self-stretch  text-black text-[2.2rem] font-poppinsM   ml-4">
            Visa API
          </p>

          <p className="self-stretch  text-black text-[1.2rem] mt-3 font-poppinsR ml-4">
            The Visa API is essential for travelers needing information about
            entry requirements. It details the documents required for visa
            applications, provides embassy contact information, and covers
            health and insurance requirements. Additionally, it offers guidance
            on visa extensions and rules regarding overstaying.
          </p>
        </div>

        <div className="bg-white rounded-[50px] px-[40px] py-[30px]">
          <p className="self-stretch  text-black text-[2.2rem] font-poppinsM   ml-4">
            Travel Budget API
          </p>

          <p className="self-stretch  text-black text-[1.2rem] mt-3 font-poppinsR ml-4">
            The Travel Budget API assists travelers in planning their expenses.
            It covers various aspects such as: Lodging/Hotel: Information about
            hotel names, fare ranges, and star ratings. Food & Sightseeing:
            Details on food prices and tickets for sightseeing attractions. Gift
            Shopping: Information on gift items, their prices, and gift shopping
            tips. Commute: Average fare for commuting within the destination.
          </p>
        </div>

        <div className="bg-white rounded-[50px] px-[40px] py-[30px]">
          <p className="self-stretch  text-black text-[2.2rem] font-poppinsM    ml-4">
            Weather API
          </p>

          <p className="self-stretch  text-black text-[1.2rem] mt-3 font-poppinsR ml-4">
            The Weather API provides comprehensive weather information for a
            given country or city. This includes the name of the country, local
            time, temperature in Celsius, wind speed in kilometers per hour,
            weather conditions (such as sunny, rainy, etc.), weather pictures,
            humidity levels, and cloud cover.
          </p>
        </div>

        <div className="bg-white rounded-[50px] px-[40px] py-[30px]">
          <p className="self-stretch  text-black text-[2.2rem] font-poppinsM    ml-4">
            Food API
          </p>

          <p className="self-stretch  text-black text-[1.2rem] mt-3 font-poppinsR ml-4">
            The Food API helps travelers explore the culinary scene of their
            destination. It lists the best bars and cafes, street food options,
            fine dining establishments, snack spots, and various types of
            restaurants, ensuring that users can find suitable dining options
            that match their preferences.
          </p>
        </div>

        <div className="bg-white rounded-[50px] px-[40px] py-[30px]">
          <p className="self-stretch  text-black text-[2.2rem] font-poppinsM   ml-4">
            Local Customs API
          </p>

          <p className="self-stretch  text-black text-[1.2rem] mt-3 font-poppinsR ml-4">
            The Local Customs API provides crucial information on the social and
            cultural etiquette of a destination. It includes do&apos;s and
            don&apos;ts, local etiquettes, dress codes, things to avoid saying,
            and areas to avoid, helping travelers to navigate social
            interactions respectfully and safely.
          </p>
        </div>

        <div className="bg-white rounded-[50px] px-[40px] py-[30px]">
          <p className="self-stretch  text-black text-[2.2rem] font-poppinsM    ml-4">
            Flight API
          </p>

          <p className="self-stretch  text-black text-[1.2rem] mt-3 font-poppinsR ml-4">
            The Flights API provides essential information regarding air travel.
            It includes details about departure and arrival locations and the
            airfare costs, helping travelers to plan and book their flights
            efficiently. These APIs collectively offer a comprehensive suite of
            tools for travelers to plan their trips meticulously, ensuring they
            have access to relevant information about their destinations.
          </p>
        </div>
      </div>
    </div>
  );
}
