import React, { useState, useRef, useEffect } from "react";
import Scanner from "./Scanner.jsx";
import Result from "./Result.jsx";
import "./display.css";
import { useHistory } from "react-router-dom";
import barcode from "../../Assets/barcode3.svg";
const DisplayScan = () => {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState([]);
  const scannerRef = useRef(null);
  const history = useHistory();
  let barCode = results[0];

  useEffect(() => {
    barCode && history.push(`/Product/${barCode}`);
  }, [barCode]);

  return (
    <div className="displayScan">
      <div className="container">
        <button
          className="barcode-logo"
          onClick={() => setScanning(!scanning)}
          style={scanning ? { display: "none" } : { display: "block" }}
        >
          Cliquez sur le barcode pour scanner votre produit.
          <img src={barcode} alt="" />
        </button>

        <ul className="results">
          {results.map(
            (result) =>
              result.codeResult && (
                <Result key={result.codeResult.code} result={result} />
              )
          )}
        </ul>
        <div className="window" ref={scannerRef}>
          {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
          <canvas className="drawingBuffer" />
          {scanning ? (
            <Scanner
              scannerRef={scannerRef}
              onDetected={(result) => setResults([...results, result])}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DisplayScan;
