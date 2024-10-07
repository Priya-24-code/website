import { LocateFixedIcon, MailIcon, PhoneIcon } from "lucide-react";

function ContactUs() {
    return (
        <div className="flex-1 max-w-screen-2xl min-h-screen mx-auto flex items-center justify-center p-2">
            <div
                className={
                    "shadow-2xl rounded-lg overflow-hidden border dark:border-stone-500" +
                    " base-theme border-theme"
                }
            >
                <div className="md:flex backdrop-blur-md">
                    <div className="md:w-1/2 bg-stone-100 dark:bg-tertiary p-8 ">
                        <h2 className="text-3xl font-bold mb-4 ">
                            Get in Touch
                        </h2>
                        <p className="mb-6">
                            We&apos;d love to hear from you. Send us a message
                            and we&apos;ll respond as soon as possible.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <LocateFixedIcon className="size-5 shrink-0 m-1.5 ml-0" />
                                <div>
                                    <p className="font-medium">Address</p>
                                    <p className="text-sm">
                                        Accurate Institute of Management and
                                        Technology, Knowledge park 3, Gautam
                                        Buddha Nagar, Greater Noida
                                    </p>
                                    <div className="relative pt-[56.25%]">
                                        <iframe
                                            title=" AIMT Location"
                                            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3507.517760932864!2d77.48429466209515!3d28.46395002565619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d28.463987999999997!2d77.486707!4m5!1s0x390cc1e21944cc75%3A0xef113099ccfa17c4!2sACCURATE%20INSTITUTE%20OF%20MANAGEMENT%20AND%20TECHNOLOGY%2C%20Knowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!3m2!1d28.464032!2d77.48704649999999!5e0!3m2!1sen!2sin!4v1727698958452!5m2!1sen!2sin"
                                            className="absolute top-0 left-0 w-full h-full border-0 aspect-video"
                                            allowFullScreen={true}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <PhoneIcon className="size-5 shrink-0 m-1.5 ml-0" />
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p>9958777659</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MailIcon className="size-5 shrink-0 m-1.5 ml-0" />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p>emulationclub@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8 ">
                        <h3 className="text-2xl font-bold mb-4">
                            Send us a Message
                        </h3>
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block font-medium mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 text-black"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block  font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 text-black"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="subject"
                                    className="block  font-medium mb-2"
                                >
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 text-black"
                                    required
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">
                                        General Inquiry
                                    </option>
                                    <option value="membership">
                                        Membership
                                    </option>
                                    <option value="events">Events</option>
                                    <option value="support">
                                        Technical Support
                                    </option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 text-black"
                                    placeholder="Message sending is not working for now will implement in hacktoberfest."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-tertiary text-white font-semibold py-2 px-4 rounded-md hover:bg-stone-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
