import GlobalStyles from "../styles/GlobalStyles";
import Row from "../ui/Row";
import Header from "../ui/Header";
import Button from "../ui/Button";

export default function first() {
  return (
    <>
      <GlobalStyles />
      {/* <H1>呵呵 罗罗说我老公和Money都是雷姆利亚的！(❁´◡`❁)</H1>  */}
      <Row>
        <Header type="h1">The Wild Oasis</Header>
        <div>
          <Header type="h2">Check in and out</Header>
          <Button>Check In</Button>
          <Button>Check Out</Button>
        </div>
      </Row>
      <div>
        <input placeholder="Guest Number" />
        <input placeholder="Whatever" />
      </div>
    </>
  );
}
