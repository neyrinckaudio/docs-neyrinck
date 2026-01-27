// Function to check for necessary features
function isBrowserSupported() {
  // Check for CSS custom properties (variables)
  const isCustomPropertiesSupported = window.CSS && window.CSS.supports && window.CSS.supports('--fake-var', 0);
  // Add other feature checks as needed
  // For example, you could check for the 'details' tag, or other modern APIs
  const isDetailsSupported = 'open' in document.createElement('details');

  // Return true only if all required features are supported
  return isCustomPropertiesSupported && isDetailsSupported;
}

// Function to display the warning
function showUnsupportedBrowserWarning() {
  const warningMessage = `
    <div class="unsupported-browser-warning" style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      background-color: #ffcc00;
      color: #333;
      text-align: center;
      font-family: sans-serif;
      z-index: 9999;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    ">
      <p><strong>Browser Not Supported:</strong> For the best experience, please upgrade to a modern browser like Google Chrome, Mozilla Firefox, or Microsoft Edge.</p>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', warningMessage);
}

// Subscribe to the document$ observable to run the check after each page load
// The document$ observable is recommended for Material for MkDocs when using instant loading.
document$.subscribe(() => {
  if (!isBrowserSupported()) {
    showUnsupportedBrowserWarning();
  }
});
