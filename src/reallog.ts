import { PresetColorTypes, PresetColorType } from "./colorfulText"
import { textStyle, textInfoStyle, textSuccessStyle, textFailureStyle } from "./template";
import { ExpectOperator } from "./types";
import { emoji } from "./emoji";
import { expectText } from "./template/expectText";


class RealLog {

    private fontsize: number = 20

    public info(text: string) {
        console.log(`%c ${emoji.bulb} ${text}`, textInfoStyle());
    }
    public success(text: string) {
        console.log(`%c ${emoji.corrent} ${text}`, textSuccessStyle());
    }
    public failure(text: string) {
        console.log(`%c ${emoji.incorrent} ${text}`, textFailureStyle());
    }
    public expect(left: unknown, o: ExpectOperator, right: unknown) {
        expectText(left, o, right)
    }
}

export const reallog = new RealLog()

