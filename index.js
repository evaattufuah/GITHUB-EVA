import "./main.css";


function switchTheme(theme)
{
    
    console.log(theme)
    if (theme === 'light') {
        document.getElementById('light-sun').style.display = "none";
        document.getElementById('dark-moon').style.display = "block";
    }

    if (theme === 'dark') {
        document.getElementById('light-sun').style.display = "block";
        document.getElementById('dark-moon').style.display = "none";
    }

    document.documentElement.className = theme;
}




document.getElementById('light-sun').addEventListener('click', e => {
    console.log(e)
    switchTheme('light')
});
document.getElementById('dark-moon').addEventListener('click', e => switchTheme('dark'));