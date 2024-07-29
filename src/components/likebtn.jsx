import React, { useState } from 'react';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <span 
            className={`fa-heart ${liked ? 'fas text-red-500' : 'far text-gray-400'} cursor-pointer`} 
            onClick={toggleLike}>
        </span>
    );
};

export default LikeButton;
