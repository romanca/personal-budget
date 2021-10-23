import React from "react";

const IconNamesMap = {
  user: "fa fa-user-circle-o",
  eur: "fa fa-eur",
};

const Icon = ({ name, style, color }) => {
  return <i className={IconNamesMap[name]} style={{ ...style, color }} />;
};

export default Icon;
