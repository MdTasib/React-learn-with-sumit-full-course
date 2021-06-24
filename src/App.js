/* eslint-disable no-unused-vars */
import React from 'react';
import Emoji from "./Components/composition/Emoji";
import Text from "./Components/composition/Text";
import Bracket from "./Components/composition/Bracket";
import ClickCounter from "./Components/Context/ClickCounter";
import MouseHoverCount from "./Components/Context/MouseHoverCount";
import User from "./Components/HOC/User";
import Counter from "./Components/Context/Counter";
import Section from './Components/Context/Section';

export default class App extends React.Component {
  state = {
    theme: 'dark'
  }

  render() {
    const { theme } = this.state;

    return (
      <div className="App">
        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>
        <Provider value={}><Section theme={theme} /></Provider>


        {/* <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>
        <Counter>
          {(counter, incrementCount) => (
            <MouseHoverCount count={counter} incrementCount={incrementCount} />
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
}