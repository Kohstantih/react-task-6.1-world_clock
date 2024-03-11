import { ClockPropsType } from "../types/ClockPropsType";

export default function Clock({ title, hourDeg, minuteDeg, secondDeg, delClock, id } : ClockPropsType) {
    
    return (
        <>  <div key={id} className="clock_wrapper">
                <h3 className="clock_title">{title}</h3>
                <div className="clock">
                    <button onClick={delClock} data-id={id} type="button" className="btn_del-clock">&#10060;</button>
                    <div className="hour-hand" style={{transform: `rotate(${hourDeg}deg)`}} ></div>
                    <div className="minute-hand" style={{transform: `rotate(${minuteDeg}deg)`}} ></div>
                    <div className="second-hand" style={{transform: `rotate(${secondDeg}deg)`}} ></div>
                    <div className="center"></div>
                    <div className="twelve-digit">12</div>
                    <div className="three-digit">3</div>
                    <div className="six-digit">6</div>
                    <div className="nine-digit">9</div>
                </div>
            </div>
        </>
    )
}