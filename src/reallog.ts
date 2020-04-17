import { PresetColorTypes, PresetColorType } from "./colorfulText"
import { textStyle, textInfoStyle, textSuccessStyle, textFailureStyle } from "./template";

class RealLog {

    private fontsize: number = 20

    public info(text: string) {
        console.log(`%c 💡 ${text}`, textInfoStyle());
    }
    public success(text: string) {
        console.log(`%c ✔️ ${text}`, textSuccessStyle());
    }
    public failure(text: string) {
        console.log(`%c ❌ ${text}`, textFailureStyle());
    }
    /**
     * name
     */
    public name() {

    }
    public assert(a: any) {

    }
}

export const reallog = new RealLog()

