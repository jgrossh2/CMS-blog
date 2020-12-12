async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('input[name="post-body"]').value;
   
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            title,
            body
          }),
          
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.replace('/dashboard')
        } else {
          alert(response.statusText);
        }
        console.log("save clicked")
}
    
  
async function deleteFormHandler(event) {
  event.preventDefault();
    
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
      ];
      const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
      });
          
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
    }
      console.log('button clicked');
}
      
document.querySelector('#save-btn').addEventListener('click', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteFormHandler);