import { Icon } from "@iconify/react/dist/iconify.js";

export const Footer = () => {
  return (
    <div className="w-full border border-black mx-auto h-[12dvh] bg-pri-4 ">
      <div className=" text-pri-3 flex md:justify-between justify-center items-center md:flex-row flex-col-reverse gap-4 md:max-w-[75%] w-full h-full mx-auto px-4">
        <h1 className="font-bold text-xs md:text-base max-w-md md:w-full ">
          Copyright &copy; 2024. All rights are reserved
        </h1>
        <div>
          <div className="flex justify-start items-center gap-6">
            <Icon
              className="cursor-pointer text-pri-3 text-3xl"
              icon="grommet-icons:github"
            />
            <Icon
              className="cursor-pointer text-pri-3 text-3xl"
              icon="brandico:linkedin-rect"
            />
            <Icon
              className="cursor-pointer text-pri-3 text-3xl"
              icon="bxl:gmail"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
