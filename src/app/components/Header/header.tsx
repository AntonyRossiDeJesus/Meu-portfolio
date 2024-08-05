import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full p-2 h-14 border-b border-b-gray-500 bg-black">
        <div className="container max-w-7xl">
          <nav className="flex justify-between md:justify-start gap-6">
            <Link href={"/"}> {" Início "} </Link>
            <Link href={"https://api.whatsapp.com/send?phone=5548988046418"}>
              {" "}
              {" Contato "}{" "}
            </Link>
            <Link href={"/projects"}> {" Projetos "} </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
