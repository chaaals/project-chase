import { createGlobalStyle } from "styled-components";

import OxygenRegular from "./fonts/Oxygen-Regular.ttf";
import OxygenLight from "./fonts/Oxygen-Light.ttf";
import OxygenBold from "./fonts/Oxygen-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face{
        font-family: 'Oxygen Regular';
        src: url(${OxygenRegular}) format('truetype');
    }
    @font-face{
        font-family: 'Oxygen Light';
        src: url(${OxygenLight}) format('truetype');
    }
    @font-face{
        font-family: 'Oxygen Bold';
        src: url(${OxygenBold}) format('truetype');
    }

    *,*::after,*::before{
        --primary-color: #2C3333;
        --secondary-color: #395B64;
        --neutral-color1: #A5C9CA;
        --neutral-color2: #E7F6F2;

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
