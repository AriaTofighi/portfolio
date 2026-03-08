"use client";

import React, { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    speedY: number;
    speedX: number;
    opacity: number;
    rotation1: number;
    rotation2: number;
    rotation3: number;
    rotationSpeed1: number;
    rotationSpeed2: number;
    rotationSpeed3: number;
    type: number; // to variate leaf appearance slightly
}

export function Particles() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate initial leaf particles
        const particleCount = 15; // Fewer, more deliberate leaves
        const newParticles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            // distribute them randomly across the screen initially so they aren't clumped
            newParticles.push(createParticle(i, Math.random() * 100, (Math.random() * 100) - 20));
        }

        setParticles(newParticles);

        let animationFrameId: number;
        let lastTime = performance.now();

        const animate = (time: number) => {
            const deltaTime = time - lastTime;
            lastTime = time;

            setParticles((prev) =>
                prev.map((p) => {
                    let newY = p.y + p.speedY * (deltaTime / 16);
                    // Complex swaying motion combining multiple sine waves
                    let newX = p.x +
                        Math.sin(time / 3000 + p.id) * p.speedX +
                        Math.cos(time / 2000 + p.id * 2) * (p.speedX * 0.5);

                    // Reset leaf if it goes off screen bottom
                    if (newY > 110) {
                        return createParticle(p.id, Math.random() * 100, -10);
                    }

                    return {
                        ...p,
                        y: newY,
                        x: newX,
                        // 3D tumbling effect
                        rotation1: p.rotation1 + p.rotationSpeed1 * (deltaTime / 16),
                        rotation2: p.rotation2 + p.rotationSpeed2 * (deltaTime / 16),
                        rotation3: p.rotation3 + p.rotationSpeed3 * (deltaTime / 16),
                    };
                })
            );

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    function createParticle(id: number, startX: number, startY: number): Particle {
        return {
            id,
            x: startX,
            y: startY,
            size: Math.random() * 16 + 12, // 12px to 28px
            speedY: Math.random() * 0.15 + 0.05, // VERY slow fall (0.05 to 0.2)
            speedX: Math.random() * 0.08 + 0.02, // Slow sway
            opacity: Math.random() * 0.15 + 0.05, // Extremely subtle (5% to 20%)
            rotation1: Math.random() * 360,
            rotation2: Math.random() * 360,
            rotation3: Math.random() * 360,
            // Tumbling speeds
            rotationSpeed1: (Math.random() - 0.5) * 1.5,
            rotationSpeed2: (Math.random() - 0.5) * 1.5,
            rotationSpeed3: (Math.random() - 0.5) * 1.5,
            type: Math.floor(Math.random() * 3), // 0, 1, or 2 for slight variety
        };
    }

    return (
        <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
            {particles.map((p) => {
                // Add slight variety to the leaf rendering based on type
                const LeafComponent = p.type === 0 ? Leaf : p.type === 1 ? Leaf : Leaf;

                return (
                    <div
                        key={p.id}
                        className="absolute text-foreground transition-opacity"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            opacity: p.opacity,
                            // 3D rotation transform for realistic tumbling
                            transform: `rotateX(${p.rotation1}deg) rotateY(${p.rotation2}deg) rotateZ(${p.rotation3}deg)`,
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <LeafComponent
                            width={p.size}
                            height={p.size}
                            strokeWidth={p.type === 1 ? 1.5 : 1} // Varied stroke weight
                            className={p.type === 2 ? "fill-foreground/20" : "fill-transparent"} // Varied fill
                        />
                    </div>
                )
            })}
        </div>
    );
}
