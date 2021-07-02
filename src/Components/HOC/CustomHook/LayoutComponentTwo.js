import useWidthWindow from "./useWidthWindow"

export default function LayoutComponentTwo() {
    const onSmallScreen = useWidthWindow(760);

    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h2>This is another component</h2>
        </div>
    )
}