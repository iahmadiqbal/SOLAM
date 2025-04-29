import { FaQuoteLeft } from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  message: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Albert",
    role: "Customer",
    message:
      "I was very impressed by the new company service. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
    image: "/images/profile-1.png",
  },
  {
    name: "John Doe",
    role: "Customer",
    message:
      "I was very impressed by the new company service. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
    image: "/images/profile-2.png",
  },
  {
    name: "Lilly Rowe",
    role: "Customer",
    message:
      "I was very impressed by the new company service. Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolor ipsum quia.",
    image: "/images/profile-3.png",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full py-16" style={{ backgroundColor: "#F5F0EA" }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-normal text-gray-500 mb-8">
          Our Testimonials
        </h2>
        <h3 className="text-4xl font-bold mb-12">Customer Feedback</h3>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 pt-12 rounded-lg shadow-lg flex flex-col justify-between h-full text-left relative"
            >
              <FaQuoteLeft className="absolute -top-6 left-6 text-yellow-400 text-3xl" />

              <p className="text-gray-600 mt-4 mb-8">“{testimonial.message}”</p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    <span
                      className="text-[#F6A235]" // Only text color changed here
                    >
                      {testimonial.role}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
