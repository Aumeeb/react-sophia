export function analyzeFuncParams(fn: Function): string[] {
    if (typeof fn === "function") {
        const funcString: string = fn.toString()
        let parenthesisL = funcString.indexOf(String.fromCharCode(0x28))
        let parenthesisR = funcString.indexOf(String.fromCharCode(0x29))
        const paramsSeries = funcString.substr(parenthesisL + 1, parenthesisR - parenthesisL - 1)
        if (paramsSeries === "") return []
        return paramsSeries.split(',')
    }
    return []
}
export function recall() {

}

