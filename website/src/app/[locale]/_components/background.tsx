export const Background = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#ffe0e0" />
            <stop offset="25%" stopColor="#ffd9f4" />
            <stop offset="50%" stopColor="#f7f1ff" />
            <stop offset="75%" stopColor="#d8f2ff" />
            <stop offset="100%" stopColor="#c5f7e8" />
          </radialGradient>
        </defs>
        <ellipse cx="50" cy="90" rx="100" ry="100" fill="url(#grad)" opacity="0.1" />
      </svg>
    </div>
  );
};
