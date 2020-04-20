import { SVGType } from "../types";

export const path: string = './resource/';

/** SVG  width&height px*/
const side = '32';

export function embedSVG(type: SVGType) {

    let embed = document.createElement('embed');
    embed.width = side;
    embed.height = side;
    embed.src = path + type;

    return embed;
}
export function SVGSrc(type: SVGType) {
    return path + type.toString().toLocaleLowerCase() + ".svg";
}