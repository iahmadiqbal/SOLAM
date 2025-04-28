import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* Orange Section */}
      <div className="flex items-center h-56 justify-between p-6 w-[93%] mx-auto bg-[#F6A235] flex-col sm:flex-row">
        <div className="ml-4 mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-4xl font-bold text-white">
            Smartest Way to Generate <br /> Electricity
          </h1>
        </div>
        <button className="ml-4 text-xl sm:text-2xl bg-[#1A1819] text-white px-5 py-2 rounded hover:bg-gray-400">
          Get in Touch
        </button>
      </div>

      {/* Black Section */}
      <div className="bg-black text-white p-10">
        {/* Top Info */}
        <div className="mb-8 flex flex-wrap justify-between">
          <div className="flex flex-col items-start w-full sm:w-[25%] mb-8 sm:mb-0">
            <img
              src="/images/logo-light.png"
              alt="Logo"
              className="w-32 mb-4"
            />
            <h1 className="text-sm sm:text-xl font-normal mb-2">
              We Offer a Wide Range of Quality Solar Panel Installation
              Services.
            </h1>
            <div className="flex items-center mb-1">
              <FaEnvelope className="mr-2" />
              <p>needhelp@company.com</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <p>(123) 456-7890</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex w-full sm:w-[70%] justify-between flex-col sm:flex-row sm:space-x-4">
            <div className="flex flex-col w-full sm:w-[24%] mb-8 sm:mb-0">
              <h2 className="text-xl font-semibold mb-2">Explore</h2>
              <ul className="space-y-1">
                <li>About</li>
                <li>Leadership Team</li>
                <li>Our Services</li>
                <li>Recent Projects</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="flex flex-col w-full sm:w-[24%] mb-8 sm:mb-0">
              <h2 className="text-xl font-semibold mb-2">Services</h2>
              <ul className="space-y-1">
                <li>Solar Technology</li>
                <li>Solar Installation</li>
                <li>Battery Materials</li>
                <li>Solar Equipment</li>
                <li>Charge Controllers</li>
              </ul>
            </div>

            <div className="flex flex-col w-full sm:w-[24%]">
              <h2 className="text-xl font-semibold mb-2">Contact</h2>
              <p>60 Brooklyn Golden Street</p>
              <p>New York 8800 United States</p>
              {/* Social Media Section */}
              <div className="flex flex-col items-start space-y-4 mt-4 sm:mt-0">
                <h2 className="text-xl font-semibold">Follow Us</h2>
                <div className="flex space-x-6">
                  <a href="#" className="text-white">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-white">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-white">
                    <FaYoutube />
                  </a>
                  <a href="#" className="text-white">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
