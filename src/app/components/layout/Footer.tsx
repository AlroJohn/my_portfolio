import { Icon } from "@iconify/react/dist/iconify.js";

export const Footer = () => {
  return (
    <div className="w-full border border-black mx-auto h-fit md:py-0 pb-4 md:h-[12dvh] bg-pri-4 ">
      <div className=" text-pri-3 flex md:justify-between justify-center items-center md:flex-row flex-col gap-6 md:max-w-[75%] w-full h-full mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-8 gap-2">
          <img className="w-fit h-8 md:block hidden" src="/images/footer.png" alt="" />
          <h1 className="font-bold text-xs md:block hidden md:text-base max-w-md md:w-full ">
            Copyright &copy; 2024. All rights are reserved
          </h1>
        </div>

        <div>
          <div className="flex justify-start items-center md:gap-6 gap-3">
          <img className="w-fit h-7 md:hidden block pr-6" src="/images/footer.png" alt="" />
            <Icon
              className="cursor-pointer text-pri-3 w-5 h-5 md:w-8 md:h-8"
              icon="grommet-icons:github"
            />
            <Icon
              className="cursor-pointer text-pri-3 w-5 h-5 md:w-7 md:h-7"
              icon="brandico:linkedin-rect"
            />
            <Icon
              className="cursor-pointer text-pri-3 w-5 h-5 md:w-9 md:h-9"
              icon="bxl:gmail"
            />
          </div>
        </div>
        <h1 className="font-bold text-xs md:hidden block md:text-base max-w-md md:w-full ">
            Copyright &copy; 2024. All rights are reserved
          </h1>
      </div>
    </div>
  );
};
