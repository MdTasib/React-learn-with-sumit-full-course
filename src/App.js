/* eslint-disable no-unused-vars */
import React from 'react';
import Emoji from './Components/composition/Emoji';
import Text from './Components/composition/Text';
import Bracket from './Components/composition/Bracket';
import ClickCounter from './Components/Context/ClickCounter';
import MouseHoverCount from './Components/Context/MouseHoverCount';
import User from './Components/HOC/User';
import Counter from './Components/Context/Counter';
import Section from './Components/Context/Section';
import ThemeContext from './Components/Context/themeContext';
import UseState from './Components/HOC/useState/UseState';
import UseEffect from './Components/HOC/useEffect/UseEffect';
import UseCallBack from './Components/HOC/useCallBack/UseCallBack';
import UseRef from './Components/HOC/useRef/UseRef';
import UserReducer from './Components/HOC/useReducer/UserReducer';
import CustomHook from './Components/HOC/CustomHook/CustomHook';
import StyledComponent from './Components/Styling/StyledComponent';
import { GlobalStyle } from './Components/Styling/styles/Global.styles';
import ReactRouterDom from './Components/ReactRouterDom/ReactRouterDom';

export default class App extends React.Component {
	// context
	// state = {
	//   theme: 'dark',
	//   switchTheme: () => {
	//     this.setState(({ theme }) => {
	//       if (theme === 'dark') {
	//         return {
	//           theme: 'light',
	//         }
	//       }
	//       return {
	//         theme: 'dark',
	//       }
	//     })
	//   }
	// };

	render() {
		return (
			<div className='App'>
				{/* <CustomHook /> */}

				{/* <UserReducer /> */}

				{/* <UseRef /> */}

				{/* <UseCallBack /> */}

				{/* <UseEffect /> */}

				{/* <UseState /> */}

				{/* 
        // context
        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={this.state}><Section /></ThemeContext.Provider> */}

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

				{/* <GlobalStyle /> */}
				{/* <StyledComponent /> */}

				<ReactRouterDom />
			</div>
		);
	}
}
