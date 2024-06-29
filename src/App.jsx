import GlobalStyles from "./styles/GlobalStyles";
import { Link } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
<>
<GlobalStyles />
<AppLayout>
  <div>
  <input placeholder="Guest Number" />
  <input placeholder="Whatever" />
  </div>
  <div>
    <ul>
      <li>
        <Link to = 'settings'>settings</Link>
      </li>
      <li>
        <Link to = 'account'>account</Link>
      </li>
      <li>
        <Link to = 'cabins'>cabins</Link>
      </li>      <li>
        <Link to = 'bookings'>bookings</Link>
      </li>      <li>
        <Link to = 'dashboard'>dashboard</Link>
      </li>      <li>
        <Link to = 'login'>login</Link>
      </li>      <li>
        <Link to = 'users'>users</Link>
      </li>   
    </ul>
  </div>
  </AppLayout>
</>
  );
}

export default App;
