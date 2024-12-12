import React, { useRef } from "react";
import "./Modal.css";
import jsPDF from "jspdf";

const CertificateModal = ({ certificate, onClose }) => {
  const contentRef = useRef();

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
    <div className="modal" style={{ textAlign: "center" }}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <div ref={contentRef}>
          <h2 style={{ textAlign: "center" }}>Certificate of Completion</h2>
          <br />
          <img
            src={certificate.imageUrl}
            alt="Certificate"
            style={{
              display: "flex",
              position: "relative",
             left:"30px",
              width: "700px",
              marginRight: "200px",
              top: "0px",
            }}
          />
          <p>This is to certify that</p>
          <h3>{certificate.name}</h3>
          <p>has successfully completed the course</p>
          <h3>{certificate.course}</h3>
          <p>on</p>
          <h3>{certificate.date}</h3>
          <p>Instructor:</p>
          <h3>{certificate.instructor}</h3>
          <p>Certificate ID:</p>
          <h3>{certificate.certificateId}</h3>
        </div>
        {/* <button className="open-modal-btn" onClick={generatePdf}>
          Generate PDF
        </button> */}
      </div>
    </div>
  );
};

export default CertificateModal;