import NavBar from "./NavBar";
import Footer from "./Footer";
function Speech() {
  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <div
          className="rounded"
          style={{
            width: "100%",
            minHeight: "30rem",
            boxShadow:
              " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <div className="text-center">
            <h2 className="p-3">Try Our AI Speech</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Speech;
