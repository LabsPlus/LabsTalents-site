import { ReactNode, ButtonHTMLAttributes } from "react";
import './style.css'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode; // Propriedade para o conteúdo do botão
}

const Button = ({children, ...rest }: ButtonProps) => {
    return (
        <button  {...rest}>
            {children}
        </button>
    );
}

export default Button;
