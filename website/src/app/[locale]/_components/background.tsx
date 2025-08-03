export const Background = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full blur-[10px]">
      <svg
        viewBox="0 0 800 600"
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
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="80" />
          </filter>
        </defs>

        <ellipse cx="400" cy="300" rx="450" ry="300" fill="url(#grad)" opacity="0.2" />
      </svg>
    </div>
  );
};
