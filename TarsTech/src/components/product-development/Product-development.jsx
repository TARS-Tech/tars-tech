import Carousel from '../carousel/Carousel'
import TarsRobot from '../tarsrobot/TarsRobot'

const ProductDevelopment = () => {
    const socialMediaPlatforms = [
        { name: 'LinkedIn', icon: '/linkedin-black.svg', url: 'https://www.linkedin.com/company/tars-technologies/' },
        { name: 'Behance', icon: '/behance-black.svg', url: 'https://www.instagram.com/tars_tech' },
        { name: 'Dribble', icon: '/dribble-black.svg', url: 'https://www.facebook.com/tarstechnologies' },
        { name: 'Medium', icon: '/medium-svgrepo-com.svg', url: 'https://x.com/TARSTECHNOLOGI1' },
    ]


    const steps = [
        {
            imageSrc: "/image 25.png",
            title: "Product Prototyping",
            description: "Prototyping your future product allows you to reveal assumptions and biases you have towards your ideas, uncover insights about your users that can be used to improve the overall design before investing time and money into development.",
        },
        {
            imageSrc: "/image 24.png",
            title: "Product Prototyping",
            description: "Prototyping your future product allows you to reveal assumptions and biases you have towards your ideas, uncover insights about your users that can be used to improve the overall design before investing time and money into development.",
        },
        {
            imageSrc: "/image 26.png",
            title: "Product Prototyping",
            description: "Prototyping your future product allows you to reveal assumptions and biases you have towards your ideas, uncover insights about your users that can be used to improve the overall design before investing time and money into development.",
        },
    ];


    // Tech Stack

    const technologies = [
        {
            name: "Angular",
            imageSrc: "/angular.png",
            alt: "Angular Logo"
        },
        {
            name: "React",
            imageSrc: "/react.png",
            alt: "React Logo"
        },
        {
            name: "Vue",
            imageSrc: "/vue.png",
            alt: "Vue.js Logo"
        },
        {
            name: "Node.js",
            imageSrc: "/nodejs.png",
            alt: "Node.js Logo"
        },
        {
            name: "Python",
            imageSrc: "/python.png",
            alt: "Python Logo"
        },
        {
            name: "React Native",
            imageSrc: "/react-native.png",
            alt: "React Native Logo"
        },
        {
            name: "Flutter",
            imageSrc: "/flutter.png",
            alt: "Flutter Logo"
        }
    ];


    return (

        <>
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                            Building Product From Scratch
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                            TARS Technologies can become a long-term reliable partner, offering full-cycle headache-free software services. We can become your complete solutions provider, from an initial concept to UI/UX design, development, pre-release festing. and post-release support.
                        </p>
                    </div>

                    {/* Right Illustration */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/Fc-product-development.png"
                            alt="Product Development"
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




            <div className="min-h-96 bg-gray-100 p-4 md:p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-normal text-center mb-2">
                        In Our Software Development Process,
                    </h1>
                    <h2 className="text-xl md:text-2xl font-normal text-center mb-12">
                        we follow few key big steps
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center relative">
                                {/* Image */}
                                <div className="mb-8 relative">
                                    <img
                                        src={step.imageSrc}
                                        alt={`Step ${index + 1}`}
                                        className="w-16 h-16"
                                    />
                                </div>

                                {/* Arrow for desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-[calc(100%_-_2rem)] w-16 h-0.5 bg-black transform translate-x-1/2" />
                                )}

                                {/* Content */}
                                <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                                <p className="text-lg text-gray-600 text-center">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Our Tech Stack */}


            <div className="w-full bg-white py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-normal text-center mb-16">
                        Our Technology Stack
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12 items-center justify-items-center">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="w-20 h-20 flex items-center justify-center"
                            >
                                <img
                                    src={tech.imageSrc}
                                    alt={tech.alt}
                                    className="w-16 h-16 object-contain"
                                />
                                <div>{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <Carousel />

            <TarsRobot />

        </>
    );
};

export default ProductDevelopment;

