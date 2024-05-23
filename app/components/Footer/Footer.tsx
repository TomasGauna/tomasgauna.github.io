import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className='border-t border-t-gray-200 pt-10 text-base'>
        <div className='flex flex-col items-center justify-center'>
            <p className='mb-5'>Redes sociales</p>
            <div className='flex justify-center gap-4'>
                <Link href={"https://www.linkedin.com/in/tomas-agustin-gauna-373290292/"}>
                    <Image src={"/iconos/linkedin.png"} alt='' height={60} width={60} />
                </Link>

                <Link href={"https://github.com/TomasGauna/"}>
                    <Image src={"/iconos/github.png"} alt='' height={60} width={60} />
                </Link>

                <Link href={"https://www.instagram.com/tomi_atienzo/"}>
                    <Image src={"/iconos/instagram.png"} alt='' height={60} width={60} />
                </Link>

                <Link href={"https://x.com/tomi_atienzo?s=11"}>
                    <Image src={"/iconos/twitter.png"} alt='' height={60} width={60}/>
                </Link>
            </div>
        </div>
        <div className='text-center mt-10 p-3 flex justify-center gap-5'>
            <p>Tomás Gauna</p>
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
    </footer>
  );
}

export default Footer;
