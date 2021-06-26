import Counter from './Counter';
import MouseHoverCount from './MouseHoverCount';
import ThemeContext from '../Context/themeContext';
import React, { useContext } from 'react';

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;

    console.log('content render');
    return (
        <div>
            <h2>This is content</h2>
            <Counter>
                {
                    (counter, incrementCount) => (
                        <MouseHoverCount
                            theme={theme}
                            count={counter}
                            incrementCount={incrementCount}
                            switchTheme={switchTheme}
                        />
                    )
                }
            </Counter>
        </div>
    )
}