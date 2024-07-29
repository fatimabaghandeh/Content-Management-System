import React, { useState } from 'react';

const AddArticle = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newArticle = {
            title,
            body,
            author: "Your Name"
        };

        try {
            const response = await fetch('http://localhost:3001/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newArticle),
            });

            if (response.ok) {
                alert('Article submitted successfully!');
                setTitle('');
                setBody('');
            } else {
                alert('Failed to submit the article: ' + response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the article: ' + error.message);
        }
    };

    return (
        <div className='flex flex-col items-center mt-12'>
            <input
                type='text'
                className='w-full max-w-3xl text-4xl font-bold p-4 mb-4 border-b-2 border-gray-300 focus:outline-none'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className='w-full max-w-3xl h-96 text-xl p-4 border-b-2 border-gray-300 focus:outline-none resize-none'
                placeholder='...'
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button
                onClick={handleSubmit}
                className='mt-4 px-6 py-2 bg-black text-white rounded-3xl  focus:outline-none'
            >
                Publish
            </button>
        </div>
    );
};

export default AddArticle;
