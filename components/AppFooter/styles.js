import css from "styled-jsx/css";
import { breakpoints } from "../../styles/theme";

export default css`
  
    footer {
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        background: #111;
        height: 120px;
        width: auto;
        color: #fff;
        -webkit-backdrop-filter: blur(8.9px);
    }

    .footer-content {
        display: flex;
        align-items: right;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    ul {
        list-style-type: none;
        text-align: center
    }  

    li {
        background-color: #F6E3CA;
        border: #D7C8B6 2px solid;
        display: inline;
        margin-right: 10px;
    }

    a:hover {
        background-color: white;
        color: #D7C8B6;
    }

    hr {
        background-color: white;
        width: 75%;
    }

    @media (min-width: 600px) {
        footer {
        }
    }
`;