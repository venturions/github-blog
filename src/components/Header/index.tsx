import Image from "next/image";
import blogLogo from "../../assets/blog-logo.svg";
import headerLeftEffect from "../../assets/header-left-effect.svg";
import headerRightEffect from "../../assets/header-right-effect.svg";

export function Header() {
  return (
    <header className="flex h-72 w-auto items-center justify-between bg-header-background max-lg:justify-center">
      <Image
        className="h-auto w-auto max-lg:hidden"
        src={headerLeftEffect}
        alt={""}
        priority={true}
      />
      <Image src={blogLogo} height={98} alt={""} />
      <Image
        className="h-auto w-auto max-lg:hidden"
        src={headerRightEffect}
        alt={""}
        priority={true}
      />
    </header>
  );
}
