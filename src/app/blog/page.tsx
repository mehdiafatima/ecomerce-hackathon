import { AiOutlineUser } from "react-icons/ai"; // Admin icon
import { AiOutlineCalendar } from "react-icons/ai"; // Date icon
import { FaTree } from "react-icons/fa"; // Wood icon (example)
import Image from "next/image"; 

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header
        className="bg-cover bg-center bg-no-repeat py-10 relative h-[250px]"
        style={{
          backgroundImage: "url('/Rectangle 1.png')", // Replace with your actual background image path
        }}
      >
        <div className="container mx-auto px-5 md:px-12 lg:px-20 flex flex-col items-center">
          {/* Logo */}
          <div className="mb-2">
  <Image
    src="/logo.png" // Replace with your logo path
    alt="Logo"
    width={64} // Equivalent to `w-16`
    height={64} // Ensures proper aspect ratio
    className="h-auto" // Keeps height responsive
  />
</div>


          {/* Heading */}
          <h1 className="text-4xl font-bold text-black">Blog</h1>

          {/* Breadcrumb */}
          <p className="text-sm text-black mt-2">
            <span>Home</span> <span className="mx-1">/</span> <span>blog</span>
          </p>
        </div>
      </header>

      {/* Main Blog Section */}
      <div className="container mx-auto px-4 lg:px-20 py-12">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-10">
            {/* Blog Post 1 */}
            <article className="rounded-lg  overflow-hidden">
             
<div className="relative">
  <Image
    src="/b1.png" // First blog image
    alt="Blog post 1"
    width={600} // Adjust as per your layout requirements
    height={420} // Maintain a proportional aspect ratio
    className="w-70% h-70% object-cover lg:ml-6"
  />
</div>
              <div className="p-6">
                {/* Icons and Metadata */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <AiOutlineUser className="mr-2 text-yellow-500 text-lg" />{" "}
                    Admin
                  </span>
                  <span className="flex items-center">
                    <AiOutlineCalendar className="mr-2 text-green-500 text-lg" />{" "}
                    14 Oct 2022
                  </span>
                  <span className="flex items-center">
                    <FaTree className="mr-2 text-brown-500 text-lg" /> Wood
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Going all-in with millennial design
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Morbi blandit cursus risus at ultrices mi tempus
                  imperdiet. Libero enim sed faucibus turpis in...
                </p>
                <a href="#" className="text-primary font-medium">
                  Read more
                </a>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className=" rounded-lg  overflow-hidden">
            <div className="relative">
  <Image
    src="/b2.png" // Second blog image
    alt="Blog post 2"
    width={600} // Customize width
    height={420} // Customize height
    className="w-70% h-70% object-cover lg:ml-6"
  />
</div>
              <div className="p-6">
                {/* Icons and Metadata */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <AiOutlineUser className="mr-2 text-yellow-500 text-lg" />{" "}
                    Admin
                  </span>
                  <span className="flex items-center">
                    <AiOutlineCalendar className="mr-2 text-green-500 text-lg" />{" "}
                    20 Sep 2022
                  </span>
                  <span className="flex items-center">
                    <FaTree className="mr-2 text-brown-500 text-lg" /> Crafts
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Exploring new ways of decorating
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Morbi blandit cursus risus at ultrices mi tempus
                  imperdiet. Libero enim sed faucibus turpis in...
                </p>
                <a href="#" className="text-primary font-medium">
                  Read more
                </a>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className=" rounded-lg  overflow-hidden">
            <div className="relative">
  <Image
    src="/b3.png" // Third blog image
    alt="Blog post 3"
    width={600} // Customize width
    height={420} // Customize height
    className="w-70% h-70% object-cover lg:ml-6"
  />
</div>
              <div className="p-6">
                {/* Icons and Metadata */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center">
                    <AiOutlineUser className="mr-2 text-yellow-500 text-lg" />{" "}
                    Admin
                  </span>
                  <span className="flex items-center">
                    <AiOutlineCalendar className="mr-2 text-green-500 text-lg" />{" "}
                    01 Aug 2022
                  </span>
                  <span className="flex items-center">
                    <FaTree className="mr-2 text-brown-500 text-lg" /> Interior
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Handmade pieces that stand out
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Morbi blandit cursus risus at ultrices mi tempus
                  imperdiet. Libero enim sed faucibus turpis in...
                </p>
                <a href="#" className="text-primary font-medium">
                  Read more
                </a>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Search</h3>
              <form className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Categories</h3>
              <ul className="space-y-2">
                {["Crafts", "Design", "Handmade", "Interior", "Wood"].map((category, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center text-gray-600 hover:text-primary"
                  >
                    <span>{category}</span>
                    <span className="text-sm text-gray-500">{i + 2}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Posts</h3>
  <ul className="space-y-4">
    {[
      {
        src: "/p1.png",
        alt: "Going all-in with millennial design",
        title: "Going all-in with millennial design",
        date: "03 Aug 2022",
      },
      {
        src: "/p2.png",
        alt: "Exploring new ways of decorating",
        title: "Exploring new ways of decorating",
        date: "15 Sep 2022",
      },
      {
        src: "/p3.png",
        alt: " Handmade pieces that took time to make",
        title: "Handmade pieces that took time to make",
        date: "27 Oct 2022",
      },
      {
        src: "/p4.png",
        alt: " Colorful office redesign",
        title: "Colorful office redesign",
        date: "05 Nov 2022",
      },
    ].map((post, index) => (
      <li key={index} className="flex space-x-4">
        <div className="w-16 h-16 relative rounded-md overflow-hidden">
          <Image
            src={post.src}
            alt={post.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-700">{post.title}</h4>
          <p className="text-xs text-gray-500">{post.date}</p>
        </div>
      </li>
    ))}
  </ul>
</div>
          </aside>
        </div>

    
      </div>

      <div className="flex flex-col items-center justify-center p-4">
          <Image
        src="/Frame 72.png" // Replace with your image path
        alt="Eco-friendly product image"
        width={400} // Default width
        height={300} // Default height
        className=" w-auto h-auto max-w-[200px] max-h-[150px] sm:max-w-[250px] sm:max-h-[200px] lg:max-w-[300px] lg:max-h-[250px]"
      /> </div>

      
      {/* Feature Section */}
      <div className="bg-[#FDF8F2] py-12 px-6 mt-8 mb-10">
        <div className="w-full px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          {/* Feature 1 */}
          <div className="flex items-center gap-x-4 justify-center md:justify-start">
            <Image
              src="/trophy 1.png" // Replace with the actual path of the trophy icon
              alt="High Quality Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">High Quality</h3>
              <p className="text-sm text-gray-500">Crafted from top materials</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-x-4 justify-center md:justify-start">
            <Image
              src="/Group.png" // Replace with the actual path of the warranty icon
              alt="Warranty Protection Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Warranty Protection</h3>
              <p className="text-sm text-gray-500">Over 2 years</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-x-4 justify-center md:justify-start">
            <Image
              src="/shipping.png" // Replace with the actual path of the shipping icon
              alt="Free Shipping Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Free Shipping</h3>
              <p className="text-sm text-gray-500">Order over 150$</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-x-4 justify-center md:justify-start">
            <Image
              src="/cs.png" // Replace with the actual path of the support icon
              alt="Support Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">24/7 Support</h3>
              <p className="text-sm text-gray-500">Get help anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
