import { ChangeEvent, useState } from 'react';
import BirthdayProblem from '../utils/bp';
import { Mainput, Wrapput } from './styles';

const Probability = () => {
  const [people, setPeople] = useState(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const s = e.currentTarget.value;
    const n = parseInt(s);

    setPeople(n);
  };

  return (
    <Wrapput>
      <Mainput placeholder='People' defaultValue='' onChange={handleChange} />
      <Mainput
        placeholder='Probability'
        readOnly={true}
        value={people === NaN || !people ? '' : BirthdayProblem.probability(people).toString()}
      />
    </Wrapput>
  );
};

export default Probability;
