<template>
    <NuxtPage />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source%20Sans%20Pro:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Geologica:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root {
    color-scheme: dark;

    --bg-primary: #2c2d33;
    --bg-secondary: #25262b;
    --bg-secondary-alt: #1d1e22;
    --bg-accent: #3f4149;

    --bg-primary-50: #2c2d3350;
    --bg-secondary-50: #25262b50;
    --bg-secondary-alt-50: #1d1e2250;
    --bg-accent-50: #3f414950;

    --text1: #ffffff;
    --text2: #d2d5e6;
    --text3: #bbbdc9;

    --accent1: #7761FF;
    --accent1-50: #7761FF50;
    --accent2: #5949c1;

    --bg-danger1: #ff5757;
    --bg-warning1: #f89232;
    --bg-success1: #49a749;
    --bg-info1: #9d56ee;

    --bg-danger2: #b63f3f;
    --bg-warning2: #b46924;
    --bg-success2: #306d30;
    --bg-info2: #7642b2;
    
    --button-border-top: #ffffff25;
    --button-border-btm: #00000035;

    --font1: "Source Sans Pro", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font2: "Geologica", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
    margin: 0px;
    background-color: var(--bg-primary);
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
}

.btn:focus-within, .ipt:focus-within, a:focus-within {
    outline-color: var(--accent1-50);
    outline-offset: 1px;
    outline-width: 3px;
    outline-style: solid;
}

.homepage .pageHeader {
    padding-top: 75px;
    padding-bottom: 25px;
    background-color: var(--bg-secondary);
}

.pageHeaderContent {
    width: 100%;
    max-width: 1024px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
}

.homepage .mainContent {
    width: 100%;
    max-width: 1024px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
}

.mainContent {
    margin-top: 70px;
}

.pageHeaderTextContainer {
    max-width: 400px;
}

.pageHeaderText {
    color: var(--text1);
    font-family: var(--font2);
}

.pageHeaderSubtext {
    color: var(--text1);
    font-family: var(--font1);
    font-weight: 500;
}

.featureTitle, .loginHeader {
    font-family: var(--font2);
    color: var(--text1);
    font-weight: 600;
    margin-bottom: 10px;
}

.featureDescription, .loginDescription {
    font-family: var(--font1);
    color: var(--text2);
    font-weight: 400;
    margin-bottom: 10px;
}

.loginDescriptionLink {
    color: var(--accent1);
    text-decoration: none;
}

.loginContent {
    display: flex;

    height: 100%;
    width: 100%;
}

.loginContainer {
    border-radius: 10px;
    text-align: center;
    width: 100%;
    max-width: 350px;
    padding: 20px;
    padding-top: 50px;
    margin: auto;
}

.loginInputContainer, .loginLabel {
    display: block;
}

.loginInputs {
    padding-top: 20px;
    padding-bottom: 20px;
}

.loginLabel {
    width: 0px;
}
</style>