import Emoji from "./Components/composition/Emoji";
import Text from "./Components/composition/Text";
import Bracket from "./Components/composition/Bracket";
import ClickCounter from "./Components/HOC/ClickCounter";
import MouseHoverCount from "./Components/HOC/MouseHoverCount";


function App() {
  return (
    <div className="App">
      <ClickCounter />
      <MouseHoverCount />
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
