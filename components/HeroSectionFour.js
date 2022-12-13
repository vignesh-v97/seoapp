export default function HeroSectionFour() {
    return (
        <div className="p-4 sm:p-2 my-auto sm:mt-10" id="servicepage">
            <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-2">
                <div className="p-2 my-auto mr-auto md:p-0">
                    <p className="text-[#3D4C61] text-[24px] sm:text-[35px] font-900 flex justify-start items-center">
                        <img src="/assets/squres.png" alt="squares" className="h-10 mb-2 mr-2" />
                        Get Access to
                        Multi Furious Services
                    </p>
                </div>
                <div className="m-auto my-auto space-y-6 md:p-0 mt-6 sm:mt-0">
                    <p className="text-[#696969] font-400 text-[16px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    );
}