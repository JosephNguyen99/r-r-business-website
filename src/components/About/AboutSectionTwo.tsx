import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/closet.png"
                alt="closet"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/closet.png"
                alt="closet"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
              {/* <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              /> */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Why Choose Us
                </h3>
                <ul className="list-disc list-inside text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <li className="mb-4"><strong>Easy Financing:</strong> We offer flexible financing options to make your projects affordable.</li>
                  <li className="mb-4"><strong>Free, At Home Consultations:</strong> Our experts will visit your home to provide personalized consultations at no cost.</li>
                  <li className="mb-4"><strong>Award Winning Service:</strong> Our commitment to excellence has earned us numerous awards and recognitions.</li>
                  <li className="mb-4"><strong>Licensed & Insured:</strong> We are fully licensed and insured, ensuring peace of mind for our clients.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
