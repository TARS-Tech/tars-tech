const TarsRobot = () => {
    return (
        <>

            {/* Tars Robot */}


            <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="pt-8">
                        <img
                            src="/tarsLogoBlack.svg"
                            alt="TARS Technologies Logo"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Hero Content */}
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-12 lg:mt-16 gap-8">
                        {/* Left Column */}
                        <div className="flex-1 max-w-xl">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Empowering Your Careers with Tars Technology
                            </h1>

                            <p className="mt-4 text-lg text-gray-600">
                                At Tars Technology, we believe that skilled technologist are dedicated to developing your Dreams.
                            </p>

                            {/* Black Box Message */}
                            <div className="mt-8 bg-black text-white p-6 rounded-lg shadow-lg">
                                <p className="text-xl sm:text-2xl text-center">
                                    &quot;Hi! Let&apos;s build something extraordinary together, one idea at a time.&quot;
                                </p>
                                <p className="mt-4 text-white text-center text-4xl">
                                    &quot;Saying HII&quot;
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Robot Image */}
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <img
                                src="/tarsRobot.svg"
                                alt="TARS Robot"
                                className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain mb-4"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TarsRobot