"use client";

import { useEffect, useRef, useState } from "react";

interface NetworkVisualizerProps {
  action: "upload" | "view";
  onSimulationComplete: () => void;
}

export default function NetworkVisualizer({
  action,
  onSimulationComplete,
}: NetworkVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSimulationComplete, setIsSimulationComplete] = useState(false);

  useEffect(() => {
    drawNetwork();
  }, []);

  const drawNetwork = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const clientNode = { x: 50, y: canvas.height / 2 };
    const serverNode = { x: canvas.width - 50, y: canvas.height / 2 };
    const packetRadius = 5;
    const speed = 2; // Reduced speed for better visibility

    let packetX = action === "upload" ? clientNode.x : serverNode.x;
    const packetY = clientNode.y;

    const drawScene = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connection line
      ctx.beginPath();
      ctx.moveTo(clientNode.x, clientNode.y);
      ctx.lineTo(serverNode.x, serverNode.y);
      ctx.strokeStyle = "#4B5563";
      ctx.stroke();

      // Draw nodes
      ctx.fillStyle = "#22D3EE";
      ctx.beginPath();
      ctx.arc(clientNode.x, clientNode.y, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(serverNode.x, serverNode.y, 20, 0, 2 * Math.PI);
      ctx.fill();

      // Draw labels
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "14px Arial";
      ctx.textAlign = "center";
      ctx.fillText("Client", clientNode.x, clientNode.y + 40);
      ctx.fillText("Server", serverNode.x, serverNode.y + 40);

      // Draw packet
      ctx.fillStyle = "#EF4444";
      ctx.beginPath();
      ctx.arc(packetX, packetY, packetRadius, 0, 2 * Math.PI);
      ctx.fill();
    };

    const animate = () => {
      drawScene();

      if (action === "upload") {
        packetX += speed;
        if (packetX < serverNode.x) {
          requestAnimationFrame(animate);
        } else {
          setIsSimulationComplete(true);
          onSimulationComplete();
        }
      } else {
        packetX -= speed;
        if (packetX > clientNode.x) {
          requestAnimationFrame(animate);
        } else {
          setIsSimulationComplete(true);
          onSimulationComplete();
        }
      }
    };

    animate();
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
        Network Visualization
      </h2>
      <canvas
        ref={canvasRef}
        width={800}
        height={200}
        className="bg-gray-800 rounded-lg shadow-lg mx-auto"
      />
      {isSimulationComplete && (
        <p className="text-center mt-4 text-green-400">
          {action === "upload" ? "Upload complete!" : "Download complete!"}
        </p>
      )}
    </div>
  );
}
