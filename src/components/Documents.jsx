import React, { useEffect, useState } from "react";
import documentService from "../service/documentService";
import Card from "./common/Card";

const data = [
  {
    title: "This is a title no 1",
    pdf: "",
  },
  {
    title: "This is a title no 1",
    pdf: "",
  },
];

const Documents = ({ history }) => {
  const [documents, setDocuments] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await documentService.getDocuments();
      setDocuments(data.data);
    } catch (ex) {
      if (ex.response) console.log(ex.response.data);
    }
  }, []);

  const handleViewDocument = (pdf) => {
    console.log(history);
    history.push({
      pathname: "/viewDocs",
      state: { pdf },
    });
  };

  return (
    <section className="documents-section">
      <div className="documents">
        <h2 className="documents_heading">Documents</h2>
        <div className="documents_cards">
          {documents.map((item) => (
            <Card
              key={Math.random().toString()}
              title={item.title}
              pdf={item.pdf}
              onViewDocument={handleViewDocument}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
