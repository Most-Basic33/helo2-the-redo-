-- select * from post;
select post.user_id,post.title,post.content,meme_user.username,meme_user.profile_picture
from post
inner join meme_user 
on meme_user.user_id = post.user_id;