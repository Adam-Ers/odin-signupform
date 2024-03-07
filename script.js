window.addEventListener('resize', () => {
    document.querySelector(':root').style
        .setProperty('--windowHeight', window.innerHeight + 'px');
})