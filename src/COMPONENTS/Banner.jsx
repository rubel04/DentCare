const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-6">
        <h4 className="uppercase flex items-center text-[#ffb507] font-medium">
          <p className="bg-[#ffb507] w-10 h-0.5 mr-2"></p>
          Work with us
        </h4>
        <h1 className="text-6xl font-bold leading-normal">
          Become the <br /> Reason of <br />{" "}
          <span className="text-[#00bcf7]">Thousand Smiles</span>
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sed eu mauris adipiscing viverra eget facilisi fames. Sit tellus vitae
          et, suspendisse tincidunt eu, adipiscing ultrices.lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Pellentesque sed eu mauris
          adipiscing viverra eget facilisi fames. Sit tellus vitae et,
          suspendisse tincidunt eu, adipiscing ultrices.
        </p>
        <div className="flex items-center space-x-4">
          <button className="px-8 py-3 cursor-pointer rounded-2xl font-medium text-white bg-gradient-to-r from-[#00bcf7] to-[#0076ed] )">
            Apply Now
          </button>
          <button className="px-8 py-3 cursor-pointer rounded-2xl font-medium text-[#00bcf7] border border-[#00bcf7])">
            Know More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <img
          src="https://assets.website-files.com/6251a901325d4a0d681678d6/625462ce2a5cb7412d5f43e3_Group%203.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
