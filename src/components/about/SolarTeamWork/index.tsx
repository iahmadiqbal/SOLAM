const SolarTeamSection = () => {
  return (
    <div className="w-full">
      {/* Yellow Header Section */}
      <div
        className="w-full h-32 flex items-center justify-center relative z-10"
        style={{ backgroundColor: "#F6A235" }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center py-4">
          <h2 className="text-2xl font-bold text-white">
            How our Solar Team Works
          </h2>
        </div>
      </div>

      {/* V Shape Triangle - Upward (overlapping above section) */}
      <div
        className="w-full relative z-0 -mt-1"
        style={{
          height: "60px",
          backgroundColor: "#000000",
          clipPath: "polygon(0 0%, 50% 100%, 100% 0%)",
        }}
      ></div>

      {/* Black Container with 4 Steps */}
      <div className="w-full bg-black pb-12 -mt-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-6 text-white text-center pt-12">
            {/* Step 01 */}
            <div className="flex-1 flex flex-col items-center gap-4 px-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/icon-1.jpg"
                  alt="Meet Consultant"
                  className="w-16 h-16"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  Step <br />
                  <span className="text-4xl font-bold text-[#F6A235]">01</span>
                </h3>
                <h4 className="text-xl font-semibold mt-2">Meet Consultant</h4>
                <div className="w-12 h-1 bg-[#F6A235] mt-2 mx-auto"></div>
                <p className="mt-2 text-sm text-center leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex-1 flex flex-col items-center gap-4 px-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/icon-2.jpg"
                  alt="Generate Power"
                  className="w-16 h-16"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  Step <br />
                  <span className="text-4xl font-bold text-[#F6A235]">02</span>
                </h3>
                <h4 className="text-xl font-semibold mt-2">Generate Power</h4>
                <div className="w-12 h-1 bg-[#F6A235] mt-2 mx-auto"></div>
                <p className="mt-2 text-sm text-center leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex-1 flex flex-col items-center gap-4 px-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/icon-3.jpg"
                  alt="Save the Energy"
                  className="w-16 h-16"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  Step <br />
                  <span className="text-4xl font-bold text-[#F6A235]">03</span>
                </h3>
                <h4 className="text-xl font-semibold mt-2">Save the Energy</h4>
                <div className="w-12 h-1 bg-[#F6A235] mt-2 mx-auto"></div>
                <p className="mt-2 text-sm text-center leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="flex-1 flex flex-col items-center gap-4 px-4">
              <div className="flex-shrink-0">
                <img
                  src="/images/icon-4.jpg"
                  alt="Use the Power"
                  className="w-16 h-16"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  Step <br />
                  <span className="text-4xl font-bold text-[#F6A235]">04</span>
                </h3>
                <h4 className="text-xl font-semibold mt-2">Use the Power</h4>
                <div className="w-12 h-1 bg-[#F6A235] mt-2 mx-auto"></div>
                <p className="mt-2 text-sm text-center leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarTeamSection;
