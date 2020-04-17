import { PresetColorTypes } from "./colorfulText"

class RealLog {
    private fontsize: number = 20

    public print(text: string, color: string = PresetColorTypes[0]) {
        console.log("%s", text);

    }
}

export default new RealLog