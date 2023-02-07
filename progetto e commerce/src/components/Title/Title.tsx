import React from "react";

const Title = ({
  text,
  size,
  weight,
}: {
  text: string;
  size: string;
  weight: string;
}) => {
  return (
    <div
      style={{
        textAlign: "left",
        fontSize: `${size}`,
        fontWeight: `${weight}`,
      }}
    >
      {text}
    </div>
  );
};

export default Title;
