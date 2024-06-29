import { useCountUp } from "final-countdown-js";

const ReactCounter = () => {
  const { current, isPaused, isOver, pause, play, reset, togglePause } =
    useCountUp(0, 10, {
      startPaused: false,
      onFinish: () => console.log("Counter ended"),
    });

  return (
    <div>
      <p>Counter value: {current.withLeadingZero}</p>
      <p>Counter value: {current.withoutLeadingZero}</p>
      <p>Is the counter paused? {isPaused ? "Yes" : "No"}</p>
      <p>Has the counter over? {isOver ? "Yes" : "No"}</p>
      <button onClick={pause}>Pause</button>
      <button onClick={play}>Play</button>
      <button onClick={reset}>Reset</button>
      <button onClick={togglePause}>Toggle Pause</button>
    </div>
  );
};

export default ReactCounter;