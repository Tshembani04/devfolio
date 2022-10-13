import { AiFillLinkedin, AiFillGitlab, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Tshembani from "../src/public/Tshembani.png";
import code from "../src/public/code.png";
import design from "../src/public/design.png";
import consulting from "../src/public/consulting.png";
import Image3 from "../src/public/kryptoBridge.png";
import Image4 from "../src/public/Tokenomic.png";
import fumba from "../src/public/fumba.png";
import Learn from "../src/public/Learn.png";
import Ubu from "../src/public/Ubu.png";
import web5 from "../src/public/web5.png";
import web6 from "../src/public/web6.png";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">0xRedPill</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/Tshembani Mhlongo's Resume.pdf"
                  download
                >
                  Resume
                {/* <button disabled >Resume Under Construction </button> */}
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Tshembani Mhlongo
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I love building things for the Web. I am a full stack developer, I
              enjoy creating delightful, human-centered digital experiences in
              web2 and web3 . Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 cursor-pointer py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/tshembani-mhlongo/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Tshembani04">
            
                <AiFillGithub />
              </a>
            </div>
            <div className="flex" >
                <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative items-center overflow-hidden mt-20 md:h-96 md:w-96">
              <img src={Tshembani}  layout="fill" objectFit="contain" />
            </div>
            </div>
          
          </div>
        </section>
        <section>
          <div>
          <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance developer 
              , I've done remote work for
              <span className="text-teal-500"> agencies </span>
             and few <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including web development,
              programming and web3 blockchain solutions.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Programming
              </h3>
              <p className="py-2">
                These progamming languages helps me Creating elegant solutions suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Programming Languages and FrameWorks</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">Solidity</p>
              <p className="text-gray-800 py-1">Web3js</p>
              <p className="text-gray-800 py-1">Moralis</p>
              <p className="text-gray-800 py-1">HardHat</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Rest Api</p>
              <p className="text-gray-800 py-1">Loopback</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">Redis</p>
              <p className="text-gray-800 py-1">Firebase</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Frontend Languages</h4>
              <p className="text-gray-800 py-1">ReactJs</p>
              <p className="text-gray-800 py-1">NextJs</p>
              <p className="text-gray-800 py-1">AngularJr</p>
              <p className="text-gray-800 py-1">Html & Css</p>
              <p className="text-gray-800 py-1">TailwindCss</p>
              <p className="text-gray-800 py-1">Material-UI</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">Flutter</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Tools</h3>
              <p className="py-2">
               Tools that helps me leveling up my tech journey.
              </p>
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1">VS Coder</p>
              <p className="text-gray-800 py-1">Swagger</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Postman</p>
              <p className="text-gray-800 py-1">GitHub</p>
              <p className="text-gray-800 py-1">GitLab</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
          
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://krypto-bridge.vercel.app/">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={Image3}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={Image4}
                />
       
            </div>
            
            <div className="basis-1/3 flex-1">
              <a href="https://fumba-early-access.vercel.app/">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={fumba}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://www.learncrypto01.com/">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={Learn}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://ubu-afro-nft.webflow.io/">
                <img
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={Ubu}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
