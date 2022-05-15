import css from "styled-jsx/css";
import { color } from "../../styles/theme";

//estilos globales de la apliocacion
export const globalStyles = css.global`

`;

//estilos locales Applayout
export default css`
    
    .menu {
          max-width: 1000px;
          width: 95%;
          margin: 1rem auto;
          margin-bottom:1rem;
          
        }
        @media (min-width: 768px) {
          .menu {
            display: flex;
            justify-content: space-between;
          }
        }   
`;