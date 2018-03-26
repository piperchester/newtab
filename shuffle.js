setTimeout(() => {
    // Add your focus items here...
    const life = [
        // ie. Read, Exercise, Meditate
    ];

    // Build a templated list of <li>items</li>, alterating between colors
    let template = ``;
    const startingCapacity = life.length - 1;
    for (let i = 0; i <= startingCapacity; ++i) {
        const randomIndex = Math.random() * Math.floor(life.length) % life.length;
        const evictedItem = life.splice(randomIndex, 1);
        const highlight = i % 2 == 0 ? 'dark' : 'light';
        template += `<p class=${highlight}>${evictedItem}</p>`
    }

    // Insert the template into the host
    const listPoint = document.querySelector('.list');
    listPoint ? listPoint.innerHTML = template : console.error('Failed document query.')
}, 10);