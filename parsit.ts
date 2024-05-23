// Attempt to select the first <img> element from the document
const imgElement = document.querySelector('img');

// Check if the imgElement is not null and is an instance of HTMLImageElement
if (imgElement instanceof HTMLImageElement) {
  // The imgElement is valid and can be used safely here
  console.log('Image found:', imgElement);
} else {
  // Handle the case where the imgElement is null or not an HTMLImageElement
  console.error('No image element found or the element is not an image.');
}
