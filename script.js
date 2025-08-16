window.onload = () => {
  const el = document.getElementById('typed');
  const rawText = document.getElementById('typewriter').getAttribute('data-text');
  let i = 0;
  let isTag = false;
  let htmlBuffer = '';

  function type() {
    if (i < rawText.length) {
      const char = rawText[i];
      htmlBuffer += char;

      // Track if inside an HTML tag
      if (char === '<') isTag = true;
      if (char === '>') isTag = false;

      // Always update the DOM so screen readers can detect changes
      el.innerHTML = htmlBuffer;

      i++;
      setTimeout(type, 50); // Speed
    }
  }

  type();
};

