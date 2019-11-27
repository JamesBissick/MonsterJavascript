const el = document.querySelector('div');
el.style.width = '150px';
el.style.height = '100px';
el.style.position = 'absolute';
el.style.top = '100px';
el.style.left = '100px';
el.style.backgroundColor = '#F86B60';

// Returns size and position in the window
console.log(el.getBoundingClientRect());
