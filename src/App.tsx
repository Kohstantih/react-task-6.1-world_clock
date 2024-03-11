import { useEffect, useState } from 'react'
import Clock from './components/Clock'
import Form from './components/Form';
import './App.css'
import { ClockType } from './types/ClockType';
import { ClickButtonType } from './types/ClickButtonType';

function App() {
  const [hourDeg, setHourDeg] = useState(0);
  const [minuteDeg, setMinuteDeg] = useState(0);
  const [secondDeg, setSecondDeg] = useState(0);

  const [clockBox, setClockBox] = useState<ClockType[]>([]);

  const addClock = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const idClock = `${new Date().getTime()}`;
    const offset = e.target.offset.value * 30;
    const title = e.target.title.value;

    setClockBox([...clockBox, { offset, title, idClock }]);

    e.target.reset();
  }

  const delClock: ClickButtonType = (e) => {
    setClockBox(clockBox.filter((c) => c.idClock !== e.target.dataset.id))
  }

  useEffect(() => {
    const counter = () => {
      const now = new Date();

      setHourDeg(now.getUTCHours() % 12 * 30);
      setMinuteDeg(now.getMinutes() * 6);
      setSecondDeg(now.getSeconds() * 6);
    }
    counter();

    const interval =  setInterval(() => counter(), 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <>
      <Form addClock={addClock} />
      <div className="clock-box">
        {clockBox.map((c) => <Clock
          delClock={delClock}
          hourDeg={(hourDeg + c.offset)}
          minuteDeg={minuteDeg}
          secondDeg={secondDeg}
          title={c.title}
          id={c.idClock}
        />)}
      </div>
    </>
  )
}

export default App
