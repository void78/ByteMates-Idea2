import React from 'react';
import Dropzone from 'react-dropzone';

export default class FileUpload extends React.Component {
    constructor() {
      super()
      this.state = { files: [], type:'PASSPORT' }
    }
  
    onDrop(files) {
      this.setState({
        files
      });
    }
    onTypeChange(type) {
        this.setState({
          type:type.target.value,
        });
    }
  
    onCancel() {
      this.setState({
        files: []
      });
    }

    uploadSingleFile(file) {
        var formData = new FormData();
        formData.append("file", this.state.files[0]);
    
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/user/upload-document/1/"+ this.state.type);
        xhr.onload = function() {
            var response = xhr.responseText;
            if(xhr.status === 200) {
                alert("File Uploaded successfully");
            } else {
                alert("Some Error Occurred");
            }
        }
    
        xhr.send(formData);
    }
  
    render() {
      const fileLen =this.state.files.length;
      return (
        <section>
          <div className="dropzone">
            <Dropzone
              onDrop={this.onDrop.bind(this)}
              onFileDialogCancel={this.onCancel.bind(this)}
            >
              <p>Try dropping some files here, or click to select files to upload.</p>
            </Dropzone>
          </div>
          <aside>
            <h5>Dropped file</h5>
            <ul>
              {
                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside>
          <select onChange={this.onTypeChange.bind(this)}>
            <option value="PASSPORT">Passport</option>
            <option value="ADDRESS">Address</option>
            <option value="IPQ">Investor Profile Questioniare</option>
          </select>
          <button disabled={fileLen===0} onClick={this.uploadSingleFile.bind(this)}> Save </button>
        </section>
      );
    }
  }