import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import RentalAgreement from './components/RentalAgreement';
import ReturnStatement from './components/ReturnStatement';

function App() {

  return (
    <div className="App">
      <h1>Rental Agreement PDF</h1>
      <PDFViewer width="65%" height={1200} showToolbar={false}>
        <RentalAgreement />
      </PDFViewer>
      <h1>Return Statement PDF</h1>
      <PDFViewer width="65%" height={1200} showToolbar={false}>
        <ReturnStatement />
      </PDFViewer>
    </div>
  );
}

export default App;
