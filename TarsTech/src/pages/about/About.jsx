import TarsRobot from '../../components/tarsrobot/TarsRobot'
import Carousel from '../../components/carousel/Carousel'

const About = () => {

  // why choose tars


  const features = [
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
      title: "Comprehensive IT Solutions",
      description:
        "From branding and digital design to customized software " +
        "and mobile app development, we provide end-to-end solutions tailored to your business " +
        "needs.",
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
      title: "Innovation-Driven Approach",
      description:
        "We leverage the latest technologies to deliver cuttingedge solutions that foster growth, efficiency, and sustainability.",
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
      title: "Client-Centric Focus",
      description:
        "Your success is our priority. We work closely with you to, understand your goals and craft strategies that deliver measurable results.",
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
      title: "Expertise Across Industries",
      description:
        "With a diverse portfolio of services, we cater to businesses across various sectors, providing scalable and impactful solutions.",
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
      title: "Global Standards, Local Insights",
      description:
        "We combine international best practices with a deep understanding of local markets to deliver solutions that truly resonate.",
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
      title: "Proven Track Record",
      description:
        "Our success stories reflect our commitment to excellence, reliability, and innovation. We have a proven track record of delivering impactful solutions that drive growth and success.",
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
      title: "Dedicated Support",
      description:
        "Our team ensures seamless execution and round-the-clock support, so your business never misses a beat.",
    },
  ];




  // our founders

  const foundingMembers = [
    {
      id: 1,
      name: 'Sumedh Boudh',
      role: 'Founder',
      imageUrl: '/sumedh-sir.png'
    },
    {
      id: 2,
      name: 'Shrutika Tirpude',
      role: 'Co Founder',
      imageUrl: '/shrutika-mam.png'
    }
  ]



  //our team

  const team = [
    {
      image: "/naitik-sir.jpg",
      name: "Naitik Rangari",
      role: "Cheif Administration Officer"
    },
    {
      image: "/kshitij.png",
      name: "Kshitij Meshram",
      role: "Team Leader"
    },
    {
      image: "/atharva.png",
      name: "Atharva Rajkondawar",
      role: "Project Manager"
    },
    {
      image: "/amogh.png",
      name: "Amogh Ramteke",
      role: "Operation Head"
    },
    {
      image: "/vedant.png",
      name: "Vedant Ghole",
      role: "Full Stack Developer"
    },
    {
      image: "/vijay.png",
      name: "Vijay Pawar",
      role: "WordPress Developer"
    },
    {
      image: "/nitesh.png",
      name: "Nitesh Tiwari",
      role: "Full Stack Developer"
    },
    {
      image: "/nikhil.png",
      name: "Nikhil Bawane",
      role: "UI/UX Designer"
    },
    {
      image: "/shravan.png",
      name: "Shravan Meshram",
      role: "AI/ML Developer"
    },
    {
      image: "/dhanesh.png",
      name: "Dhanesh Mate",
      role: "App Developer"
    }
  ];


  const socialMediaPlatforms = [
    { name: 'LinkedIn', icon: '/linkedin-black.svg', url: 'https://www.linkedin.com/company/tars-technologies/' },
    { name: 'Behance', icon: '/behance-black.svg', url: 'https://www.behance.net/tarstechnol' },
    { name: 'Dribble', icon: '/dribble-black.svg', url: 'https://dribbble.com/TARS_Technologies' },
    { name: 'Medium', icon: '/medium-svgrepo-com.svg', url: 'https://medium.com/@tarstechnologiesco' },
  ]





  return (

    <>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">About Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                TARS Technologies consists of highly skilled enthusiasts who dream of
                making the world an intelligent and fulfilled placeby empowering
                organizations to gain a competitive edge. Loaded with information
                technology tools, techniques, and a skilled workforce, we provide
                customized solutions for all your business processes. Our proficiency lies in
                developing revolutionary web services for you to meet the challenges of
                tomorrow&apos;s information age.TARS Tech derives its stronghold in providing
                IT training and development with services. We want to provide simple IT
                solutions to clients. We understand the client&apos;s requirements, analyse it
                and provide the best IT solutions.
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/aboutimg1.svg"
                alt="Team collaboration illustration"
                className="w-full h-auto max-w-lg rounded-2xl mx-auto"
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
      </section>
      <hr className="w-1/2 border-black mx-auto h-2" />





      {/* Vision and Mission */}


      <div className="mission-vision-container mx-auto px-4 py-12 max-w-7xl">

        {/* Vision Section */}
        <div className="vision-section flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="vision-image-wrapper w-full md:w-1/2">
            <img
              src="/vision.svg"
              alt="Developer working with headphones"
              className="vision-image w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="vision-content w-full md:w-1/2 text-center md:text-left">
            <h2 className="vision-title text-3xl font-bold mb-6">Vision</h2>
            <p className="vision-description text-gray-700 leading-relaxed">
              To empower businesses worldwide by delivering cutting-edge IT solutions that drive
              innovation, enhance efficiency, and foster sustainable growth. At TARS TECHNOLOGIES, our
              vision is to be a global leader in transforming industries through technology, providing tailored
              solutions that create measurable impact and lasting value for our clients.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="mission-content w-full md:w-1/2 text-center md:text-left">
            <h2 className="mission-title text-3xl font-bold mb-6">Mission</h2>
            <p className="mission-description text-gray-700 leading-relaxed">
              At TARS TECHNOLOGIES, our mission is to deliver innovative, reliable, and tailored IT
              solutions that empower businesses to thrive in a dynamic digital landscape. We are committed to
              driving growth, enhancing operational efficiency, and creating value through cutting-edge
              technology, strategic expertise, and a client-centric approach. By fostering innovation and
              collaboration, we aim to build lasting partnerships and shape a future where technology unlocks
              limitless possibilities for businesses worldwide.
            </p>
          </div>
          <div className="mission-image-wrapper w-full md:w-1/2">
            <img
              src="/mission.svg"
              alt="Modern office space with computers"
              className="mission-image w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>



      <Carousel />


      {/* why choose tars */}


      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose TARS Technologies?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-gray-600">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-1/2 border-black mx-auto h-2" />




      {/* our Founder */}


      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-normal mb-6">Owners</h1>
        <p className="max-w-3xl mx-auto text-lg mb-12">
          We are the defenders of usability, champions of product consistency,
          and the emissaries of enjoyable human-technology interactions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {foundingMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={member.imageUrl}
                alt={`${member.name}, ${member.role}`}
                className="w-full max-w-md h-[400px] object-cover mb-6"
              />
              <h2 className="text-xl font-medium mb-2">{member.name}</h2>
              <p className="text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-1/2 border-black mx-auto h-2" />



      {/* our team */}

      <section className="px-4 py-16 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We are the defenders of usability, champions of product consistency,
            and the emissaries of enjoyable human-technology interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover object-center mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <hr className="w-1/2 border-black mx-auto h-2" />




      <TarsRobot />

    </>
  )
}

export default About
