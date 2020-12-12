async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const body = document.querySelector('input[name="body-text"]').value.trim();
  
  console.log("title", title, "body", body)
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        id,
        title,
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
  };
  
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);