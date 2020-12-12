async function commentFormHandler(event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id]').value.trim();
    const body = document.querySelector('input[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    // all combined in if statement to prevent empty strings
    if (body) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            postId,
            body
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
      }
  };
  
  document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);