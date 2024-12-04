import Header from "./Header";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="container my-5 text-white">
        <h1 className="mb-5 text-decoration-underline text-center fw-bold">
          History of MovieFlex
        </h1>
        <div className="row">
          <div className="col-md-6">
            <div className=" text-start">
              <p>
                MovieFlex was born in 1917, Austria, during the Great War. At
                first, his creator, Benjamin Polonsky, saw his creation as a
                beautiful and enigmatic archetype. Many a psychologists thought
                him crazy, however, with the passing of time his genius started
                to flourish and soon everyone in the town was talking about his
                invention.
              </p>
              <p>
                The fame of Benjamin came to his peak in 1937 due to the
                undeniable support he received from their beloved citizens.
                Everything was the color of roses until the unexpected took
                place one night. Benjamin was slpeening peacefully in his
                mansion, when Nicolas III came and destroyed his garden. Every
                plant was damaged. His sunflowers dried out of water and his
                exquisite colorful trees were dead. This needed to end...
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid shadow rounded"
              src="/chaplin-crazy.png"
              alt="poster of Chaplin"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
