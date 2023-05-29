import Image from "next/image";
import blogLogo from "../../assets/blog-logo.svg";
import headerLeftEffect from "../../assets/header-left-effect.svg";
import headerRightEffect from "../../assets/header-right-effect.svg";

export function Header() {
  return (
    <header className="flex h-72 w-full items-center justify-between bg-header-background max-lg:justify-center">
      <Image
        className="max-lg:hidden"
        src={headerLeftEffect}
        width={371}
        height={236}
        alt={""}
      />
      <Image src={blogLogo} height={98} alt={""} />
      <Image
        className="max-lg:hidden"
        src={headerRightEffect}
        width={409}
        height={188}
        alt={""}
      />
    </header>
  );
}
