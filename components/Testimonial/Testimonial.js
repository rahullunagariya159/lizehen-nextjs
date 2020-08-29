import React from "react";
import dynamic from "next/dynamic";
import SectionTitle from "../common/SectionTitle";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// dynamic(import("./owl.carousel/dist/assets/owl.carousel.css"), {
//   ssr: false,
// });

// dynamic(import("./owl.carousel/dist/assets/owl.theme.default.css"), {
//   ssr: false,
// });

function Testimonial(props) {
  const state = {
    clients: [
      {
        id: 1,
        img: "img-1.jpg",
        name: "Jeremiah Eskew",
        designation: "Developer",
        description:
          "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their Eopean languages common the theory of popular words.",
      },
      {
        id: 2,
        img: "img-2.jpg",
        name: "Cameron Green",
        designation: "Designer",
        description:
          "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their Eopean languages common the theory of popular words.",
      },
      {
        id: 3,
        img: "img-3.jpg",
        name: "Sammy Randolph",
        designation: "Manager",
        description:
          "The European languages are members of the same family Their separate existence is a myth For science, music, sport, etc, europe their Eopean languages common the theory of popular words.",
      },
    ],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      960: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  };
  return (
    <>
      <section className="section bg-testimonial" id="testimonial">
        <div className="container">
          <SectionTitle
            title="Testimonial"
            description="What they say about us"
            subDescription="honest reviews"
          />

          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <OwlCarousel
                className="testi-carousel"
                items={1}
                loop={true}
                margin={10}
                nav={false}
                dots={true}
                autoplay={true}
                responsive={state.responsive}
                autoplayHoverPause={true}
                autoplayTimeout={2500}
              >
                {state.clients.map((clients, key) => (
                  <div className="testimonial-box text-center p-4" key={key}>
                    <div className="testi-img-user">
                      <img
                        src={`images/users/${clients.img}`}
                        alt="img"
                        className="rounded-circle testi-user mx-auto d-block"
                      />
                    </div>
                    <img
                      src="images/client-quote.png"
                      className="mt-4 pt-2 client-quote-img"
                      alt="client-image"
                    />
                    <h4 className="font-italic mt-4 pt-2">
                      {clients.description}
                    </h4>
                    <div className="testi-border mt-4" />
                    <p className="text-uppercase text-muted mb-0 mt-4 f-14">
                      {clients.designation}
                    </p>
                    <h5 className="mt-2">{clients.name}</h5>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
