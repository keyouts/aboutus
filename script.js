 const el = document.getElementById('typed');
  const rawText = document.getElementById('typewriter').getAttribute('data-text');
  let i = 0;
  let isTag = false;
  let htmlBuffer = '';

  function type() {
    if (i < rawText.length) {
      const char = rawText[i];
      htmlBuffer += char;

      if (char === '<') isTag = true;
      if (char === '>') isTag = false;

      if (!isTag) {
        el.innerHTML = htmlBuffer;
      }

      i++;
      setTimeout(type, 50); // speed
    }
  }

  window.onload = type;

