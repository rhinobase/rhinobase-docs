export default function PatternDots() {
  const gap = 15,
    size = 1;
  const path = createGridDotsPath(size, "#81818a");

  return (
    <>
      <div className="absolute h-full w-full">
        <svg className="h-full w-full">
          <pattern
            id={"pattern-0"}
            x={0}
            y={0}
            width={gap}
            height={gap}
            patternUnits="userSpaceOnUse"
          >
            {path}
          </pattern>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={"url(#pattern-0)"}
          />
        </svg>
      </div>
    </>
  );
}

const createGridDotsPath = (size: number, fill: string): React.ReactElement => {
  return <circle cx={size} cy={size} r={size} fill={fill} />;
};
