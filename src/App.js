import Comments from './components/Comments';
import Heading from './components/Heading'
import Hr from './components/Hr';
import NewComment from './components/NewComment'

const _App = document.body.appendChild(Heading);
document.body.appendChild(NewComment);
document.body.appendChild(Comments);

export default _App;