"use client"
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const CoverParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        init &&
        <div className="w-full h-full absolute top-0 left-0">
            <Particles
                id="tsparticles"
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab", // Changed to "grab" for line interaction
                            },
                        },
                        modes: {
                            grab: { // Configuration for the "grab" effect
                                distance: 140,
                                links: {
                                    opacity: 1,
                                },
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#3399ff", // A bright blue color
                        },
                        links: {
                            enable: true, // Enable links between particles
                            distance: 150,
                            color: "#3399ff",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            speed: 1,
                            random: true,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                    background: {
                        color: "transparent",
                    }
                }}
            />
        </div>
    );
};

export default CoverParticles;