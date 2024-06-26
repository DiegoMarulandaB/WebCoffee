import Link from 'next/link';
import React from 'react'
import { Separator } from '../ui/separator';

const dataFooter = [
  {
    id: 1,
    name: "Sobre nosotros",
    link: "/#",
  },
  {
    id: 2,
    name: "Productos",
    link: "/#shopping",
  },
  // {
  //   id: 3,
  //   name: "Mi cuenta",
  //   link: "#",
  // },
  // {
  //   id: 4,
  //   name: "Politicas de privacidad",
  //   link: "/#PrivacyPolicy",
  // },
];
const Footer = () => {

const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm font-normal">
            &copy;&nbsp;2023-{currentYear} {""}
            <span>WebCoffe {""}</span>
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-white ">
            {dataFooter.map((data) => (
              <li key={data.id}>
                <Link
                  href={data.link}
                  className="no-underline hover:underline underline-offset-8 me-4 md:me-6 mt-2 sm:mt-0 block"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 bg-border  sm:mx-auto bg-[#13161c] dark:bg-white lg:my-8" />
      </div>
      <span className="block text-sm text-black sm:text-center dark:text-white ml-4 sm:pt-0  mb-4">
        <Link href={"https://diegomarulanda.vercel.app/"}>
          Diego Marulanda. {""}
        </Link>
        Todos los derechos reservados.
      </span>
    </footer>
  );
}

export default Footer