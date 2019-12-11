import React from "react";
import HTCMessageBox from "./HTCMessageBox";

const HomeThreeColumns = () => {
  const dataToRender = [
    {
      number: "10",
      info: "ODDANYCH WORKÓW",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos sapiente, sequi reiciendis soluta tenetur odio. Commodi totam eos tempora iste optio officiis sed, similique aliquid itaque. Possimus, libero rem?"
    },
    {
      number: "5",
      info: "WSPARTYCH ORGANIZACJI",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos sapiente, sequi reiciendis soluta tenetur odio. Commodi totam eos tempora iste optio officiis sed, similique aliquid itaque. Possimus, libero rem?"
    },
    {
      number: "7",
      info: "ZORGANIZOWANYCH ZBIÓREK",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos sapiente, sequi reiciendis soluta tenetur odio. Commodi totam eos tempora iste optio officiis sed, similique aliquid itaque. Possimus, libero rem?"
    }
  ];
  return (
    <section className="three-columns" id="whats_about">
      {dataToRender.map((item, index) => {
        return (
          <HTCMessageBox
            key={index}
            number={item.number}
            info={item.info}
            description={item.description}
          />
        );
      })}
    </section>
  );
};

export default HomeThreeColumns;
