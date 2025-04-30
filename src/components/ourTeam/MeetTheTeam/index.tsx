import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const TeamMemberCard = ({ image, name, role }: any) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="w-full h-[400px] mb-4 overflow-hidden border-b-4 border-yellow-500">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="bg-white p-4 rounded-lg mx-4 shadow-md mt-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>

        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#FAF5EF] flex items-center justify-center text-blue-500 hover:bg-[#F7A235]  transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#FAF5EF] flex items-center justify-center text-blue-400 hover:bg-[#F7A235] transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#FAF5EF] flex items-center justify-center text-blue-700 hover:bg-[#F7A235] transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

const MeetTheTeam = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <TeamMemberCard
          image="images/Robertsmith.jpg"
          name="Robert Smith"
          role="Director"
        />
        <TeamMemberCard
          image="images/johnAlbert.jpg"
          name="John Albert"
          role="Engineer"
        />
        <TeamMemberCard
          image="images/MikeHardson.jpg"
          name="Mike Hardson"
          role="Installer"
        />
        <TeamMemberCard
          image="images/kevinjones.jpg"
          name="Kevin Jones"
          role="Director"
        />
        <TeamMemberCard
          image="images/janecooper.jpg"
          name="Jane Cooper"
          role="Engineer"
        />
        <TeamMemberCard
          image="images/arthurchen.jpg"
          name="Arthur Chen"
          role="Installer"
        />
      </div>
    </div>
  );
};

export default MeetTheTeam;
