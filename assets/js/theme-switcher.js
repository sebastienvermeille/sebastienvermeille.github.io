    const themePreference = () => {
        const hasLocalStorage = localStorage.getItem('theme');
        let supports = false;
        let theme = undefined;

        if (hasLocalStorage === 'light') {
            theme = 'light';
        }
        if (hasLocalStorage === 'dark') {
            theme = 'dark';
        }

        if (window.matchMedia(`(prefers_color: dark)`).matches) {
            theme = hasLocalStorage ? hasLocalStorage : 'dark';
            supports = true;
        };
        if (window.matchMedia(`(prefers_color: light)`).matches) {
            theme = hasLocalStorage ? hasLocalStorage : 'light';
            supports = true;
        };
        if (window.matchMedia(`(prefers_color: no-preference)`).matches) {
            theme = hasLocalStorage ? hasLocalStorage : 'none';
            supports = true;
        };

        return {
            supports,
            theme
        };
    }

    document.addEventListener('DOMContentLoaded', e => {
        // console.clear();

        const userThemePreference = themePreference();
        const toggle = document.querySelector('[theme_toggle]');
        const html = document.documentElement;

        const setTheme = () => {
            switch (userThemePreference.theme) {
                case 'dark':
                    toggle.checked = true;
                    html.classList.add('theme-dark');
                    html.classList.remove('theme-light');
                    $('*').not('.no-dark').addClass('inverted');
                    break;
                case 'light':
                    toggle.checked = false;
                    html.classList.remove('theme-dark');
                    html.classList.add('theme-light');
                    $('*').not('.no-dark').removeClass('inverted');
                    break;
            }
        }
        setTheme();
        toggle.addEventListener('click', e => {
            if (toggle.checked) {
                html.classList.add('theme-dark');
                $('*').addClass('inverted');
                html.classList.remove('theme-light');
                localStorage.setItem('theme', 'dark');
            } else {
                html.classList.remove('theme-dark');
                $('*').not('.no-dark').removeClass('inverted');
                html.classList.add('theme-light');
                localStorage.setItem('theme', 'light');
            }
        }, false);
    }, false);