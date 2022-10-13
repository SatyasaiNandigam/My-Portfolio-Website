import React from "react";

const AboutAlt = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-slate-800 to-black text-white px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <span className="text-4xl md:text-7xl font-bold iniline border-b-4 border-gray-500 w-fit">
          About
        </span>
        <p className="mt-10 text-sm md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius, consectetur tenetur quis deleniti quaerat officia at repudiandae ratione nemo ipsam, cum, cupiditate minima a suscipit assumenda saepe dignissimos quibusdam vel accusamus. Excepturi enim quis praesentium sequi, iste unde? Alias quidem quae vero temporibus veniam aut eos explicabo cupiditate nesciunt?
        </p>
        <br />
        <p className="text-sm md:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae tempore consequatur possimus similique laboriosam, iure quod numquam eveniet corporis reprehenderit earum. Quis adipisci quod placeat, dicta soluta in fugiat ab, incidunt rerum aliquam neque quia doloremque nisi explicabo enim! Quos minus, eveniet similique molestiae dolore eaque nostrum magnam temporibus ea!
        </p>
      </div>
    </div>
  );
};

export default AboutAlt;
