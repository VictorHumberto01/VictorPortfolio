import React from "react";

// A tech icon can be a plain image URL (custom repo icons) or a
// react-icons component (brand logos not covered by the custom set).
const TechIcon = ({ icon, name, className }) => {
  if (!icon) return null;
  if (typeof icon === "string") {
    return <img src={icon} alt={name} className={className} />;
  }
  const Icon = icon;
  return <Icon className={className} aria-label={name} />;
};

export default TechIcon;
