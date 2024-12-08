import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <header
        className="bg-cover bg-center bg-no-repeat py-10 relative h-[250px]"
        style={{
          backgroundImage: "url('/Rectangle 1.png')", // Replace with your actual background image path
        }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">
          {/* Logo */}
          <div className="mb-2">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              width={64} // Width of the logo
              height={64} // Height of the logo
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-black">Contact</h1>

          {/* Breadcrumb */}
          <p className="text-sm text-black mt-2">
            <span>Home</span> <span className="mx-1">/</span> <span>contact</span>
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
            <p className="text-gray-600 mt-2">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email.
            </p>
            <p className="text-gray-600 mt-2">
              Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>

          {/* Contact Info and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:mr-20">
            {/* Left Side: Contact Info */}
            <div className="space-y-10 lg:ml-40">
              {/* Address */}
              <div className="flex items-start">
                <Image
                  src="/Vector.png" // Replace with your location icon path
                  alt="Address Icon"
                  width={24} // Width of the icon
                  height={24} // Height of the icon
                  className="mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">Address</h4>
                  <p className="text-gray-600">
                    238 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <Image
                  src="/phone.png" // Replace with your phone icon path
                  alt="Phone Icon"
                  width={24} // Width of the icon
                  height={24} // Height of the icon
                  className="mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">Phone</h4>
                  <p className="text-gray-600">Mobile: (+84) 546-6789</p>
                  <p className="text-gray-600">Hotline: (+84) 456-6789</p>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex items-start">
                <Image
                  src="/clock.png" // Replace with your clock icon path
                  alt="Working Time Icon"
                  width={24} // Width of the icon
                  height={24} // Height of the icon
                  className="mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">Working Time</h4>
                  <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                  <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div>
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                    placeholder="Abc"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                    placeholder="Abc@def.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                    placeholder="This is an optional"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
                    rows={5} // Use curly braces to pass a number
                    placeholder="Hi! I’d like to ask about"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-3 rounded-md hover:bg-yellow-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
