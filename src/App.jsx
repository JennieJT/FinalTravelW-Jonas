import './styles/index.css'
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
const H1 = styled.h1`
color: #aa56b0;
background-color: #eabdbd;`

function App() {
  return (
    <>
    <GlobalStyles />
      <H1>呵呵 罗罗说我老公和Money都是雷姆利亚的！(❁´◡`❁)</H1>
      <Button>Impossible</Button>
      <button>Why</button>
      <div>
      <input placeholder="Okay" />
      <input placeholder="Maybe my memory has some issues" />
      </div>
    </>
  );
}

export default App;
