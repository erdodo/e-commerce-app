export default function Register() {
    return (
        <div className="relative">
            <div className="fixed w-screen h-screen -z-10 flex-row flex">
                <div className="h-screen w-[100%] md:w-[50%] bg-[#ECBC76]">
                    <img src="/assets/img_1.png" alt=""/>
                </div>
                <div className="h-screen hidden md:block w-[50%] bg-[#FFFEF9]"></div>
            </div>
            <div className="w-screen h-screen flex flex-col justify-center items-center ">
                <div className="w-[500px] max-w-[90vw] bg-white  shadow-2xl  rounded-3xl p-6 md:p-10">
                    <div className="flex flex-col">
                        {/* Başlık */}
                        <div className="flex flex-row">
                            <div className="w-1/2 flex flex-col">
                                <span className="text-sm md:text-lg mb-2 ">Welcome to lorem</span>
                                <span className="text-4xl md:text-6xl ">Sign up</span>
                            </div>
                            <div className="w-1/2 flex flex-col text-end">
                                <span className="text-sm md:text-md">Have you account?</span>
                                <span className="text-yellow-600">Sign in</span>
                            </div>
                        </div>
                        {/* İnputlar */}
                        <div className="flex flex-col mt-14">
                            <div className="flex flex-col mt-4">
                                <span className="text-lg mb-1">Enter your username or email address</span>
                                <input type="text" className="border border-gray-300 rounded-md p-3" placeholder="Username or email address"/>
                            </div>
                            <div className="flex flex-row mt-4">
                                <div className="flex flex-col w-1/2 mr-2">
                                    <span className="text-lg mb-1">User Name</span>
                                    <input type="text" className="border border-gray-300 rounded-md p-3" placeholder="Username"/>
                                </div>
                                <div className="flex flex-col w-1/2 ml-2">
                                    <span className="text-lg mb-1">Phone Number</span>
                                    <input type="text" className="border border-gray-300 rounded-md p-3" placeholder="Contact Number"/>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <span className="text-lg mb-1">Enter your password</span>
                                <input type="password" className="border border-gray-300 rounded-md p-3" placeholder="Password"/>
                            </div>
                        </div>
                        {/* Kayıt Ol Butonu */}
                        <div className="flex flex-col mt-14">
                            <button className="bg-yellow-600 text-white rounded-md p-3">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}