import { useRef, useEffect } from "react"
import Input from "./Input";

export default function Form() {
    // input field useing useRef hook
    const inputRef = useRef(null);

    // component useing useRef hook
    const compoRef = useRef(null);

    // input field useing useRef hook
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    // component useing useRef hook
    useEffect(() => {
        compoRef.current.focus();
    }, [])

    return (
        <div>
            <p>
                <input ref={inputRef} type="text" placeholder='Inter something' />
            </p>
            <hr />
            <Input ref={compoRef} type='text' placeholder='enter your message' />
        </div>
    )
}