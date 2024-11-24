import CountUp from 'react-countup';

type CountUpProps = {
  start: number;
  end: number;
  duration?: number; // in seconds
};

const CountUpComponent: React.FC<CountUpProps> = ({ start, end, duration = 4 }) => {
  return (
    <div style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
      <CountUp start={start} end={end} duration={duration} />
    </div>
  );
};

export default CountUpComponent;