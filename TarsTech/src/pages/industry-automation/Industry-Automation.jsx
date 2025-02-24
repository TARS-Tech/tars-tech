import TarsRobot from "../../components/tarsrobot/TarsRobot";


const IndustryAutomation = () => {

    const socialMediaPlatforms = [
        { name: 'LinkedIn', icon: '/linkedin-black.svg', url: 'https://www.linkedin.com/company/tars-technologies/' },
        { name: 'Behance', icon: '/behance-black.svg', url: 'https://www.behance.net/tarstechnol' },
        { name: 'Dribble', icon: '/dribble-black.svg', url: 'https://dribbble.com/TARS_Technologies' },
        { name: 'Medium', icon: '/medium-svgrepo-com.svg', url: 'https://medium.com/@tarstechnologiesco' },
    ]

    const services = [
        {
            title: "Digital Product Design",
            description: "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus."
        },
        {
            title: "Branding",
            description: "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus."
        },
        {
            title: "Manufacturing Full product",
            description: "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus."
        },
        {
            title: "Motion Design Company",
            description: "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus."
        },
        {
            title: "Design Outstaffing",
            description: "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus."
        },
        {
            title: "Product Design",
            description: "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus."
        }
    ];



    const testimonials = [
        {
            name: 'Michael Lacefield',
            role: 'Co-founder, XYZ',
            review:
                '“Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi. Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae non cum sit. Tellus nec in sapien maecenas in vel.”',
        },
        {
            name: 'Jonathan Wise',
            role: 'Co-founder, XYZ',
            review:
                '“Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi. Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae non cum sit. Tellus nec in sapien maecenas in vel.”',
        },
        {
            name: 'Gregory Primmer',
            role: 'Co-founder, XYZ',
            review:
                '“Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi. Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae non cum sit. Tellus nec in sapien maecenas in vel.”',
        },
        {
            name: 'Howard Esparza',
            role: 'Co-founder, XYZ',
            review:
                '“Sit molestie orci a lacus. Consectetur eu accumsan aliquet nisi. Eget mauris commodo dis sed arcu integer fringilla. Egestas vitae non cum sit. Tellus nec in sapien maecenas in vel.”',
        },
    ];


    return (

        <>
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                            Industry Automation Services
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                            TARS Technologies can become a long-term reliable partner, offering full-cycle headache-free software services. We can become your complete solutions provider, from an initial concept to UI/UX design, development, pre-release festing. and post-release support.
                        </p>
                    </div>

                    {/* Right Illustration */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/industryAutomation.png"
                            alt="Industry Automation"
                            className="w-full h-auto max-w-xl mx-auto"
                        />
                    </div>
                </div>
                <div className="flex space-x-4 mt-6">
                    {socialMediaPlatforms.map((platform) => (
                        <a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity duration-200"
                            aria-label={`Follow us on ${platform.name}`}
                        >
                            <img
                                src={platform.icon}
                                alt={`${platform.name} icon`}
                                className="w-8 h-8"
                                width="24"
                                height="24"
                            />
                        </a>
                    ))}
                </div>
            </div>




            {/* About Us */}



            <div className="relative min-h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('/ElipseBackground.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 py-16 md:px-12 lg:px-16 max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-16 md:mb-24">
                        <p className="text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">
                            ABOUT US
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Innovating the Future with <br />
                            Us By Yourself
                        </h1>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {/* Automation Card */}
                        <div className="group">
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 text-purple-400"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Automation
                            </h3>
                            <p className="text-white leading-relaxed">
                                Tincidunt nisi orci sodales non. Netus integer nunc mi nibh cursus vitae ut nulla lobortis. Risus duis bibendum. Tincidunt nisi orci sodales non. Netus integer nunc mi nibh cursus vitae ut nulla lobortis.
                            </p>
                        </div>

                        {/* Precision Card */}
                        <div className="group">
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 text-blue-400"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Precision
                            </h3>
                            <p className="text-white leading-relaxed">
                                Tincidunt nisi orci sodales non. Netus integer nunc mi nibh cursus vitae ut nulla lobortis. Risus duis bibendum. Tincidunt nisi orci sodales non. Netus integer nunc mi nibh cursus vitae ut nulla lobortis.
                            </p>
                        </div>

                        {/* Accuracy Card */}
                        <div className="group">
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-gray-500/20 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 text-gray-400"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Accuracy
                            </h3>
                            <p className="text-white leading-relaxed">
                                Tincidunt nisi orci sodales non. Netus integer nunc mi nibh cursus vitae ut nulla lobortis. Risus duis bibendum. Tincidunt nisi orci sodales non. Netus integer nunc mi nibh cursus vitae ut nulla lobortis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            {/* Our Services  */}


            <div className="bg-gray-100 min-h-screen py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 md:flex md:justify-between md:items-end">
                        <div>
                            <p className="text-sm font-medium text-gray-600 mb-4">OUR SERVICES</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl leading-tight">
                                Revolutionize Your Industry with AI and Robotics
                            </h2>
                        </div>
                        <button className="mt-6 md:mt-0 px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-300">
                            DISCOVER MORE
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#1a1f35] p-6 group hover:bg-[#232942] transition-colors duration-300"
                            >
                                <div className="w-12 h-12 bg-[#2b3151] mb-6"></div>
                                <h3 className="text-white text-xl font-medium mb-4">{service.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <button className="text-[#4f7cff] text-sm font-medium hover:text-blue-400 transition-colors duration-300">
                                    LEARN MORE
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




            {/* Why Choose Us */}



            <div className="bg-gradient-to-b from-black via-[#0f0f1a] to-[#1b1b2d] text-white py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div>
                        <h4 className="text-sm uppercase text-gray-400 mb-2">Why Choose Us</h4>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">The Top Reasons to Choose Us</h2>
                        <div className="space-y-8">
                            {/* Feature 1 */}
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="white"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Expertise in Software and Product</h3>
                                    <p className="text-gray-400 mt-2">
                                        In non vel fermentum aliquam sed amet lorem ultrices lacus. Cras eget tincidunt lectus risus id
                                        ultrices.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="white"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">UI / UX Designs</h3>
                                    <p className="text-gray-400 mt-2">
                                        In non vel fermentum aliquam sed amet lorem ultrices lacus. Cras eget tincidunt lectus risus id
                                        ultrices.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="white"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Expertise in Technologies</h3>
                                    <p className="text-gray-400 mt-2">
                                        In non vel fermentum aliquam sed amet lorem ultrices lacus. Cras eget tincidunt lectus risus id
                                        ultrices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="bg-[#1b1b2d] rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-lg">
                        <h2 className="text-5xl font-bold mb-2">4.8</h2>
                        <div className="flex items-center justify-center mb-2">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-yellow-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4.8l3.13 6.34 7 .96-5.07 4.93 1.19 6.94L12 18.93l-6.25 3.24 1.19-6.94L1.87 12l7-.96L12 4.8z"
                                    />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-400">Google Review</p>
                        <p className="text-gray-400 mt-2">Erat fusce placerat luctus ultrices dolor.</p>
                    </div>
                </div>
            </div>





            {/* Testimonals */}



            <div className="bg-gray-900 text-white py-16 m-10 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Title Section */}
                    <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12">
                        Trusted by <span className="text-blue-400">300+ World Class Companies</span>
                    </h2>
                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    {/* Star Rating */}
                                    <div className="flex space-x-1 text-blue-400">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <svg
                                                key={starIndex}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                {/* Review Text */}
                                <p className="text-sm leading-relaxed mb-4">{testimonial.review}</p>
                                {/* Author Details */}
                                <div>
                                    <h4 className="text-lg font-medium">{testimonial.name}</h4>
                                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>





            <TarsRobot />


        </>





    )
}

export default IndustryAutomation