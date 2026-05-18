const title = document.querySelector('.title');

const parts = "Happy Birthday Reyyyyy".split(" ");
const lines = [parts.slice(0, 2).join(" "), parts.slice(2).join(" ")];

// reset
title.innerHTML = "";

// styling
title.style.display = 'flex';
title.style.flexDirection = 'column';
title.style.alignItems = 'center';
title.style.gap = '0.5rem';

// render
lines.forEach(line => {
  const lineDiv = document.createElement("div");

  for (let char of line) {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    lineDiv.appendChild(span);
  }

  title.appendChild(lineDiv);
});

// animasi
const textElements = title.querySelectorAll('span');
textElements.forEach(el => {
  el.style.animationDelay = `${Math.random() * 3}s`;
});