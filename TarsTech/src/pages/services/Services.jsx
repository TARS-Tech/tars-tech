// import { Clock, Box, Code, Smartphone, Palette, Activity } from 'lucide-react'
import Carousel from '../../components/carousel/Carousel'
import TarsRobot from '../../components/tarsrobot/TarsRobot'

const Service = () => {

    const services = [
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: "Branding & Digital Design",
            description:
                "We create impactful brand identities that resonate with your target audience. From logo design to complete brand guidelines, we ensure your brand stands out and communicates its value effectively",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                    <path d="M7 7h.01" />
                </svg>
            ),
            title: "Industry Automation Services",
            description:
                "Transform your operations with cutting-edge automation solutions. We help businesses streamline processes, enhance productivity, and reduce costs through tailored automation strategies.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: "Digital Marketing & Consultancy",
            description:
                "Our data-driven digital marketing strategies ensure maximum visibility and engagement for your business. From SEO and PPC to social media management, we help you achieve measurable growth.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
            title: "IT Consultancy",
            description:
                "Leverage our expertise to navigate complex IT challenges. We provide strategic guidance to optimize your technology infrastructure and align it with your business goals.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            ),
            title: "Media Production",
            description:
                "Engage your audience with high-quality media content. We specialize in video production, photography, and multimedia solutions that tell your story effectively.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                    <path d="M7 7h.01" />
                </svg>
            ),
            title: "Website, Customized Software, and Mobile App Design & Development",
            description:
                "We design and develop robust websites, tailored software, and intuitive mobile apps that enhance user experience and drive business success. Our solutions are scalable, secure, and built to last.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                    <path d="M7 7h.01" />
                </svg>
            ),
            title: "Social Media Management",
            description:
                "Build and maintain a strong online presence with our social media solutions. We manage your profiles, create engaging content, and analyze performance to maximize reach and engagement.",
        },
        {
            icon: (
                <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            ),
            title: "E-commerce Solutions",
            description:
                "Take your business online with our e-commerce platforms. From design to deployment, we create scalable and secure solutions that offer seamless shopping experiences.",
        }
    ];




    // const services = [
    //     {
    //         category: "Software & Product Development",
    //         items: [
    //             {
    //                 title: "Agile Team of JS Programmers",
    //                 icon: <Code className="w-8 h-8" />,
    //             },
    //             {
    //                 title: "Product Refreshment",
    //                 icon: <Box className="w-8 h-8" />,
    //             },
    //             {
    //                 title: "Full Cycle Product Development",
    //                 icon: <Clock className="w-8 h-8" />,
    //             },
    //         ],
    //     },
    //     {
    //         category: "Design Service",
    //         items: [
    //             {
    //                 title: "Digital Product Design",
    //                 icon: <Smartphone className="w-8 h-8" />,
    //             },
    //             {
    //                 title: "Branding",
    //                 icon: <Palette className="w-8 h-8" />,
    //             },
    //             {
    //                 title: "Motion Design Company",
    //                 icon: <Activity className="w-8 h-8" />,
    //             },
    //             {
    //                 title: "Motion Design Company",
    //                 icon: <Activity className="w-8 h-8" />,
    //             },
    //         ],
    //     },
    // ]


    const socialMediaPlatforms = [
        { name: 'LinkedIn', icon: '/linkedin-black.svg', url: 'https://www.linkedin.com/company/tars-technologies/' },
        { name: 'Behance', icon: '/behance-black.svg', url: 'https://www.instagram.com/tars_techhttps://www.behance.net/tarstechnol' },
        { name: 'Dribble', icon: '/dribble-black.svg', url: 'https://dribbble.com/TARS_Technologies' },
        { name: 'Medium', icon: '/medium-svgrepo-com.svg', url: 'https://medium.com/@tarstechnologiesco' },
    ]

    return (

        <>
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                            Software Development Service
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                            At Tars Technology, we believe that that innovation is the key to unlocking new possibilities. our team of visionary thinkers and skilled technologist are dedicated to developing your Dreams.
                        </p>
                    </div>

                    {/* Right Illustration */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/ServiceImg.png"
                            alt="Software Development Illustration"
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




            {/* <div className="min-h-screen bg-gray-200 p-4 md:p-8">
                {services.map((section, index) => (
                    <div key={index} className="mb-12">
                        <h2 className="text-xl font-bold mb-6">{section.category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {section.items.map((service, serviceIndex) => (
                                <div
                                    key={serviceIndex}
                                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                                >
                                    <div className="flex justify-center mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-center mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-center text-sm mb-6 flex-grow">
                                        We at TABS strive hard to empower the youth to become self-sustainable with rational
                                        thinking ability to give their best on projects they work on, by providing them top-class
                                        expertise training with the freedom to explore to give the best innovative solutions.
                                    </p>
                                    <button className="mt-auto mx-auto px-6 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300">
                                        LEARN MORE
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div> */}





            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((services, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="mb-4 text-gray-600">{services.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{services.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {services.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="w-1/2 border-black mx-auto h-2" />



            <Carousel />



            <TarsRobot />

        </>
    )
}

export default Service