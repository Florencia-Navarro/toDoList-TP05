import { FaGithubAlt, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa"


function Footer() {

    return (
      <>
        <section className="w-9/12 h-20 my-6 mx-auto flex content-center" >
            <article className="w-full mt-10 flex flex-col">
              <article className="flex justify-center" >
                <a href="https://github.com/Florencia-Navarro" target="_blank" className="mx-2">
                  <FaGithubAlt />
                </a>
                <a href="mailto:cecine_flor@hotmail.com"  target="_blank" className="mx-2">
                  <FaRegEnvelope />
                </a>
              </article>
                <p className="text-center my-4">Hecho por Florencia Navarro</p>
            </article>
        </section>
      </>
    )
  }

  
  export default Footer