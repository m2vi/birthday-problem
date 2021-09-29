import { ChangeEvent, useState } from 'react';
import BirthdayProblem from '../utils/bp';
import { Mainput, Wrapput } from './styles';

const Probability = () => {
  const [probability, setProbability] = useState(50);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const s = e.currentTarget.value;
    const n = parseInt(s);

    setProbability(n);
  };

  return (
    <Wrapput>
      <Mainput placeholder='Probability' defaultValue={probability.toString()} onChange={handleChange} />
      <Mainput
        placeholder='People'
        readOnly={true}
        value={probability.toString() === 'NaN' ? '' : BirthdayProblem.people(probability).toString()}
      />
    </Wrapput>
  );
};

export default Probability;
