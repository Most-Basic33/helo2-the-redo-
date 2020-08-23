-- select * from post;
select post.user_id,post.post_id,post.title,post.content,meme_user.username,meme_user.profile_picture
from post
inner join meme_user 
on meme_user.user_id = post.user_id;

--  select *
--  from posts p
--  join users u
--  on u.user_id = p.user_id