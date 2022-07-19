import { BLUE } from "../../constants/COLORS"
import Avatar from "../Avatar"

const Input = document.createElement('input');
Input.placeholder = 'What are your thoughts?';
Input.style.cssText = 'flex-shrink:0;flex-grow:1;border-radius:4px;border:1px solid #E5E5E5;padding:6px 10px;color:#8A8F9C;';

const Button = document.createElement('button');
Button.innerHTML = 'Comment';
Button.style.cssText = `background-color:${BLUE};color:white;padding:6px 16px 3px;border-radius:4px;border:unset;font-weight:700;`;

const NewComment = document.createElement('div');
NewComment.style.cssText = 'display:flex;gap:12px;';

NewComment.appendChild(Avatar);
NewComment.appendChild(Input);
NewComment.appendChild(Button);

export default NewComment;