import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Text() {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://127.0.0.1:5000/text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      alert("Text converted to speech and played successfully!");
    } catch (error) {
      console.error("Error in converting text to speech:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <h2 className="text-center p-3" style={{ color: "purple" }}>
          Try Our AI Speech
        </h2>
        <div className="card p-4 shadow">
          <h3 className="mb-3">Convert Text to Speech</h3>
          <p>Enter the required text below:</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Enter text:
              </label>
              <textarea
                className="form-control"
                id="text"
                name="text"
                rows="5"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              ></textarea>
            </div>
            {/* <div className="mb-3">
              <label htmlFor="language" className="form-label">
                Select language:
              </label>
              <select
                className="form-select"
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">English (en)</option>
                <option value="hi">Hindi (hi)</option>
                <option value="bn">Bengali (bn)</option>
                <option value="ta">Tamil (ta)</option>
                <option value="te">Telugu (te)</option>
              </select>
            </div> */}
            <div className="text-center p-4">
              <button type="submit" className="btn btn-primary">
                Convert to Speech
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Text;
