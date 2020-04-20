
import { textSuccessStyle, textFailureStyle, textInfoStyle, typedInfo as printTypedInfo } from "./template";
import { ExpectOperator } from "./types";
import { emoji } from "./emoji";
import { expectText } from "./template/expectText";
import { isString, isNumber } from "util"



class RealLog {

    private fontsize: number = 20


    public info<T extends string | string[] | number[] | (string | number)[]>(text: T) {
        if (typeof text === "string" || typeof text === "number") {
            console.log(`%c ${emoji.bulb} ${text}`, textInfoStyle());
        }
        if (Array.isArray(text)) {   //we expect here is a pure one demension array with [string or number] inside

            let newText = text.map((t: any) => {
                if (isString(t)) {
                    return `'${t}'`
                } else {
                    return t
                }
            }
            )
            console.group(`%c ${emoji.bulb} [${newText.join(' ')}]`, textInfoStyle())
            text.forEach(t => printTypedInfo(t))
            console.groupEnd()

        }

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

