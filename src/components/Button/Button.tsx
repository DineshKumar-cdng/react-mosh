import style from './Button.module.css';

interface Props{
    children: string;
    color?: "primary" | "danger" | "secondary";
    onClick: () => void;
}

const Button = ({children, color = "secondary", onClick} : Props) => {
  return (
    <button type='button' className={ [style.btn, style.btnPrimary].join(' ')} onClick={onClick}>{children}</button>
  )
}

export default Button