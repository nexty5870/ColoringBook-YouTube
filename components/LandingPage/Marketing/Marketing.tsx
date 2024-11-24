import MarketingTable from "@/components/docs/MarketingTable/MarketingTable";
import { ButtonCheckout } from "@/components/landing-components";
import config from "@/config";

const Marketing = () => {
  const exMarketingItems = [
    {
      title: "Trendy Startups",
      url: "https://trendystartups.com/",
      linkStrength: 48,
      description: (
        <>
          <p>
            Elit duis exercitation voluptate occaecat esse fugiat incididunt
            cupidatat nostrud in consequat deserunt. Cupidatat exercitation
            pariatur et eiusmod do nostrud proident tempor labore cupidatat
            dolor officia ullamco non.
          </p>
        </>
      ),
    },
    {
      title: " Thereisanaiforthat",
      url: "https://theresanaiforthat.com/",
      linkStrength: 43,
      description: (
        <>
          <p>
            Elit duis exercitation voluptate occaecat esse fugiat incididunt
            cupidatat nostrud in consequat deserunt. Cupidatat exercitation
            pariatur et eiusmod do nostrud proident tempor labore cupidatat
            dolor officia ullamco non.
          </p>
        </>
      ),
    },
    {
      title: "Free Stuff for Developer",
      url: "https://freestuff.dev/",
      linkStrength: 22,
      description: (
        <>
          <p>
            Elit duis exercitation voluptate occaecat esse fugiat incididunt
            cupidatat nostrud in consequat deserunt. Cupidatat exercitation
            pariatur et eiusmod do nostrud proident tempor labore cupidatat
            dolor officia ullamco non.
          </p>
        </>
      ),
    },
  ];
  const exMarketingItemsSmall = [
    {
      title: "Trendy Startups",
      url: "https://trendystartups.com/",
      linkStrength: 48,
      description: (
        <>
          <p>
            Elit duis exercitation voluptate occaecat esse fugiat incididunt
            cupidatat nostrud in consequat deserunt. Cupidatat exercitation
            pariatur et eiusmod do nostrud proident tempor labore cupidatat
            dolor officia ullamco non.
          </p>
        </>
      ),
    },
    {
      title: " Thereisanaiforthat",
      url: "https://theresanaiforthat.com/",
      linkStrength: 43,
      description: (
        <>
          <p>If you provide a ...</p>
        </>
      ),
    },
    {
      title: "Free Stuff for Developer",
      url: "https://freestuff.dev/",
      linkStrength: 22,
      description: (
        <>
          <p>asd...</p>
        </>
      ),
    },
  ];
  return (
    <section className="flex flex-col items-center p-xl bg-white border-[1px] rounded-2xl border-opacity-5 border-black w-[80%] mx-auto mb-12">
      <div className="flex flex-col items-center gap-2x w-full sm:w-[80%]">
        <div className="px-3 py-2 bg-violet-700 bg-opacity-5 rounded-[200px] border border-surface-brand justify-start items-end gap-2 pr-4 flex mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              opacity="0.2"
              d="M17.375 10C17.375 11.3597 16.9718 12.689 16.2164 13.8195C15.4609 14.9501 14.3872 15.8313 13.131 16.3517C11.8747 16.872 10.4924 17.0082 9.15876 16.7429C7.82514 16.4776 6.60013 15.8228 5.63864 14.8614C4.67716 13.8999 4.02238 12.6749 3.7571 11.3412C3.49183 10.0076 3.62798 8.62529 4.14833 7.36905C4.66868 6.11281 5.54987 5.03908 6.68046 4.28365C7.81105 3.52821 9.14026 3.125 10.5 3.125C12.3234 3.125 14.0721 3.84933 15.3614 5.13864C16.6507 6.42795 17.375 8.17664 17.375 10Z"
              fill="#3E00FA"
            />
            <path
              d="M18 10.0001C18.0001 11.7661 17.377 13.4754 16.2405 14.8271C15.1041 16.1788 13.5271 17.0861 11.7873 17.3892C10.0476 17.6923 8.25665 17.3718 6.73001 16.4841C5.20337 15.5964 4.03893 14.1985 3.44178 12.5366C2.84464 10.8746 2.85309 9.05527 3.46566 7.39896C4.07822 5.74264 5.2556 4.3556 6.79043 3.48214C8.32525 2.60868 10.1191 2.30482 11.8559 2.62409C13.5928 2.94336 15.1613 3.86528 16.2852 5.22746C16.341 5.29024 16.3835 5.36362 16.4103 5.44322C16.4371 5.52282 16.4476 5.607 16.4411 5.69074C16.4347 5.77448 16.4114 5.85606 16.3727 5.93061C16.334 6.00515 16.2807 6.07113 16.2159 6.1246C16.1511 6.17808 16.0763 6.21795 15.9957 6.24184C15.9152 6.26572 15.8307 6.27313 15.7473 6.26363C15.6638 6.25412 15.5831 6.2279 15.51 6.18651C15.437 6.14513 15.373 6.08944 15.3219 6.02277C14.4026 4.90817 13.1256 4.14647 11.7081 3.86723C10.2906 3.588 8.82013 3.80848 7.54684 4.49117C6.27356 5.17386 5.27611 6.27659 4.72419 7.61177C4.17226 8.94694 4.09995 10.4321 4.51955 11.8146C4.93915 13.1971 5.82475 14.3915 7.02569 15.1946C8.22663 15.9978 9.66874 16.3601 11.1067 16.2199C12.5446 16.0797 13.8896 15.4456 14.9127 14.4256C15.9359 13.4056 16.5741 12.0626 16.7188 10.6251H10.5C10.3342 10.6251 10.1753 10.5593 10.0581 10.4421C9.94085 10.3248 9.875 10.1659 9.875 10.0001C9.875 9.83435 9.94085 9.67538 10.0581 9.55817C10.1753 9.44096 10.3342 9.37511 10.5 9.37511H17.375C17.5408 9.37511 17.6997 9.44096 17.8169 9.55817C17.9342 9.67538 18 9.83435 18 10.0001Z"
              fill="#3E00FA"
            />
          </svg>
          <span className="text-content-brand font-semibold leading-[18.20px] text-sm">
            SEO & Marketing
          </span>
        </div>
        <h2 className=" text-5xl max-sm:text-lg text-center font-black text-[#1F2937]">
          Magna quis officia ex ex.
        </h2>
        <p className=" text-base font-normal mt-7 text-[#6B7280] text-center">
          Laborum fugiat consectetur adipisicing ea exercitation.
        </p>
      </div>
      <div className="mt-xl  h-[350px] ">
        <div className="relative w-full h-full">
          <div
            className="absolute top-0 left-0 z-10 w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 75%)",
            }}
          />
          <div className="absolute w-[360px] sm:w-[405px] bottom-[15px] sm:bottom-[50px] left-1/2 translate-x-[-50%] z-10">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="64"
                viewBox="0 0 65 64"
                fill="none"
              >
                <path
                  d="M59.125 28.595L47.85 38.435L51.2275 53.085C51.4062 53.8508 51.3552 54.6524 51.0809 55.3894C50.8065 56.1265 50.321 56.7663 49.685 57.2289C49.049 57.6915 48.2907 57.9563 47.505 57.9903C46.7193 58.0243 45.9411 57.8259 45.2675 57.42L32.49 49.67L19.74 57.42C19.0664 57.8259 18.2881 58.0243 17.5024 57.9903C16.7167 57.9563 15.9585 57.6915 15.3225 57.2289C14.6865 56.7663 14.2009 56.1265 13.9266 55.3894C13.6523 54.6524 13.6013 53.8508 13.78 53.085L17.1525 38.45L5.87498 28.595C5.2785 28.0805 4.84719 27.4014 4.63512 26.6429C4.42306 25.8843 4.43968 25.0799 4.68291 24.3308C4.92614 23.5816 5.38515 22.9209 6.00238 22.4315C6.6196 21.9422 7.36757 21.6459 8.15248 21.58L23.0175 20.2925L28.82 6.45249C29.123 5.72628 29.6341 5.10596 30.2889 4.66963C30.9438 4.23331 31.7131 4.00049 32.5 4.00049C33.2869 4.00049 34.0562 4.23331 34.711 4.66963C35.3659 5.10596 35.877 5.72628 36.18 6.45249L42 20.2925L56.86 21.58C57.6449 21.6459 58.3929 21.9422 59.0101 22.4315C59.6273 22.9209 60.0863 23.5816 60.3296 24.3308C60.5728 25.0799 60.5894 25.8843 60.3773 26.6429C60.1653 27.4014 59.734 28.0805 59.1375 28.595H59.125Z"
                  fill="#3E00FA"
                />
              </svg>
              <p className="text-[20px] mb-2 text-center font-semibold text-[#1F2937]">
                Occaecat elit ut pariatur non eu aute reprehenderit dolore incididunt tempor et duis nulla aute.
              </p>
              <p className="text-[16px] mb-2 text-center font-normal text-[#6B7280]">
                Consequat ipsum nostrud eiusmod irure labore.
              </p>
              <div className="mt-4">
                <ButtonCheckout
                  priceId={config.stripe.plans[1].priceId}
                  variantId={config.lemonsqueezy.plans[1].variantId}
                  placement="landing_page"
                  mode={config.lemonsqueezy.plans[1].mode}
                  text="Get Started"
                  withIcon={false}
                />
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <div className="hidden w-full sm:flex">
              <MarketingTable
                marketingItems={exMarketingItems}
                columns={["Website", "Link Strength", "Description"]}
              />
            </div>
            <div className="w-full sm:hidden">
              <MarketingTable
                marketingItems={exMarketingItemsSmall}
                columns={["Website", "Link Strength", "Desc."]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Marketing;
