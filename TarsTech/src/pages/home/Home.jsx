import { Link, useNavigate } from 'react-router-dom'
import Carousel from '../../components/carousel/Carousel'
import TarsRobot from '../../components/tarsrobot/TarsRobot'


const Home = () => {

  const socialMediaPlatforms = [
    { name: 'LinkedIn', icon: '/linkedin-svgrepo-com.svg', url: 'https://www.linkedin.com/company/tars-technologies/' },
    { name: 'Behance', icon: '/behance-rounded-svgrepo-com.svg', url: 'https://www.behance.net/tarstechnol' },
    { name: 'Dribble', icon: '/dribble-internet-media-svgrepo-com.svg', url: 'https://dribbble.com/TARS_Technologies' },
    { name: 'Medium', icon: '/medium-svgrepo-com.svg', url: 'https://medium.com/@tarstechnologiesco' },
  ]

  // navigate to about page

  const navigate = useNavigate('')

  const handleNavigate = () => {
    navigate('/about')
  }


  return (

    <>

      {/* hero section */}



      <div className="relative min-h-96 w-full overflow-hidden bg-black text-white">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover opacity-20"
        >
          <source src="/tarsvideo.mp4" type="video/mp4" />
        </video>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex min-h-96 flex-col gap-12">
            {/* Hero Section */}
            <div className="flex flex-col space-y-6 md:pt-12">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-barlow">
                Welcome to TARS Technologies
              </h1>
              <p className="text-xl text-gray-300">
                We are - Experienced, Innovative, and Dedicated to Your Success
              </p>

              <div className="pt-2">
                <button className="rounded-md border border-white/20 px-6 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-black">
                  Learn more
                </button>
              </div>

            </div>

            {/* Middle Section */}
            <div className="py-2 md:py-4">
              <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
                For those who value elegant software
              </h2>
            </div>

            {/* Services Section */}
            <div className="grid gap-4 pb-2 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group cursor-pointer rounded-lg transition-colors">
                <Link to='/home/product-development' className="text-xl font-semibold">Full-Cycle Product Development</Link>
              </div>
              <div className="group cursor-pointer rounded-lg transition-colors">
                <a href='https://tarsdigital.in/' target='_blank' className="text-xl font-semibold">Digital Product Design</a>
              </div>
              <div className="group cursor-pointer rounded-lg">
                <a href='https://tarsdigital.in/' target='_blank' className="text-xl font-semibold">Branding</a>
              </div>
              <div className="group cursor-pointer rounded-lg">
                <Link to='/home/indusrty-automation' className="text-xl font-semibold">Industry Automation Services</Link>
              </div>
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
      </div>


      {/* about us */}


      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 bg-[url('/bg1.png')] bg-cover bg-center opacity-100"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="flex flex-col pt-20">
              <h2 className="text-sm font-medium uppercase tracking-wider text-white">
                About Us
              </h2>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                Discover the Power
                <br />
                <span className="block">Of Our Solution</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white">
                At Tars Technology, we believe that that innovation is the key to
                unlocking new possibilities. our team of visionary thinkers and
                skilled technologist are dedicated to developing your Dreams.
              </p>
              <div className="mt-8">
                <button onClick={handleNavigate} className="rounded-md bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-800">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* our service */}


      <div className="min-h-96 bg-black text-white relative">
        {/* Background smoke effect */}
        <div
          className="absolute inset-0 bg-[url('/bg2.png')] opacity-100 bg-contain bg-no-repeat bg-center pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4 py-16 space-y-32">
          {/* First Section */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Empowering Businesses With Us By Using Social Media Marketing
              </h2>
              <p className="text-gray-400 max-w-lg">
                At Tech Technology, we believe that that innovation is the key to unlocking new possibilities, our team of visionary thinkers and skilled technologists are dedicated to developing your Dreams.
              </p>
              <div className="space-x-4 flex items-center">
                <button className="px-6 py-2 bg-black border border-white text-white rounded hover:bg-gray-200 hover:text-black transition-colors">
                  Learn more
                </button>
                <a href="/contact" className="text-blue-500 hover:text-blue-400">
                  Speak to an Expert!
                </a>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg aspect-video w-full md:order-1 order-2">
              <img src="/social-media.jpg" alt="service" className="w-full h-full object-cover" />
            </div>
          </section>
          <hr className="w-1/2 border-white mx-auto" />

          {/* Second Section */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-700 rounded-lg aspect-video w-full md:order-1 order-2">
              <img src="/web-dev.jpg" alt="service" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6 md:order-2 order-1">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Enhance Your Businesses With Web Development
              </h2>
              <p className="text-gray-400 max-w-lg">
                At Tech Technology, we believe that that innovation is the key to unlocking new possibilities, our team of visionary thinkers and skilled technologists are dedicated to developing your Dreams.
              </p>
              <div className="space-x-4 flex items-center">
                <button className="px-6 py-2 bg-black border border-white text-white rounded hover:bg-gray-200 hover:text-black transition-colors">
                  Learn more
                </button>
                <a href="/contact" className="text-blue-500 hover:text-blue-400">
                  Speak to an Expert!
                </a>
              </div>
            </div>
          </section>
          <hr className="w-1/2 border-white mx-auto" />

          {/* Third Section */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Make Your Sites Attractive With Us By Using UI/UX Designing
              </h2>
              <p className="text-gray-400 max-w-lg">
                At Tech Technology, we believe that that innovation is the key to unlocking new possibilities, our team of visionary thinkers and skilled technologists are dedicated to developing your Dreams.
              </p>
              <div className="space-x-4 flex items-center">
                <button className="px-6 py-2 bg-black border border-white text-white rounded hover:bg-gray-200 hover:text-black transition-colors">
                  Learn more
                </button>
                <a href="/contact" className="text-blue-500 hover:text-blue-400">
                  Speak to an Expert!
                </a>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg aspect-video w-full">
              <img src="/ui-ux.jpg" alt="service" className="w-full h-full object-cover" />
            </div>
          </section>
          <hr className="w-1/2 border-white mx-auto" />
        </div>
      </div>





      {/* our story */}


      <div className="w-full min-h-full bg-neutral-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-sm font-medium mb-2">Meet the team</h3>
          <h2 className="text-center text-4xl font-bold mb-16">Our Story</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {/* Trusted Adviser */}
            <div className="flex flex-col items-center text-center md:border-r border-gray-300 px-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Trusted Adviser</h3>
              <p className="text-gray-600 leading-relaxed">
                At Tars Technology, we believe that skilled technologist are dedicated to developing your Dreams.
              </p>
            </div>

            {/* Our Value */}
            <div className="flex flex-col items-center text-center md:border-r border-gray-300 px-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Our Value</h3>
              <p className="text-gray-600 leading-relaxed">
                At Tars Technology, we believe that skilled technologist are dedicated to developing your Dreams.
              </p>
            </div>

            {/* Stay Connected */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Stay Connected</h3>
              <p className="text-gray-600 leading-relaxed">
                At Tars Technology, we believe that skilled technologist are dedicated to developing your Dreams.
              </p>
            </div>
          </div>
        </div>
      </div>






      <Carousel />


      <TarsRobot />



    </>
  )
}

export default Home