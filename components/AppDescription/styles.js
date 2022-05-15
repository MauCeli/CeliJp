import css from "styled-jsx/css";
import { color } from "../../styles/theme";

//estilos globales de la apliocacion
export const globalStyles = css.global`

`;

//estilos locales Applayout
export default css`
    
    .section_info {
          max-width: 1200px;
          width: 95%;
          margin: 0 auto;
          
        }
        @media (min-width: 768px) {
          .menu {
            display: flex;
            justify-content: space-between;
          }
        }   
`;