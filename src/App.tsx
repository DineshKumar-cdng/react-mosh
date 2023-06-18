import { useState } from "react";
import Form from "./components/Form";

function App()
{
  const [alertVisible, setAlertVisibility] =useState(false);
  const[cart , setCart]=useState({
    discount:.1,
    items: [
      {id: 1, name: 'product1' ,qty : 1},
      {id: 2, name: 'product2' ,qty : 1}
    ]
  });

  const handleClick= () =>{
    setCart({...cart, items : cart.items.map(item => item.id === 1 ? {...item, qty : item.qty + 1} : item)});
  }

  return <div>
    <Form />
  </div>
}

export default App
