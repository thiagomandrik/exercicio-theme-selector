const themes = {
    light: {
        bg1: 'whitesmoke',
        bg2: '#c0c0c0',
        text: 'black'
    },
    dark:{
        bg1: '#3E556E',
        bg2: '#1F1A1C',
        text: '#B8CCE2'
    }
};
const coresCSS = document.querySelector('html');

function setTheme(newTheme){
    const themeColors = themes[newTheme];
    Object.keys(themeColors).map(function(key) {
        coresCSS.style.setProperty(`--${key}`, themeColors[key]);
      });
}

const darkModeToggle = document.querySelector('.botaoThemeSelect');
darkModeToggle.addEventListener('change', function({target}){
    setTheme(target.checked ? 'dark' : 'light');
});