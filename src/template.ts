import { PresetColorType } from "./colorfulText";
import { commonTextStyle } from "./template/singleText";
import { isNumber, isString } from "util";
import { interfaceIcon, typeStringStyle, fieldKeysStyle, typeNumberStyle } from "./template/typedText";

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

export const typedInfo = (value: any, index?: number) => {
    let getType = typeof value
    if (isNumber(value)) console.log(`%c🔑: ${index} %c %c${getType}  %c${value}`, fieldKeysStyle, interfaceIcon, typeNumberStyle, commonTextStyle + typeNumberStyle);
    if (isString(value)) console.log(`%c🔑: ${index} %c %c${getType}  %c${value}`, fieldKeysStyle, interfaceIcon, typeStringStyle, commonTextStyle + typeStringStyle);
}