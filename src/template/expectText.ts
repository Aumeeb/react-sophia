import { ExpectOperator } from "../types"
import { emoji } from "../emoji"
import { textStyle } from "../template"

export function expectText(left: unknown, o: ExpectOperator, right: unknown) {
    let x = `${emoji.thinking} ${left} ${o} ${right}  =>`
    if (o === "==")
        console.log(`%c ${x} ${left == right ? emoji.corrent : emoji.incorrent}`, textStyle("violet"))
    if (o === "!=")
        console.log(`%c ${x} ${left != right ? emoji.corrent : emoji.incorrent}`, textStyle("violet"))
    if (o === "===")
        console.log(`%c ${x} ${left === right ? emoji.corrent : emoji.incorrent}`, textStyle("violet"))
    if (o === "!==")
        console.log(`%c ${x} ${left !== right ? emoji.corrent : emoji.incorrent}`, textStyle("violet"))
}
