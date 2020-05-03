export function shorten(s: string, len = 40, affix: string = "...") {
    if (s.length < len)
        return s.substr(0, len)
    else
        return s.substr(0, len) + affix
}