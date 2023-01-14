import * as React from 'react';
import './style.css';
import { useStyletron } from 'baseui';
import { styled } from 'baseui';

const Button = styled('button', ({ $theme }) => {
  return {
    padding: '10px',
    width: '5vw',
    height: '10vh',
    borderRadius: '50%',
    fontSize: '35px',
    background: 'rgba(255, 112, 0, 0.92)',
    border: $theme.borders.border600,
    color: 'white',
    margin: '10px 10% 5% 13%',
    '@media screen and (max-width:600px)': {
      width: '15vw',
      padding: '5px',
      fontSize: '20px',
    },
  };
});
export default function App() {
  const [value, setValue] = React.useState(10);
  const [color, setColor] = React.useState(false);
  const [css, theme] = useStyletron();
  function handleIncrement() {
    const temp = value + 1;
    if (temp >= 20) {
      setColor(true);
    }

    setValue(temp);
  }
  function handleDecrement() {
    const temp = value - 1;
    if (temp < 20) {
      setColor(false);
    }

    setValue(temp);
  }

  return (
    <div
      className={css({
        background: theme.colors.primary500,
        margin: '10% 40%',
        width: '20vw',
        height: '55vh',
        border: '1px solid rgba(17, 17, 22, 0.76)',
        borderRadius: '30px',

        '@media screen and (max-width:600px)': {
          width: '60vw',
          margin: '30% 20% ',
        },
      })}
    >
      <div
        className={css({
          background: color ? theme.colors.warning : 'rgba(0, 212, 255, 0.91)',
          color: 'white',
          margin: '20% ',
          width: '10vw',
          height: '20Vh',
          padding: '10px',
          border: '2px solid white',
          borderRadius: '50%',
          textAlign: 'center',
          '@media screen and (max-width:600px)': {
            width: '25vw',
            height: '15vh',
            margin: '25%',
          },
        })}
      >
        <p
          className={css({
            textAlign: 'center',
            marginTop: '40%',
            fontSize: '40px',
            '@media screen and (max-width:600px)': {
              fontSize: '20px',
              margin: '28%',
            },
          })}
        >
          {value}
          <sup>0</sup>C
          <br />
        </p>
      </div>
      <div>
        <Button onClick={handleIncrement}>+</Button>
        <Button onClick={handleDecrement}>-</Button>
      </div>
    </div>
  );
}
