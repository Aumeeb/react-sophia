import { PresetColorType } from "./colorfulText";
import { commonText } from "./template/singleText";

export function textStyle(color: PresetColorType) {
    return `
        ${color};
        background-color: gainsboro;
        height: 20px;
        border-radius: 5px;
        padding: 0 4px;
    `
}
export const textInfoStyle = () => `
color: rgba(0,0,0,.6);
${commonText}
`
export const textSuccessStyle = () => `
color: rgb(105, 183, 25);
${commonText}
`
export const textFailureStyle = () => `
color:  #e84545de;
${commonText}
`

