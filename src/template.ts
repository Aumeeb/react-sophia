import { PresetColorType } from "./colorfulText";

export function infoStyle(color: PresetColorType) {
    return `
        ${color};
        background-color: gainsboro;
        height: 20px;
        border-radius: 5px;
        padding: 0 4px;
    `
}