export default function Text ({addEmoji,addBracket}){
    let text = 'I have learning Reacjs composition Vs Inheritance';
if(addEmoji){
    text = addEmoji(text,"✅")
}
if(addBracket){
    text = addBracket(text)
}
    return <div>{text} </div>;
}