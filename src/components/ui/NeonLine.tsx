interface NeonLineProps {
  color?: string;
  delay?: number;
  duration?: number;
  top?: string;
  left?: string;
}

export default function NeonLine({
  color = "#00aaff",
  delay = 0,
  duration = 8,
  top = "0%",
  left = "0%",
}: NeonLineProps) {
  return (
    <div
      className="neon-streak"
      style={{
        "--streak-color": color,
        "--streak-delay": `${delay}s`,
        "--streak-duration": `${duration}s`,
        top,
        left,
      } as React.CSSProperties}
    />
  );
}
