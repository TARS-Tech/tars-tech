import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {

    // carousel

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    }

    const clients = [
        { name: "Marriage", logo: "/marriage.png" },
        { name: "Aiisca", logo: "/AIISCA.png" },
        { name: "Aradhya Infratech", logo: "/ARADHYA.png" },
        { name: "AV", logo: "/AV.png" },
        { name: "BSC", logo: "/BSC.png" },
        { name: "CSI", logo: "/CSI.png" },
        { name: "EDU REACH", logo: "/EDU REACH.png" },
        { name: "ENGLIGHTEN", logo: "/ENGLIGHTEN.png" },
        { name: "ENLIGHT", logo: "/ENLIGHT.png" },
        { name: "GALAXY EXPORTS", logo: "/GALAXY EXPORTS.png" },
        { name: "LEVELUPMATE", logo: "/LEVELUPMATE.png" },
        { name: "LUXGREEN", logo: "/LUXGREEN.png" },
        { name: "MAH", logo: "/MAH.png" },
        { name: "MAHAGENCO", logo: "/MAHAGENCO.png" },
        { name: "MSPD", logo: "/MSPD.png" },
        { name: "MUNCH BOX", logo: "/MUNCH BOX.png" },
        { name: "NASCO", logo: "/NASCO.png" },
        { name: "NATURALS", logo: "/NATURALS.png" },
        { name: "NEUTRON", logo: "/NEUTRON.png" },
        { name: "NGO", logo: "/NGO.png" },
        { name: "PHYSIO", logo: "/PHYSIO.png" },
        { name: "VIS", logo: "/VIS.png" },
        { name: "VISUN", logo: "/VISUN.png" },
        { name: "WEBKINESIS", logo: "/WEBKINESIS.png" },
    ]


    return (
        <>
            {/* carousel */}


            <div className="w-full justify-center h-96 py-12 mb-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">Our Clients</h1>
                    <p className="text-2xl text-center mb-8">At Tars Technology, we believe that skilled technologist are dedicated to developing your Dreams.</p>
                    <Slider {...settings} className="client-logo-slider">
                        {clients.map((client, index) => (
                            <div key={index} className="px-2 py-2">
                                <div className="bg-white rounded-lg shadow-md p-3 md:p-4 h-16 md:h-24 flex items-center justify-center">
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} Logo`}
                                        className="max-h-12 md:max-h-16 w-auto object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Carousel