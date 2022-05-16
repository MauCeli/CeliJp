import css from "styled-jsx/css";
import { color } from "../../styles/theme";

//estilos globales de la apliocacion
export const globalStyles = css.global`

`;

//estilos locales Applayout
export default css`
    
    .menu {
          display: grid;
          grid-column-gap: 1rem;
          max-width: 1000px;
          width: 95%;
          margin:auto;
          margin-bottom:1rem;
          margin-top:1rem;
          gap:1rem;
          
          
        }
        @media (min-width: 768px) {
          .menu {
            display: flex;
            
            justify-content: space-between;
            
          }
        }   
`;