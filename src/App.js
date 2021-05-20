/* eslint-disable no-unused-vars */
import Emoji from "./Components/composition/Emoji";
import Text from "./Components/composition/Text";
import Bracket from "./Components/composition/Bracket";
import ClickCounter from "./Components/HOC/ClickCounter";
import MouseHoverCount from "./Components/HOC/MouseHoverCount";
import User from "./Components/HOC/User";
import Counter from "./Components/HOC/Counter";


function App() {
  return (
    <div className="App">
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <MouseHoverCount count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <User render={(isLoggedIn) => isLoggedIn ? 'Tasib' : 'Guest'} /> */}
      {/* <Emoji>
        {({ addEmoji }) => <Text addEmoji={addEmoji} />}
      </Emoji>

      <Emoji>
        {({ addEmoji }) => (
          <Bracket>
            {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
          </Bracket>
        )}
      </Emoji> */}
    </div>
  );
}

export default App;
