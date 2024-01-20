
const Ladder = ({ x, y, width, height }) => (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        bottom: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: 'url(./ladder-Sprite-0002.png)',
        
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
  export default Ladder;