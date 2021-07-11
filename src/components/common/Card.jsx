import React from "react";

const Card = ({ title, pdf, onViewDocument }) => {
  return (
    <div className="card py-3 px-1" style={{ width: "100%" }}>
      <div className="card_image-container">
        <i className="card_image fa fa-file-pdf-o"></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <hr className="card_hr" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a
            href={`data:application/pdf;base64,${pdf}`}
            download="document.pdf"
            className="btn btn-outline"
          >
            <i className="card_download-icon fa fa-download"></i>
          </a>

          <button
            onClick={() => onViewDocument(pdf)}
            className="btn btn-outline"
          >
            <i className="card_download-icon fa fa-eye"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
