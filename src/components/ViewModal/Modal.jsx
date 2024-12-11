import React, { useState, useRef } from "react";
import "./Modal.css";
import jsPDF from "jspdf";
import certDetails from "./certDetails.json";

const CertificateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const contentRef = useRef();

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCertificate(null);
  };

  const generatePdf = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    doc.html(contentRef.current, {
      callback: function (doc) {
        doc.save("document.pdf");
      },
      x: -10,
      y: 0,
      width: doc.internal.pageSize.getWidth(),
      windowWidth: contentRef.current.scrollWidth,
    });
  };

  return (
    <div className="invoice">
      <div className="modal-button">
        {/* Buttons to open the modal for each certificate */}
        {certDetails.certificates.map((certificate, index) => (
          <button
            key={index}
            className="open-modal-btn"
            onClick={() => openModal(certificate)}
          >
            View Certificate for {certificate.name}
          </button>
        ))}
      </div>
      {/* Modal structure */}
      {isOpen && selectedCertificate && (
        <div className="modal" style={{ textAlign: "center" }}>
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <div ref={contentRef}>
              <h2 style={{ textAlign: "center" }}>Certificate of Completion</h2>
              <br />
              <img
                src={selectedCertificate.imageUrl}
                alt="Certificate"
                style={{
                  display: "flex",
                  position: "relative",
                  left: "140px",
                  width: "800px",
                  marginRight: "200px",
                  top: "0px",
                }}
              />
              <h2>Certificate of Completion</h2>
              <p>This is to certify that</p>
              <h3>{selectedCertificate.name}</h3>
              <p>has successfully completed the course</p>
              <h3>{selectedCertificate.course}</h3>
              <p>on</p>
              <h3>{selectedCertificate.date}</h3>
              <p>Instructor:</p>
              <h3>{selectedCertificate.instructor}</h3>
              <p>Certificate ID:</p>
              <h3>{selectedCertificate.certificateId}</h3>
            </div>
            <button className="open-modal-btn" onClick={generatePdf}>
              Generate PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateModal;