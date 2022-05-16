import css from "styled-jsx/css";
import { color } from "../../styles/theme";

//estilos globales de la apliocacion
export const globalStyles = css.global`

`;

//estilos locales Applayout
export default css`
  
  button {
  min-width:auto;
  height: auto;
  color: #fff;
  padding: px 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  border-radius: 5px;
  border: 2px solid ${color.primary};
  background: ${color.primary};
  
}
button:hover {
  background: #fff;
  color: ${color.primary}
}
.boton_padding{
          padding-bottom:1rem;
        }
`;