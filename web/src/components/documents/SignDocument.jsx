import React from 'react';
import PDFRenderer from './PDFRenderer';
import SignaturePad from 'react-signature-pad-wrapper';
//import './signPad/signPad.css';

export default class SignDocument extends React.PureComponent {
  constructor() {
    super()
    this.state = { fileURL:'', type:'PASSPORT', showPDF:false };
    //this.signaturePad = React.createRef();
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
  saveSignature(){
    const signaturePad = this.signaturePad;
    const docutype = this.state.type;
      if(signaturePad.isEmpty()){
          alert('Please add signature.');
      }
      else{
        var data=signaturePad.toDataURL();
        
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/user/sign-document/1/"+docutype);
        xhr.onload = function() {
            var response = xhr.responseText;
            if(xhr.status === 200) {
                alert("File Uploaded successfully");
            } else {
                alert("Some Error Occurred");
            }
        }
    
        xhr.send(data);
      }
    
  }
  render() {
    const {fileURL, showPDF} = this.state;
    //position: 'absolute',bottom:'40px', left:'10px', 
    return (
            <div className="card card-user">
              <section>
                <select onChange={this.onTypeChange.bind(this)}>
                  <option value="PASSPORT">Passport</option>
                  <option value="ADDRESS">Address</option>
                  <option value="IPQ">Investor Profile Questioniare</option>
                </select>
                <button  onClick={this.viewFile.bind(this)}> Load Document </button>
              </section>
              {showPDF &&
               <div>
                <PDFRenderer pdfUrl={fileURL} />
                <div style={{border:'1px black',height:'204px', width:'204px'}}>
                    <SignaturePad redrawOnResize={true}
                    height="100"
                    width="100"
                    options={{backgroundColor:'rgb(255, 255, 255)'}}
                    ref={ref => this.signaturePad = ref} />
                    
                </div>
                <button  onClick={this.saveSignature.bind(this)}>Sign Document</button>
                </div>
              }
              </div>
          );
    }
}