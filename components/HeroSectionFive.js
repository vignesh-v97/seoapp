import ClientCard from "./ClientCard";
import HeroSectionFourCard from "./HeroSectionFourCard";
import HeroSectionSix from "./HeroSectionSix";
import ProcessCard from "./ProcessCard";


export default function HeroSectionFive() {
    return (
        <div>
            <div className="mx-auto sm:my-10 max-w-7xl mb-3 md:mb-[-100px]">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
                    <HeroSectionFourCard image={"/assets/img4.svg"} text={"Angular JS Consultant"} />
                    <HeroSectionFourCard image={"/assets/img3.svg"} text={"App Development"} />
                    <HeroSectionFourCard image={"/assets/img2.svg"} text={"Custom Development"} />
                    <HeroSectionFourCard image={"/assets/img1.svg"} text={"Maintenance and Testing"} />
                </div>
            </div>
            <div className="bg-[#F7F8FD]">
                <div className="mx-auto max-w-7xl p-4 sm:p-2 md:pt-32">
                    <div className="flex justify-center sm:h-[100px]">
                        <p className="text-[#3D4C61] text-[24px] sm:text-[35px] font-900 font-redHat flex justify-start items-center">
                            <img src="/assets/square2.png" alt="squares" className="mb-6 mr-2 h-10" />
                            Process & Steps
                        </p>
                    </div>
                    <div className="text-[16px] text-[#696969] font-400 text-justify md:px-0 md:text-center mb-6">
                        Commence with the easy-to-hire process for development task and design needs accessing the proficient  developers who deduce the results that work.
                    </div>
                    <div className="grid grid-cols-1 gap-5 mt-10 md:gap-10 md:grid-cols-2 relative mb-10">
                        <ProcessCard extraClass={"box1"} text={"Share Your Requirements"} desc={"Disseminate your project expectations with us to get the services from the best programmers."} count={"01"} />
                        <ProcessCard extraClass={"box2"} text={"Select Shortlisted"} desc={"Disseminate your project expectations with us to get the services from the best programmers."} count={"02"} />
                        <ProcessCard extraClass={"box3"} text={"Discuss With Them"} desc={"Disseminate your project expectations with us to get the services from the best programmers."} count={"03"} />
                        <ProcessCard extraClass={"box4"} text={"Select Model"} desc={"Disseminate your project expectations with us to get the services from the best programmers."} count={"04"} />
                        <div className="middle-bar"></div>
                    </div>
                    <div className="mt-10" id="clientpage">
                        <ClientCard />
                    </div>
                    <div className="pb-10 mt-10 md:mt-20">
                        <HeroSectionSix />
                    </div>
                </div>
            </div>
        </div>
    )
}
