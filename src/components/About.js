import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl sm:text-7xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          omnis alias corrupti autem rerum suscipit quae maiores sed, impedit
          error nesciunt distinctio soluta, enim nulla, provident adipisci esse
          repellat reiciendis! Tempora, similique deserunt? Ipsum deleniti
          commodi aperiam possimus nam enim assumenda voluptatibus dolor. Eius,
          maxime! Nam commodi amet et tempora?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vitae
          suscipit libero harum ab modi repudiandae possimus, aut totam
          voluptate eum, ex autem quo. Dolorum nisi quas, sed praesentium
          dignissimos qui sint dolorem quo commodi magnam rerum velit, fugit at
          obcaecati inventore nam fuga laborum eligendi, modi consequatur.
          Temporibus, in.
        </p>
      </div>
    </div>
  );
};

export default About;
