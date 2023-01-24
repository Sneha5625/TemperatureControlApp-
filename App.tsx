import * as React from 'react';
import './style.css';
import { useStyletron } from 'baseui';
import { Button, SHAPE, SIZE } from 'baseui/button';

export default function App() {
  const [value, setValue] = React.useState(10);
  const [color, setColor] = React.useState(true);
  const [css, theme] = useStyletron();

  function handleIncrement() {
    const temp = value + 1;
    if (temp > 35) {
      return;
    }
    if (temp >= 17) {
      setColor(false);
    }
    setValue(temp);
  }

  function handleDecrement() {
    const temp = value - 1;
    if (temp < 0) {
      return;
    }
    if (temp < 15) {
      setColor(true);
    }
    setValue(temp);
  }
  return (
    <div
      className={css({
        background: '#9CC3D5FF',
        padding: '4rem',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        borderRadius: '25px',
        transform: 'translate(-50%, -50%)',
      })}
    >
      <div
        className={css({
          background: color ? '#0063B2FF' : 'orange',
          height: '12rem',
          width: '12rem',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '25px',
          color: 'white',
          border: '2px solid white',
        })}
      >
        {value}°C
      </div>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '30px',
        })}
      >
        <Button
          overrides={{
            BaseButton: {
              style: {
                backgroundColor: '#0063B2FF',
                fontSize: '20px',
                border: '2.5px solid white',
                ':hover': {
                  backgroundColor: '#0063B2FF',
                },
              },
            },
          }}
          size={SIZE.large}
          shape={SHAPE.circle}
          onClick={handleIncrement}
        >
          +
        </Button>
        <Button
          overrides={{
            BaseButton: {
              style: {
                backgroundColor: '#0063B2FF',
                fontSize: '20px',
                border: '2.5px solid white',
                ':hover': {
                  backgroundColor: '#0063B2FF',
                },
              },
            },
          }}
          size={SIZE.large}
          shape={SHAPE.circle}
          onClick={handleDecrement}
        >
          -
        </Button>
      </div>
    </div>
  );
}
