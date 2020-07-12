insert into meme_user (
    username,
    email,
    password,
    profile_picture
) values (
    $1,
    $2,
    ${password},
    ${profilePicture}
)
returning user_id, username, email, profile_picture;