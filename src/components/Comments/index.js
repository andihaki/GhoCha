import DISCUSSIONS from "./data"

const renderChild = ({ name, avatar, comment, date }) => {
  // @todo: why when importing from './component/Avatar' img not shown?
  const Avatar = document.createElement('img');
  Avatar.src = avatar;
  Avatar.alt = name;
  // @todo: styling using css
  // Avatar.className = ??
  Avatar.style.cssText = 'width:30px;height:30px;border-radius:50%;'

  const CommentItem = document.createElement('div');
  CommentItem.style.cssText = 'display:flex;gap:11px;margin-bottom:32px;';
  CommentItem.appendChild(Avatar);
  
  const Wrapper = document.createElement('div');
  Wrapper.style.cssText = 'color:#21293C;font-size:13px;margin:25px 0 0 26px;';
  const NameDate = document.createElement('div');
  NameDate.style.cssText = 'display:flex;align-items:center;'
  const Name = document.createElement('div');
  Name.style.cssText = 'line-height:16px;font-weight:600;'
  Name.innerText = name;
  const Date = document.createElement('span');
  Date.style.cssText = 'color:#4B587C;font-size:11px;line-height:14px;font-family:Inter;'
  Date.innerHTML = `・ ${date}`
  NameDate.appendChild(Name);
  NameDate.appendChild(Date);

  const Comment = document.createElement('p');
  Comment.style.cssText = 'margin-block:5px 15px;line-height:20px;';
  Comment.innerHTML = comment;

  const Reaction = document.createElement('div');
  Reaction.style.cssText = 'display:flex;gap:28px;color:#4B587C;font-size:11px;line-height:13px;font-family:Inter;font-weight:600;';
  const Upvote = document.createElement('div');
  Upvote.innerHTML = '▲  Upvote'
  const Reply = document.createElement('div');
  Reply.innerHTML = 'Reply'
  Reaction.appendChild(Upvote)
  Reaction.appendChild(Reply)

  
  Wrapper.appendChild(NameDate);
  Wrapper.appendChild(Comment);
  Wrapper.appendChild(Reaction);
  CommentItem.appendChild(Wrapper);
  return CommentItem;
}

const Comments = document.createElement('div');
// @todo: remove padding-top change to margin
Comments.style.cssText = 'margin-top:44px;padding-top:40px;border-top:1px solid #E5E5E5;';
DISCUSSIONS.map(({ name, avatar, comment, date, child }) => {
  // @todo: why when importing from './component/Avatar' img not shown?
  const Avatar = document.createElement('img')
  Avatar.src = avatar;
  Avatar.alt = name;
  // @todo: styling using css
  // Avatar.className = ??
  Avatar.style.cssText = 'width:30px;height:30px;border-radius:50%;'

  const CommentItem = document.createElement('div');
  CommentItem.style.cssText = 'display:flex;gap:11px;margin-bottom:32px;';
  CommentItem.appendChild(Avatar);
  
  const Wrapper = document.createElement('div');
  Wrapper.style.cssText = 'color:#21293C;font-size:13px;';
  const NameDate = document.createElement('div');
  NameDate.style.cssText = 'display:flex;align-items:center;'
  const Name = document.createElement('div');
  Name.style.cssText = 'line-height:16px;font-weight:600;'
  Name.innerText = name;
  const Date = document.createElement('span');
  Date.style.cssText = 'color:#4B587C;font-size:11px;line-height:14px;font-family:Inter;'
  Date.innerHTML = `・ ${date}`
  NameDate.appendChild(Name);
  NameDate.appendChild(Date);

  const Comment = document.createElement('p');
  Comment.style.cssText = 'margin-block:5px 15px;line-height:20px;';
  Comment.innerHTML = comment;

  const Reaction = document.createElement('div');
  Reaction.style.cssText = 'display:flex;gap:28px;color:#4B587C;font-size:11px;line-height:13px;font-family:Inter;font-weight:600;';
  const Upvote = document.createElement('div');
  Upvote.innerHTML = '▲  Upvote'
  const Reply = document.createElement('div');
  Reply.innerHTML = 'Reply'
  Reaction.appendChild(Upvote)
  Reaction.appendChild(Reply)

  Wrapper.appendChild(NameDate);
  Wrapper.appendChild(Comment);
  Wrapper.appendChild(Reaction);

  (child || []).map(item => {
    // const [ChildCommentItem] = renderChild(item);
    // CommentItem.appendChild(renderChild(item))
    // Comments.appendChild(renderChild(item));
  })
  
  CommentItem.appendChild(Wrapper);
  Comments.appendChild(CommentItem);
})



export default Comments;