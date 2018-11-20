import React from 'react';
import PDFRenderer from './PDFRenderer';

export default class ViewDocument extends React.Component {
  constructor() {
    super()
    this.state = { fileURL:'', type:'PASSPORT', showPDF:false }
  }

  viewFile(e) {
    
    this.setState({
      fileURL: 'http://localhost:8080/user/stream-document/1/'+this.state.type,
      showPDF: true

    });
  }
  onTypeChange(type) {
      this.setState({
        type:type.target.value,
      });
  }
  render() {
    const {fileURL, showPDF} = this.state;
    return (
            <div className="card card-user">
              <section>
                <select onChange={this.onTypeChange.bind(this)}>
                  <option value="PASSPORT">Passport</option>
                  <option value="ADDRESS">Address</option>
                  <option value="IPQ">Investor Profile Questioniare</option>
                </select>
                <button  onClick={this.viewFile.bind(this)}> View </button>
              </section>
              {showPDF &&
                         <PDFRenderer pdfUrl={fileURL} />
              }
              </div>
          );
    }
}
