type MetricCardProps = {
  number: number;
  title: string;
  description: string;
  icon: string;
};

const MetricCard = ({ number, title, description, icon }: MetricCardProps) => (
  <div className="mt-5 flex flex-col items-center justify-center p-4 min-h-[300px]">
    <div className="flex items-center mb-4 relative">
      <h1 className="text-8xl font-extrabold text-[#FFFFFF] relative z-10">
        {number}
      </h1>
      <img
        src={icon}
        alt={title}
        className="w-12 h-12 absolute right-0 top-[-20%] transform translate-x-2"
      />
    </div>
    <h2 className="text-2xl font-semibold text-black mt-2">{title}</h2>
    <p className="text-center text-gray-600 mt-1">{description}</p>
  </div>
);

const KeyMetrics = () => (
  <div className="bg-gray-300 py-12 px-4">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-6">
      <div className="flex-1 min-w-[250px]">
        <MetricCard
          number={68}
          title="Panels Installed"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          icon="images/circle-icon-1.png"
        />
      </div>
      <div className="flex-1 min-w-[250px]">
        <MetricCard
          number={54}
          title="Technical Support"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          icon="images/circle-icon-2.png"
        />
      </div>
      <div className="flex-1 min-w-[250px]">
        <MetricCard
          number={33}
          title="Years Experience"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          icon="images/circle-icon-3.png"
        />
      </div>
      <div className="flex-1 min-w-[250px]">
        <MetricCard
          number={88}
          title="Five Star Reviews"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          icon="images/circle-icon-4.png"
        />
      </div>
    </div>
  </div>
);

export default KeyMetrics;
