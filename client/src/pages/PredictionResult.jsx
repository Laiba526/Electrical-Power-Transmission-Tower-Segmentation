import React from 'react';
import { useLocation } from 'react-router-dom';
import './PredictionResult.css';

const PredictionResult = () => {
  const location = useLocation();
  const {
    original,
    prediction,
    height,
    width,
    count,
    dimensions
  } = location.state || {};
  

  console.log('📦 Full location state:', location.state);

  return (
    <div className="prediction-container">
      {/* Top Section */}
      <div className="top-section">
        <h1>Electric Tower Analysis</h1>
        <p>Optimizing Electricity Distribution with AI-Driven Insights</p>
      </div>

      {/* Prediction Result Section */}
      <div className="prediction-section">
        <h2>Prediction Results</h2>

        <div className="images-row">
          <div className="image-column">
            <h3>Original Image</h3>
            <div className="image-block">
              {original && <img src={original} alt="Original Upload" />}
            </div>
          </div>

          <div className="image-column">
            <h3>Annotated Image</h3>
            <div className="image-block">
              {prediction && <img src={prediction} alt="Predicted" />}
            </div>
          </div>
        </div>

        {/* Tower Info Details Section */}
        <div className="tower-info">
          <p><strong>Insulator Height for Mapping:</strong> {height} pixels</p>
          <p><strong>Insulator Width for Mapping:</strong> {width} pixels</p>
          <p><strong>Number of 'Cross Pattern' Predictions:</strong> {count}</p>
        </div>

        <div className="dimensions-table-container">
          <h2>Dimensions Table</h2>
          <table className="dimensions-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Height (pixels)</th>
                <th>Width (pixels)</th>
                <th>Mapped Height (cm)</th>
                <th>Mapped Width (cm)</th>
              </tr>
            </thead>
            <tbody>
            {dimensions && dimensions.map((item, index) => (
              <tr key={index}>
                <td>{item["Component"]}</td>
                <td>{item["Height (pixels)"]}</td>
                <td>{item["Width (pixels)"] || '-'}</td>
                <td>{item["Mapped Height (cm)"]}</td>
                <td>{item["Mapped Width (cm)"] || '-'}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Download Button */}
        <div className="download-btn-container">
          <button className="download-btn">Download Report</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Electric Tower Analysis | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PredictionResult;
