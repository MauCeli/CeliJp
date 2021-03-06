import css from "styled-jsx/css";
import { breakpoints } from "../../styles/theme";
export default css`
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          width: 100%;
          height: 100%;
          text-align: center;
          box-shadow: inset 0px 0px 122px 15px rgba(0,0,0,0.53);
        }
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }
        @media(min-width:${breakpoints.mobile}){
          .card{
            flex-basis: calc(20% - rem);
            grid-row-gap: 1rem;
          }
        }
       

        
`;

