import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Text() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://transcribe-n6v3.vercel.app/text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        alert("Text converted to speech successfully!");
      } else {
        console.error("Failed to convert text to speech");
      }
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
            <div className="text-center p-4">
              <button type="submit" className="btn btn-primary">
                Convert to Speech
              </button>
            </div>
          </form>

          {audioUrl && (
            <div className="text-center mt-4">
              <audio controls src={audioUrl} className="mb-3">
                Your browser does not support the audio element.
              </audio>
              <div>
                <a
                  href={audioUrl}
                  download="speech.mp3"
                  className="btn btn-secondary"
                >
                  Download Speech
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Text;
