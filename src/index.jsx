import { h, render } from "preact";

const App = () => {
  return (
    <div>
      <p>Hello, world!</p>
    </div>
  );
};

render(<App />, document.getElementById("app"));
