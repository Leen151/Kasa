import React from "react";
import "./host.scss";

export const Host = ({hostName, hostPicture}) => {

  const [prenom, nom] = hostName.split(" ");
    
  return (
    <div className="logement-host">
      <div className="host-name">
        <p>{prenom}</p>
        <p>{nom}</p>
      </div>
      <img src={hostPicture} alt={hostName} className="host-picture"/>
    </div>
  );
};
