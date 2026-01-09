const titleInput = document.getElementById("title");
const imageInput = document.getElementById("image");
const contentInput = document.getElementById("content");
const addPostBtn = document.getElementById("addPost");
const postList = document.getElementById("postList");

// Load from localStorage
let posts = JSON.parse(localStorage.getItem("posts")) || [];
displayPosts();

// Add Post
addPostBtn.addEventListener("click", function () {
  const title = titleInput.value.trim();
  const image = imageInput.value.trim();
  const content = contentInput.value.trim();

  if (title === "" || content === "") {
    alert("Enter title and content!");
    return;
  }

  const newPost = {
    id: Date.now(),
    title,
    image,
    content
  };

  posts.push(newPost);
  savePosts();
  clearPost();
  displayPosts();
});

// Display posts
function displayPosts() {
  postList.innerHTML = "";

  posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
      <h3>${post.title}</h3>
      ${post.image ? `<img src="${post.image}" alt="Post Image">` : ""}
      <p>${post.content}</p>
      <div class="actions">
        <button class="edit-btn" onclick="editPost(${post.id})">Edit</button>
        <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
      </div>
    `;

    postList.appendChild(postDiv);
  });
}

// Save to localStorage
function savePosts() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Clear inputs
function clearPost() {
  titleInput.value = "";
  imageInput.value = "";
  contentInput.value = "";
}

// Delete Post
function deletePost(id) {
  const confirmDelete = confirm("Delete post?");
  if (!confirmDelete) return;
  posts = posts.filter(post => post.id !== id);
  savePosts();
  displayPosts();
}

// Edit Post
function editPost(id) {
  const post = posts.find(p => p.id === id);

  const newTitle = prompt("Change title:", post.title);
  const newImage = prompt("Change Image URL:", post.image);
  const newContent = prompt("Change Content:", post.content);

  if (newTitle !== null && newContent !== null) {
    post.title = newTitle.trim();
    post.image = newImage ? newImage.trim() : "";
    post.content = newContent.trim();

    savePosts();
    displayPosts();
  }
}
