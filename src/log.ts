import { PresetColorTypes, PresetColorType } from "./colorfulText"
import { infoStyle } from "./template";

class RealLog {
    private fontsize: number = 20

    public info(text: string, color: PresetColorType = PresetColorTypes[0]) {
        console.log(`%c ${text}`, infoStyle(color));


    }
}

export const reallog = new RealLog()

