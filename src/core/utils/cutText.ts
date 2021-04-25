type cutTextProps = string;

export const cutText = (text: cutTextProps):cutTextProps => {
    if (text.length < 56) return text;
    else return `${text.slice(0, 53)}...`;
}
