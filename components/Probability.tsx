import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import BirthdayProblem from '../utils/bp';
import { Mainput, ToastText, Wrapput } from './styles';
import copyToClipboard from 'copy-to-clipboard';

const Probability = () => {
  const [people, setPeople] = useState(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const s = e.currentTarget.value;
    const n = parseInt(s);

    setPeople(n);
  };

  const copy = () => {
    if (people === NaN || !people) return;

    copyToClipboard(BirthdayProblem.probability(people).toString());
    toast.info(<ToastText>Copied to clipboard</ToastText>, {
      progress: undefined,
      closeButton: null,
    });
  };

  return (
    <Wrapput>
      <Mainput placeholder='People' defaultValue='' onChange={handleChange} />
      <Mainput
        placeholder='Probability'
        readOnly={true}
        value={people === NaN || !people ? '' : BirthdayProblem.probability(people).toString()}
        onClick={copy}
        style={{
          cursor: 'pointer',
        }}
      />
    </Wrapput>
  );
};

export default Probability;
