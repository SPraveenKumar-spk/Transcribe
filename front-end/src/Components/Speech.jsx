import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Speech() {
  const [language, setLanguage] = useState("en-US");
  const [transcription, setTranscription] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsListening(true);

    try {
      const response = await fetch(`http://127.0.0.1:5000/speech_to_text`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ language }),
      });

      const data = await response.json();
      setTranscription(data.transcription);
    } catch (error) {
      console.error("Error in converting speech to text:", error);
    } finally {
      setIsListening(false);
    }
  };

  return (
    <>
      <NavBar />
      <section>
        <div className="container mt-3 min-vh-100">
          <h1 className="text-center p-5" style={{ color: "purple" }}>
            Try Our AI Text
          </h1>
          <div className="card p-4 shadow">
            <h3>To convert Speech to Text</h3>
            <p>Choose the appropriate language</p>
            <h4>Languages:</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <select
                  className="form-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="en-US">English (en-US)</option>
                  <option value="hi-IN">Hindi (hi-IN)</option>
                  <option value="bn-IN">Bengali (bn-IN)</option>
                  <option value="ta-IN">Tamil (ta-IN)</option>
                  <option value="te-IN">Telugu (te-IN)</option>
                </select>
              </div>
              <div className="text-center p-4">
                <button type="submit" className="btn btn-primary">
                  {isListening ? "Listening..." : "Speak"}
                </button>
              </div>
            </form>
            {transcription && (
              <div className="mt-4">
                <h4>Transcription:</h4>
                <p>{transcription}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Speech;
