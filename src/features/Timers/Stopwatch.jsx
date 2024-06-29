import { useStopwatch } from "final-countdown-js";
import styled, { css } from "styled-components";
import Button from "../../ui/Button";
// import DATA from "../../data/stopwatch/stopwatch-data";

const variations = {
  primary: css`
    color: #010000ff;
    background-color: #ca2a2a;
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);
  `,
};
const Background = styled.div`
  text-align: center;
  font-size: 4rem;
  padding-top: 4rem;
  max-height: 20rem;
  ${(props) => variations[props.variations]}
`;

const ReactCounter = () => {
  const { current, reset, togglePause, isPaused } = useStopwatch({
    // endTime: "10:00:00:10",
    startPaused: true,
    separator: ":",
    onFinish: () => console.log("Stopwatch ended"),
  });

  return (
    <Background variations="primary">
      <div> {current.withLeadingZero}</div>
      <Button onClick={reset}>Reset</Button>
      <Button onClick={togglePause}>{isPaused ? "start" : "pause"}</Button>
      <Button>Record</Button>
    </Background>
  );
};

export default ReactCounter;
