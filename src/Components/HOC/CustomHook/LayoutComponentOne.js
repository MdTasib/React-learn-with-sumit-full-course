import useWidthWindow from './useWidthWindow';

export default function LayoutComponentOne() {
    const onSmallScreen = useWidthWindow(600);

    return (
        <div>
            <h2>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h2>
        </div>
    )
}