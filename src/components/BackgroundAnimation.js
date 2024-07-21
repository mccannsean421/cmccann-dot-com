export default function BackgroundAnimation() {
  return (
    <div className="float-animation-container" aria-hidden="true">
      <svg
        width="480"
        height="480"
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="glass relative z-10 motion-safe:animate-float"
      >
        <rect width="480" height="480" fill="#D9D9D9" fill-opacity="0.5" />
      </svg>
    </div>
  );
}
