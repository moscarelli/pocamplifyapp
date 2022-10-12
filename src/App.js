import logo from './logo.svg';
import './App.css';
import GenericPdfDownloader from "./GenericPdfDownloader";
import printPDF  from'./print'
import SomeContent from './somecontent';

function App() {
  return (
    <div id="divToDownload">  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>  
          <button onClick={() => printPDF("/")}> Print PDF API/Browser Call</button>              
          <GenericPdfDownloader 
            downloadFileName="CustomPdf" 
            rootElementId="divToDownload" 
            buttonText = "JSPD Full Page PDF"
          />
          <img src="ceu.jpg" />
          <div id="testId"> 
              This is A Downloadable Component  Should be Visible on pdf!!!
          </div>
        </header>
        <SomeContent></SomeContent>
      </div>
    </div>
  );
}

export default App;
