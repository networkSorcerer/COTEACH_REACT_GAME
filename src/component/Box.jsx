import React from "react";

const Box = ({ title, item, result }) => {
  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <h2>{item?.name}</h2>
      {item && <img className="item-img" src={item.img} alt={item.name} />}
      <h2>
        {result === "win"
          ? "이겼다 🎉"
          : result === "lose"
          ? "졌다 😢"
          : result === "tie"
          ? "비겼다 🤝"
          : ""}
      </h2>
    </div>
  );
};

export default Box;
