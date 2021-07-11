import React from "react";

const ViewDocs = ({ location }) => {
  const getPdf = () => {
    return location.state && Object.keys(location.state).includes("pdf")
      ? location.state.pdf
      : "";
  };

  return (
    <object>
      <embed
        id="pdfID"
        type="text/html"
        width="100%"
        height="600px"
        src={`data:application/pdf;base64,${getPdf()}`}
      />
    </object>
  );
};

export default ViewDocs;
