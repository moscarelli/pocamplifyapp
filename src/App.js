import logo from './logo.svg';
import './App.css';
import GenericPdfDownloader from "./GenericPdfDownloader";

function App() {
  return (
    <div id="divToDownload">  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>       
        <GenericPdfDownloader 
          downloadFileName="CustomPdf" 
          rootElementId="testId" 
        >Test Div</GenericPdfDownloader>
        <GenericPdfDownloader 
          downloadFileName="CustomPdf" 
          rootElementId="divToDownload" 
        >Full</GenericPdfDownloader>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React          
        </a>
        <div id="testId"> 
            This is A Downloadable Component 
        </div>
      </header>
    </div>
    </div>
  );
}

export default App;
