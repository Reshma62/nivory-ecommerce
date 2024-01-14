"use client";
import { Image, Input } from "@nextui-org/react";
import logo from "/public/assets/navbar/logo.png";

const Header = () => {
  const user = false;
  return (
    <header>
      <div className="container flex justify-between gap-[70px]">
        <div>
          <Image src={logo.src} alt="logo" />
        </div>
        <div className="flex-1">
          <Input
            isClearable
            radius="lg"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "!cursor-text",
                "py-3",
                "h-auto",
                "px-5",
                "rounded",
                "border border-solid border-[#F1F1F1]",
                "bg-[#F6F6F6]",
              ],
            }}
            placeholder="I'm looking for..."
            endContent={<IoIosSearch />}
          />
        </div>
        <div>login</div>
      </div>
    </header>
  );
};

export default Header;
