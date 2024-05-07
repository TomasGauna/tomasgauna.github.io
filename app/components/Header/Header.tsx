import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/header.css";
import { useEffect, useRef, useState } from "react";

export function Header() {
  function handleCopyToClipboard() {
    const email = 'tomi.gauna08@gmail.com';
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = email;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
  
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        toast.success('Correo copiado al portapapeles', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('No se pudo copiar el correo al portapapeles', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      console.error('No se pudo copiar el texto: ', err);
    } finally {
      document.body.removeChild(tempTextarea);
    }
  }

  // function getGreeting() 
  // {
  //   const currentDate = new Date();
  //   const currentHour = currentDate.getHours();

  //   if (currentHour >= 6 && currentHour < 12) {
  //     return '¡Buenos días!';
  //   } else if (currentHour >= 12 && currentHour < 18) {
  //     return '¡Buenas tardes!';
  //   } else {
  //     return '¡Buenas noches!';
  //   }
  // }

  // return (
  //   <header className='w-full bg-gray-100'>
  //     <div className="container mx-auto py-5 px-4 md:px-8 lg:px-16 xl:px-5">
  //       <div className="flex flex-row items-center justify-between">
  //         <div onClick={handleCopyToClipboard} className="flex items-center">
  //           <span className='cursor-pointer hover:scale-105 hover:text-blue-400 transition-transform duration-300'>tomi.gauna08@gmail.com</span>
  //         </div>
  //         {/* <div>
  //           <span>{getGreeting()}</span>
  //         </div> */}
  //         <div className="flex flex-row gap-3">
          // <Link href={'https://www.linkedin.com/in/tomas-agustin-gauna-373290292/'} passHref>
          //     <Image
          //       alt="Icono de LinkedIn"
          //       src={"/iconos/linkedin.png"}
          //       width={40}
          //       height={40}
          //       className="cursor-pointer hover:scale-110 transition-transform duration-300"
          //     />
          // </Link>
  //           <Link href={'https://github.com/TomasGauna/'} passHref>
  //             <Image
  //                 alt="Icono de Github"
  //                 src={"/iconos/github.png"}
  //                 width={40}
  //                 height={40}
  //                 className="cursor-pointer hover:scale-110 transition-transform duration-300"
  //             />
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </header>
  // );

  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  return (
    <>
      <div className='container'>
        <nav className={`${isNavbarVisible ? "visible" : ""}`}>
          <div onClick={handleCopyToClipboard} className="flex items-center">
            <span className='cursor-pointer hover:scale-105 hover:text-blue-400 transition-transform duration-100'>tomi.gauna08@gmail.com</span>
          </div>
          <div className="nav-items">
            <Link href={'https://github.com/TomasGauna/'} passHref>
              <Image
                  alt="Icono de Github"
                  src={"/iconos/github.png"}
                  width={40}
                  height={40}
                  className="cursor-pointer hover:scale-110 transition-transform duration-100"
              />
            </Link>
            <Link href={'https://www.linkedin.com/in/tomas-agustin-gauna-373290292/'} passHref>
                <Image
                  alt="Icono de LinkedIn"
                  src={"/iconos/linkedin.png"}
                  width={40}
                  height={40}
                  className="cursor-pointer hover:scale-110 transition-transform duration-100"
                />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );

}
