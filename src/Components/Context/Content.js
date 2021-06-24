import Counter from './Counter';
import MouseHoverCount from './MouseHoverCount';
import ThemeContext from '../Context/themeContext';

export default function Content() {
    return (
        <div>
            <h2>This is content</h2>
            <Counter>
                {
                    (counter, incrementCount) => {
                        return <ThemeContext.Consumer>{({ theme }) => <MouseHoverCount theme={theme} count={counter} incrementCount={incrementCount} />}</ThemeContext.Consumer>
                    }
                }
            </Counter>
        </div>
    )
}