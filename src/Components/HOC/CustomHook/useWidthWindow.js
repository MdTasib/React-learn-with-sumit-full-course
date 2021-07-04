import { useEffect, useState, useCallback } from 'react';

export default function useWidthWindow(screenSize) {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    // const checkScreenSize = () => {
    //     setOnSmallScreen(window.innerWidth < screenSize);
    // }

    // useCallback() hook
    const checkScreenSize = useCallback(() => {
        setOnSmallScreen(window.innerWidth < screenSize);
    }, [screenSize]);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [checkScreenSize])

    return onSmallScreen;
}