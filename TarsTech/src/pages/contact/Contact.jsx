import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    number: '',
    message: '',
  })
  const [popup, setPopup] = useState({ message: '', isSuccess: false, show: false })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://tars-tech-backend.vercel.app/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          number: formData.number,
          message: formData.message,
        }),
      })
      if (response.ok) {
        setPopup({ message: 'Message sent successfully!', isSuccess: true, show: true })
        setFormData({
          lastName: '',
          firstName: '',
          email: '',
          number: '',
          message: '',
        })
      } else {
        setPopup({ message: 'Failed to send message. Please try again.', isSuccess: false, show: true })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setPopup({ message: 'An error occurred. Please try again.', isSuccess: false, show: true })
    }

    // Hide the popup after 5 seconds
    setTimeout(() => {
      setPopup({ ...popup, show: false })
    }, 5000)
  }

  return (
    <>
      {/* Popup */}
      {popup.show && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-lg px-6 py-4 text-white shadow-lg transition-all duration-300 ${
            popup.isSuccess ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {popup.message}
        </div>
      )}

      {/* contact form */}
      <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mb-12 text-lg text-gray-300">
            Reach out, and let&apos;s create a universe of possibilities together!
          </p>

          <div className="overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Form Section */}
              <div className="p-6 md:p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="mb-2 text-2xl font-bold text-white">
                    Let&apos;s connect constellations
                  </h2>
                  <p className="text-sm text-gray-400">
                    Let&apos;s align our constellations! Reach out and let the magic of collaboration with Tars Technologies.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full rounded-lg bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full rounded-lg bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full rounded-lg bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full rounded-lg bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full rounded-lg bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-black px-8 py-4 text-white transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    Send it to the TARS 🚀
                  </button>
                </form>
              </div>

              {/* Image Section */}
              <div className="relative hidden md:block">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <img
                    src="/astronaut.svg"
                    alt="Astronaut in space"
                    className="w-full max-w-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      <div style={{ textAlign: "center" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3106079810873!2d79.05486597427621!3d21.140033783949374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c16fe7f30a71%3A0x96d1eb35911d1226!2sTARS%20Technologies!5e0!3m2!1sen!2sin!4v1733913839065!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          title="TARS Technologies Location"
        ></iframe>
      </div>
    </>
  )
}

export default Contact
