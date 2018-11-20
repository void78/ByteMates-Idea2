import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
 
class PDFRenderer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    console.log(this.props);
    const { pageNumber, numPages } = this.state;
    const { pdfUrl } = this.props;
    return (
      <div>
        <Document
          file={pdfUrl}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}
export default PDFRenderer;