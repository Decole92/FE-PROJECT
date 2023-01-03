const tagList = document.getElementById('tag-list');

// Function to display tags from URL in the list
function displayTags() {
  // Get tags from URL
  const tags = window.location.hash.substring(6).split(',');

  // Clear the list
  tagList.innerHTML = '';

  // Add each tag as a list item
  for (const tag of tags) {
    const li = document.createElement('li');
    li.textContent = tag;
    tagList.appendChild(li);
  }
}

// Update the tag list when the URL hash is changed
window.addEventListener('hashchange', displayTags);

// Display the initial tag list when the page is loaded
displayTags();
