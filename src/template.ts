import { PresetColorType } from "./colorfulText";
import { commonText } from "./template/singleText";

export const textStyle = (color: PresetColorType) => `
    color: ${color};
        ${commonText}
    `
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

export const typedInfoStyle = (type: any) => {

    return `
color: rgba(0,0,0,.6);
${commonText}
`
}