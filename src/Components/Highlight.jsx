export const Highlight = ({num1, num2}) => {
    if(typeof num1 !== "number" || typeof num2 !== "number") return {};
    if(num1 > num2) {
        return {color: "blue", fontWeight: "bold", backgroundColor: "white", textDecoration: "underline" }
    } else {return {}}
}
