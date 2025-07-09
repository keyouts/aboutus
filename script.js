 const text = `Example text.`;
  const speed = 50;
  const typewriter = document.getElementById('typewriter');
  let i = 0;

  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  typewriter.appendChild(cursor);

  function type() {
    if (i < text.length) {
      cursor.insertAdjacentText('beforebegin', text.charAt(i));
      i++;
      setTimeout(type, speed);
    } else {
      cursor.remove(); // remove cursor when done
    }
  }

  type();



