import { PresetColorType } from "./colorfulText";
import { commonTextStyle } from "./template/singleText";
import { isNumber, isString } from "util";
import { typedStyle } from "./template/typedText";

export const textStyle = (color: PresetColorType) => `
    color: ${color};
        ${commonTextStyle}
    `
export const textInfoStyle = () => `
color: rgba(0,0,0,.6);
${commonTextStyle}
`
export const textSuccessStyle = () => `
color: rgb(105, 183, 25);
${commonTextStyle}
`
export const textFailureStyle = () => `
color:  #e84545de;
${commonTextStyle}
`

export const typedInfo = (value: any) => {
    if (isNumber(value)) console.log(`%c %c${value}`, `${typedStyle}`, commonTextStyle);
    if (isString(value)) console.log(`%c %c${value}`, `${typedStyle}`, commonTextStyle);

}