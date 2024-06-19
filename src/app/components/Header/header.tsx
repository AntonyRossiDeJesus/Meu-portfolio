import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full p-2 h-14 border-b border-b-gray-500">
        <div className="container max-w-7xl">
          <nav className="flex justify-between md:justify-start gap-6">
            <Link href={"/"}> {" Início "} </Link>
            <Link href={"#about"}> {" Sobre "} </Link>
            <Link href={"#contato"}> {" Contato "} </Link>
            <Link href={"#projects"}> {" Projetos "} </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
