import React from "react";
import { createUseStyles } from "react-jss";
import HTCMessageBox from "./HTCMessageBox";
import { threeColumnsBackground } from "../../../scss/settings/colors";

const useStyles = createUseStyles({
  threeColumns: {
    backgroundColor: `${threeColumnsBackground}`,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingTop: "46px",
    paddingBottom: "86px"
  }
});

const HomeThreeColumns = () => {
  const classes = useStyles();
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
    <section className={classes.threeColumns}>
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
