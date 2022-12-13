import Image from 'next/image';
import MyImg from '../public/assets/image2.svg';

export default function HeroSectionTwo() {
    return (
        <div className="my-auto h--[600px] sm:mt-10" id="aboutpage">
            <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">
                <div className="p-4 sm:p-2 mr-auto md:p-0">
                    <Image src={MyImg} width={500} height={500} alt="mainlogo2" loading="lazy" />
                </div>
                <div className="p-4 sm:p-2 m-auto space-y-6 md:p-0">
                    <p className="text-[#3D4C61] text-[24px] sm:text-[35px] font-900 flex justify-start items-center">
                        <img src="/assets/squres.png" alt="squares" className="w-10 sm:w-6 h-10 sm:h-6 mr-2" />
                        Why choose us?
                    </p>
                    <p className="text-[#696969] font-400 text-[16px] text-justify md:px-0 md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    );
}