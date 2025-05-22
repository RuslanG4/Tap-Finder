import React from "react";
import PubName from "./PubName";
import { ArrowLeft, Heart } from "lucide-react";
import "./PubHeaderStyle.css"

const PubHeader: React.FC = ({
}) => {
  return (
    <div className="pub-header">
      <ArrowLeft style={{ margin: '10px' }} />
      <PubName name='Example Pub'/>
      <Heart style={{marginLeft:"auto", marginRight:"10px", fontSize: '22px' }}/>
    </div>
  );
};

export default PubHeader;
