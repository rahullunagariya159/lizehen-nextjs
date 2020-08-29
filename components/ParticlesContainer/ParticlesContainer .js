import React from "react";
import Particles from "react-tsparticles";

function ParticlesContainer(props) {
  return (
    <>
      <Particles
        id="tsparticles"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
        }}
        options={{
          background: {
            color: {
              value: "rgb(100 100 100 / 0%)",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 0.4,
                size: 80,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 100,
              enable: false,
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3.5,
              straight: false,
            },
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "star",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}

export default ParticlesContainer;
