import { ReactNode, useState } from "react"

interface Props {
    chars?: number,
    children : string
}


const ExpandableText = ({chars = 100, children} : Props) => {
const [isExpanded, setExpanded]=useState(false);

    if(chars > children.length) return <p>{children}</p>

  return (
    <>
    <p>{isExpanded ? children : children.substring(0, chars)+ '....'}</p>
    <button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button>
    </>
  )
}

export default ExpandableText