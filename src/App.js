import logo from './logo.svg';
import './App.css';
import GenericPdfDownloader from "./GenericPdfDownloader";
import printPDF  from'./print'
import SomeContent from './somecontent';

function App() {
  return (    
      <div id="divToDownload" className="App">
        <header className="App-header"  >
          <img src={logo} className="App-logo" alt="logo" />          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <img src="ceu2.jpg" />
          <p>First Table - Should Show on PDF</p> 
          <SomeContent></SomeContent> 
          <p></p> 
          <button onClick={() => printPDF("/")}> Print PDF API/Browser Call</button>              
          <GenericPdfDownloader 
            downloadFileName="CustomPdf" 
            rootElementId="divToDownload" 
            buttonText = "JSPDF Full Page PDF"
          />
          <img src="ceu.jpg" />
          <div id="testId"> 
              This is A Downloadable Component  Should be Visible on pdf!!!
          </div>
          <p>Second Table - Should Show on PDF</p> 
          <SomeContent></SomeContent> 
          <p></p> 
          <img src="download.jpg" />
        </header>        
      </div>    
  );
}

export default App;
