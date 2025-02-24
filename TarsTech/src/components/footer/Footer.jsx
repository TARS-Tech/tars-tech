import { Link } from "react-router-dom";

const Footer = () => {

    const socialMediaPlatforms = [
        { name: 'LinkedIn', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', url: 'https://www.linkedin.com/company/tars-technologies/' },
        { name: 'Instagram', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg', url: 'https://www.instagram.com/tars_tech' },
        { name: 'Facebook', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png', url: 'https://www.facebook.com/tarstechnologies' },
        { name: 'Twitter', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg', url: 'https://x.com/TARSTECHNOLOGI1' },
        { name: 'Behance', icon: '/behance-rounded-svgrepo-com.svg', url: 'https://www.behance.net/tarstechnol' },
        { name: 'Dribble', icon: '/dribble-internet-media-svgrepo-com.svg', url: 'https://dribbble.com/TARS_Technologies' },
        { name: 'Medium', icon: '/medium-svgrepo-com.svg', url: 'https://medium.com/@tarstechnologiesco' },
    ]


    const menuItems = [
        { name: 'Services', href: '/services' },
        { name: 'Products', href: '/products' },
        { name: 'Cases', href: '/cases' },
        { name: 'Blog', href: '/blog' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Get Quote', href: '/get-quote' },
    ]

    const details = [
        { name: 'Services', href: '/services' },
        { name: 'Technologies', href: '/technologies' },
        { name: 'Expertise', href: '/expertise' },
        { name: 'Developers', href: '/delopers' },
        { name: 'Industries', href: '/industries' }
    ]


    return (
        <footer className="bg-black text-white py-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    {/* Logo */}
                    <Link to="/" className="mb-6 md:mb-0">
                        <img src="/tarsLogo.svg" alt="TARS Technologies Logo" className="h-16 mb-4" />
                    </Link>

                    {/* Visit Us */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                        <p>81, Gotmare Complex,</p>
                        <p>Dharampeth, WHC Road,</p>
                        <p>Nagpur, Maharashtra,</p>
                        <p>India - 440010</p>
                        <a href="mailto:client@tars.co.in" className="block mt-2 hover:underline">
                            client@tars.co.in
                        </a>
                    </div>

                    {/* Call Us */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                        <p>India</p>
                        <p>+91 911 211 7415</p>
                        <p className="mt-2">United Arab Emirates</p>
                        <p>Coming Soon</p>
                    </div>

                    {/* Company */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Company</h3>
                        <ul className="space-y-1">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Details */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Details</h3>
                        <ul className="space-y-1">
                            {details.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href}
                                        className="text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-800 pt-6">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-sm mb-2">Follow Us :</h4>
                        <div className="flex space-x-4">
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
                                        className="w-6 h-6"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex space-x-4 text-sm">
                        <Link to="/cookie-policy" className="">Cookie Policy</Link>
                        <Link to="/privacy-policy" className="">Privacy Policy</Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-6 pt-6 border-t border-gray-800 text-sm">
                    <p>Copyright © 2024 TARS Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

