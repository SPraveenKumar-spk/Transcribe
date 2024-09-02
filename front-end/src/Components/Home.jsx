import NavBar from "./NavBar";
import Image from "../assets/Speech.png";
import Image2 from "../assets/Text.png";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="text-center">
          <h1 style={{ color: "purple" }}>
            Effortless communication through advanced
            <br /> voice and text technology.
          </h1>
        </div>
        <div className="mt-5 text-center text-info">
          <h4>
            ~ Transcribe your voice to text and text to voice effortlessly{" "}
            <br /> for free—fast, accurate, and secure.~
          </h4>
        </div>
      </div>
      <section>
        <div
          className=" mt-5 mb-5 d-flex  justify-content-around "
          style={{
            width: "100%",
            height: "40rem",
            backgroundColor: "#F4F5FA",
          }}
        >
          <div className="text-center">
            <img
              src={Image}
              className="img-fluid mb-4"
              alt="Convert audio to text"
              style={{ maxWidth: "500px" }}
            />
            <h4 className="mb-3">Convert audio to text</h4>
            <p>
              Select the audio language you want to transcribe. <br />
              Click below to continue.
            </p>
            <NavLink to="/speech">
              <button className="btn btn-outline-primary pe-5 ps-5 fs-5 text-center">
                Try it
              </button>
            </NavLink>
          </div>
          <div className="text-center">
            <img
              src={Image2}
              className="img-fluid mb-4"
              alt="Convert audio to text"
              style={{ maxWidth: "350px" }}
            />
            <h4 className="mb-3">Convert text to audio</h4>
            <p>
              input the text, you want to convert into audio. <br />
              Click below to continue.
            </p>
            <NavLink to="/text">
              <button className="btn btn-outline-primary pe-5 ps-5 fs-5 text-center">
                Try it
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
