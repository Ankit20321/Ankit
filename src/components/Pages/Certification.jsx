// Certification.jsx
import React from 'react';
import MediaCard from '../Layout/Card';
import cert1 from './cert1.png';
import './Certification.css'; // Import your custom styles

const Certification = () => {
  const handleLearnMore = () => {
    console.log('Learn more clicked');
  };

  return (
    <div className="certification">
    <MediaCard
      image={cert1}
      title="Sample Card"
      description="This is a sample description for the card."
      onLearnMore={handleLearnMore}
      className="my-custom-card"
    />
     <MediaCard
      image={cert1}
      title="Sample Card"
      description="This is a sample description for the card."
      onLearnMore={handleLearnMore}
      className="my-custom-card"
    />
     <MediaCard
      image={cert1}
      title="Sample Card"
      description="This is a sample description for the card."
      onLearnMore={handleLearnMore}
      className="my-custom-card"
    />
    </div>
    
  );
};

export default Certification;