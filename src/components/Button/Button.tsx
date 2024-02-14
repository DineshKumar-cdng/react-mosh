import style from './Button.module.css';

interface Props{
    children: string;
    color?: "Primary" | "Danger" | "Secondary";
    onClick: () => void;
}

const Button = ({children, color = "Primary", onClick} : Props) => {
  return (
    <button type='button' className={ [style.btn, style['btn'+color]].join(' ')} onClick={onClick}>{children}</button>
  )
}

export default Button 