"use client";
import { useEffect, useMemo, useState, ReactElement } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadTextShape } from "@tsparticles/shape-text";

// This new component will render the particles background
const MatrixRainParticles = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadTextShape(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // The background of the canvas
        },
      },
      fpsLimit: 120, // Lower this to save performance
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
            parallax: {
              enable: true,
              force: 60, // The strength of the parallax effect
              smooth: 10, // How smooth the parallax effect is
            }
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#00FF41", // The color of the falling characters
        },
        move: {
          direction: MoveDirection.bottom,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3, // The speed of the fall. Adjust as needed.
          straight: true, // Characters fall in a straight line
        },
        number: {
          density: {
            enable: true,
            area: 400,
          },
          value: 600, // The number of characters on screen
        },
        opacity: {
          value: { min: 0.2, max: 0.8 }, // Characters will have varying opacities
        },
        shape: {
          type: "char", // We want to use characters as particles
          options: {
            char: {
              // The characters to use. Katakana is classic Matrix.
              value: [
                "日",
                "ﾊ",
                "ﾐ",
                "ﾋ",
                "ｰ",
                "ｳ",
                "ｼ",
                "ﾅ",
                "ﾓ",
                "ﾆ",
                "ｻ",
                "ﾜ",
                "ﾂ",
                "ｵ",
                "ﾘ",
                "ｱ",
                "ﾎ",
                "ﾃ",
                "ﾏ",
                "ｹ",
                "ﾒ",
                "ｴ",
                "ｶ",
                "ｷ",
                "ﾑ",
                "ﾕ",
                "ﾗ",
                "ｾ",
                "ﾈ",
                "ｽ",
                "ﾀ",
                "ﾇ",
                "ﾍ",
                "0",
                "1",
              ],
              font: "monospace",
              style: "",
              weight: "500",
              fill: true,
            },
          },
        },
        size: {
          value: { min: 10, max: 20 }, // Random size between 10 and 20
        },
      },
      detectRetina: true,
    }),
    []
  );

  console.log({ init });

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Ensure it's behind your content
        }}
      />
    );
  }

  return <></>;
};

// This is your main wrapper component
const MatrixRain = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return (
    <div
      style={{ position: "relative", overflow: "hidden", background: "#000" }}
    >
      <MatrixRainParticles />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default MatrixRain;
