import React from 'react';

// eslint-disable-next-line react/prop-types
const PartnerLogos = ({ logos = [] }) => {
  return (
    <div className="flex justify-center gap-4 p-4">
      {logos.map((logo, index) => (
        <div key={index} className="flex-shrink-0">
          <img
            src={logo}
            alt={`Logo du partenaire ${index + 1}`}
            className="h-16 w-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default PartnerLogos;
