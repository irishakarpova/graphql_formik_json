
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"


export default function Modal({ children, className = 'root-portal'}){
    const [root] = useState(document.createElement('div'))
    root.classList.add(className)

    useEffect(() => {
        document.body.appendChild(root)
        return () => {
            document.body.removeChild(root)
        }
    }, [])
    return createPortal(children, root)
    
    
}