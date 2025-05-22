import React from "react";

type PubNameProps = {
  name: string;
};

const PubName: React.FC<PubNameProps> = ({
  name,
}) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default PubName;
