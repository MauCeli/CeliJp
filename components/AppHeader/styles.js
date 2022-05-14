import css from "styled-jsx/css";
import { color } from "../../styles/theme";

//estilos globales de la apliocacion
export const globalStyles = css.global``;

//estilos locales Applayout
export default css`
  .header {

  width: 100%;
  height: 23%;
  font-weight: bold;
  text-align: center;
  background: red;
  }


.header_logo {
  padding-top: 10px;
  font-size: 50px;
  text-shadow: 3px 4px rgba(black, .1);
  transition: .3s;
}
`;
