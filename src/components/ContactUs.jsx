import React from 'react'

const ContactUs = () => {
  return (
    <div className='bg-[url(/pic.png)] sm:bg-[url(/backgroundImg.png)] bg-cover bg-center h-screen w-screen bg-fixed flex items-center justify-center'>
        <div className="max-w-4xl">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-[#58534C] p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="mb-6">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Address</p>
                    <p>Accurate Institute of Management and Technology, Knowledge park 3, Gautam Buddha Nagar, Greater Noida</p>
                    {/* Responsive iframe */}
                    <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3507.517760932864!2d77.48429466209515!3d28.46395002565619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d28.463987999999997!2d77.486707!4m5!1s0x390cc1e21944cc75%3A0xef113099ccfa17c4!2sACCURATE%20INSTITUTE%20OF%20MANAGEMENT%20AND%20TECHNOLOGY%2C%20Knowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!3m2!1d28.464032!2d77.48704649999999!5e0!3m2!1sen!2sin!4v1727698958452!5m2!1sen!2sin" 
                        className="absolute top-0 left-0 w-full h-full border-0"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>9958777659</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>emulationclub@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-[#58534C] mb-4">Send us a Message</h3>
              <form>
                {/* Form Fields */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership</option>
                    <option value="events">Events</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder='Message sending is not working for now will inplement in hacktoberfest.' required></textarea>
                </div>
                <button type="submit" className="w-full bg-[#58534C] text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
