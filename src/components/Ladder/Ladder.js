const Ladder = ({ x, y, width, height }) => (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        bottom: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: 'green', // Different color for distinction
      }}
    />
  );
  export default Ladder;