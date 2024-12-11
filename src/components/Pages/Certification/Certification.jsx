import React, { useState } from 'react';
import MediaCard from '../../Layout/Card';
import certificateData from './certificateData.json';
import CertificateModal from './CertificateModal';
import './Certification.css'; // Import your custom styles if any

const Certification = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleLearnMore = (certificate) => {
    setSelectedCertificate(certificate);
  };

  return (
    <div className="certification-container">
      {certificateData.certificates.map((certificate, index) => (
        <MediaCard
          key={index}
          image={certificate.imageUrl}
          title={certificate.course}
          // description={`Awarded to ${certificate.name} by ${certificate.instructor} on ${certificate.date}`}
          onLearnMore={() => handleLearnMore(certificate)}
          className="my-custom-card"
        />
      ))}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
};

export default Certification;