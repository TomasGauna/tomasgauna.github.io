import React from 'react';
import Box from '../Box/Box';

function Experiencia() {
  const projects = [
    {
      title: "Tabla Didáctica",
      description: "Aplicación android que le enseña a niños los animales, colores y numeros en 3 idiomas que son el ingles, portugues y español",
      images: ["/iconos/angular.png", "/iconos/ionic.png", "/iconos/html.png", "/iconos/css.png", "/iconos/sass.png"],
      repoLink: "https://github.com/TomasGauna/app_tabla-didactica_android"
    },
    {
      title: "Backend SLIM",
      description: "Una breve descripción del proyecto 2.",
      images: ["/iconos/angular.png"],
      repoLink: "https://github.com/TomasGauna/modelo_sp_progIII/tree/main/modelo-sp"
    },
    {
      title: "Backend y Frontend",
      description: "Una breve descripción del proyecto 3.",
      images: ["/iconos/github.png"],
      repoLink: "https://github.com/TomasGauna/sp_laboIII"
    },
    {
      title: "Backend PHP",
      description: "LO TENGO QUE SUBIR A GITHUB",
      images: ["/iconos/github.png"],
      repoLink: "https://github.com/example/repo4"
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center mt-8 w-full mb-8'>
      {/* <h1 className='text-5xl mb-8'>Experiencia</h1> */}
      <p className='lg:text-5xl text-4xl'>Experiencia</p>
      {/* <div className='flex justify-center gap-6 w-full overflow-x-auto'> */}
      <div className='mb-16 grid lg:flex h-96 w-screen justify-center lg:gap-6'>  
        {projects.map((project, index) => (
          <div key={index} className="mb-8 mt-8">
            <Box {...project} />
          </div>
        ))}
      </div>
      <p>ACA IRIA LO QUE HAGO EN NETNIX, QUE LO TENGO QUE PENSAR BIEN</p>
    </div>
  );
}

export default Experiencia;
