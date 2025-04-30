import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Schema
const formSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ConnectWithUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("contactForm", JSON.stringify(data));
    alert("Message saved to local storage!");
    reset();
  };

  return (
    <section className="w-full bg-white pt-0 pb-12 px-4 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 text-gray-700">
          <div className="w-6 border-t-2 border-[#F6A235] my-4"></div>
          <div className="w-8 border-l-2 border-blue-600 my-4"></div>
          <h2 className="text-xl md:text-xl text-gray-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-4xl font-bold text-gray-800 mb-6">
            Schedule a Quote
          </p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="space-y-2 text-left">
            <p>
              <FaPhoneAlt className="inline font-bold mr-2 text-blue-600" />
              <strong className="font-bold">Phone:</strong> (123) 456-7890
            </p>
            <p>
              <FaEnvelope className="inline font-bold mr-2 text-blue-600" />
              <strong className="font-bold">Email:</strong> needhelp@company.com
            </p>
            <p>
              <FaMapMarkerAlt className="inline font-bold mr-2 text-blue-600" />
              <strong className="font-bold">Address:</strong> 60 Brooklyn
              Street, New York, USA
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-[#FAF5EF] p-8 rounded-lg shadow-lg"
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Your Subject"
              {...register("subject")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <textarea
              rows="5"
              placeholder="Your Message"
              {...register("message")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConnectWithUs;
