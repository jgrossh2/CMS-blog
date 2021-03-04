async function commentFormHandler(event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value.trim();
  const body = document
    .querySelector('input[name="comment-body"]')
    .value.trim();
  console.log("postId", postId, "body", body);

  // all combined in if statement to prevent empty strings
  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      postId,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#new-comment-form")
  .addEventListener("click", commentFormHandler);
