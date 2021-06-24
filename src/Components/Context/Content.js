import Counter from './Counter';
import MouseHoverCount from './MouseHoverCount';

export default function Content({ theme }) {
    return (
        <div>
            <h2>This is content</h2>
            <Counter>
                {
                    (counter, incrementCount) => {
                        return (value) => <MouseHoverCount theme={theme} count={counter} incrementCount={incrementCount} />
                    }
                }
            </Counter>
        </div>
    )
}