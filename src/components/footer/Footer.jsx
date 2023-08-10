import { FaGithubAlt, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa"


function Footer() {

    return (
      <footer className="w-9/12 h-20 my-6 mx-auto flex content-center" >
          <div className="w-full mt-10 flex flex-col">
            <div className="flex justify-center" >
              <a href="https://github.com/Florencia-Navarro" target="_blank" className="mx-2">
                <FaGithubAlt />
              </a>
              <a href="mailto:cecine_flor@hotmail.com"  target="_blank" className="mx-2">
                <FaRegEnvelope />
              </a>
            </div>
              <p className="text-center my-4">Hecho por Florencia Navarro</p>
          </div>
      </footer>
    )
  }
      
  export default Footer
      

  