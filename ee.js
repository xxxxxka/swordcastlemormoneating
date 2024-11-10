// xurrkaEmbed.js

// Function to create a button and iframe for embedding
function createXurrkaEmbed(containerId, url, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  // Create and style the button
  const button = document.createElement('button');
  button.innerText = 'Xurrka';
  button.style.padding = '10px 20px';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  button.style.backgroundColor = '#333'; // Dark button
  button.style.color = '#fff';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.marginBottom = '10px';

  // Add button click event
  button.addEventListener('click', () => {
    // Remove existing iframe if any
    const existingIframe = container.querySelector('iframe');
    if (existingIframe) {
      existingIframe.remove();
    }

    // Create and style the iframe
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = options.width || '100%';
    iframe.height = options.height || '500px';
    iframe.frameBorder = options.frameBorder || '0';
    iframe.style.border = 'none';
    iframe.style.backgroundColor = '#000'; // Black background
    iframe.allowFullscreen = options.allowFullscreen || true;

    // Append iframe to the container
    container.appendChild(iframe);
  });

  // Append the button to the container
  container.appendChild(button);
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
  createXurrkaEmbed('embed-container', 'https://xurrka.com', {
    width: '100%',
    height: '500px',
    allowFullscreen: true
  });
});
