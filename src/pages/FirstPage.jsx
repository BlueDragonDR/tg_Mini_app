import '../App.css';

import Level from "../components/Level";//level label fix
import Tools from "../components/Tools";
import Wallet from "../components/Wallet";
import Friends from "../components/Friends";
import SecretCode from "../components/SecretCode";
import UpPage from "../components/UpPage";
import Animation from '../components/Animation'
import { useState } from 'react';//call the react library

const Firstpage = () => {
  const [step, setStep] = useState(1)
  const handleClick = () => {
    const nextStep = step === 3 ? 1 : step + 1  // Loop between 1, 2, 3
    setStep(nextStep)
    console.log('Current Step:', nextStep)//consol
  }
  return (
    <div className="w-screen h-screen max-w-screen max-h-screen overflow-hidden flex flex-col"
      style={{
        background: `url(${"./assets/1.jpg"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full h-[80%]"
        style={{
          backgroundImage: `url(${"./assets/2.png"})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '167px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0
        }}
      >
        <UpPage />
      </div>
      <div className="w-full,  flex flex-col pt-[155px]" >
        <Level />// we have to keep on the sync at the components of the same level.
        <Tools />
      </div>
      <Wallet />
      <SecretCode />
      <Friends />
      <div className="flex flex-col items-center gap-[5.5px] absolute left-[0px] top-[348px]">
        <div className="font-semibold text-[7.01px] leading-[100%] tracking-[0%] text-center text-[#fff] uppercase">
          Car
        </div>

        <div className="flex rounded-tr-[8px] rounded-br-[8px] border-[1.28px] border-[#6544CF] bg-[#5E2BBA80] items-center justify-center p-[6px_17px]">
          <img
            src="./assets/7.png"
            alt="1"
            className="w-full h-full relative "
          />
          <img
            src="./assets/arrow.png"
            alt="1"
            className="w-full h-full absolute scale-50 hover:scale-75 transition-transform duration-200"
            onClick={handleClick}//apear the event on click
          />
        </div>
      </div>
      <div>
        <Animation step={step}/>
      </div>
      <div className="w-full h-[80%]"
        style={{
          backgroundImage: `url(${"./assets/3.png"})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '142px',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0
        }}
      >
        <div className="flex px-[16px] pt-[20px] pb-[8px] gap-[5px] flex-col text-white">
          <div className="flex w-full h-full flex-row">
            <div className="flex w-full h-full flex-row justify-center gap-[17px]">
              <div className="flex flex-col items-center gap-[10px] text-[10px]">
                <div>HOME</div>
                <img
                  src="./assets/HOME.png"//image position
                  alt="1"
                  className="w-[50px] h-[68px] scale-100 hover:scale-125 transition-transform duration-200"
                ></img>

              </div>
              <div className="flex flex-col items-center gap-[10px] text-[10px]">
                <div>QUESTS</div>
                <img
                  src="./assets/QUESTS.png"
                  alt="1"
                  className="w-[50px] h-[68px] scale-100 hover:scale-125 transition-transform duration-200"
                ></img>

              </div>
              <div className="flex flex-col items-center gap-[15px] text-[10px]">
                <div>ARENA</div>
                <img
                  src="./assets/ARENA.png"
                  alt="1"
                  className="w-[50px] h-[68px] scale-125 hover:scale-150 transition-transform duration-200"
                ></img>

              </div>
              <div className="flex flex-col items-center gap-[10px] text-[10px]">
                <div>SHOP</div>
                <img
                  src="./assets/shop.png"
                  alt="1"
                  className="w-[50px] h-[68px] scale-100 hover:scale-125 transition-transform duration-200"
                ></img>

              </div >
              <div className="flex flex-col items-center gap-[10px] text-[9px]">
                <div>Battle Pass</div>
                <img
                  src="./assets/battle.png"
                  alt="1"
                  className="w-[50px] h-[68px] scale-100 hover:scale-125 transition-transform duration-200"
                ></img>

              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between text-[10px] px-[15px]">
            <div>Beta version 10.0.4</div>
            <div>FPS: 90</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Firstpage;
