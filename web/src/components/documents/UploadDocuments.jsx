import React from 'react';
import FileUpload from './FileUpload';
import PDFRenderer from './PDFRenderer';

const Documents = () => (
  <div className="card card-user">
    <p className="description text-center">
        Upload Document <br />
      </p>
    <div className="content">
        <FileUpload />
    </div>
    <hr />
    <div className="text-center">
    </div>
  </div>
);

export default Documents;