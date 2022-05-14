import css from "styled-jsx/css";
import { color } from "../../styles/theme";

//estilos globales de la apliocacion
export const globalStyles = css.global``;

//estilos locales Applayout
export default css`
  .header {
  background: ${color.primary};
  width: 100%;
  height: 23%;
  font-weight: bold;
  text-align: center;
  padding:0.3rem;
  color:white;
  }


.header_logo {
  padding-top: 0px;
  margin:0;
  font-size: 50px;
  text-shadow: 3px 4px rgba(black, .1);
  transition: .3s;
}
`;
