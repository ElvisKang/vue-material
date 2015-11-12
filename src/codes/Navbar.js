let basic = `
<md-nav>
    <md-nav-logo href="#!/navbar">Logo</md-nav-logo>
    <md-nav-links>
        <a href="#!/navbar">About</a>
        <a href="https://github.com/ElvisKang/vue-material">Github</a>
    </md-nav-links>
</md-nav>

<md-nav>
    <md-nav-logo href="#!/navbar" pos="center">Logo</md-nav-logo>
    <md-nav-links>
        <a href="#!/navbar">About</a>
        <a href="https://github.com/ElvisKang/vue-material">Github</a>
    </md-nav-links>
</md-nav>

<md-nav>
    <md-nav-logo href="#!/navbar" pos="right">Logo</md-nav-logo>
    <md-nav-links pos="left">
        <a href="#!/navbar">About</a>
        <a href="https://github.com/ElvisKang/vue-material">Github</a>
    </md-nav-links>
</md-nav>`;

let cus = `
<md-nav class="white">
    <md-nav-logo href="#!/navbar" pos="center">
        <md-icon slot="logo" text="code" class="green-text"></md-icon>
    </md-nav-logo>
    <md-nav-links class="green-text">
        <a href="#!/navbar">About</a>
        <a href="https://github.com/ElvisKang/vue-material">Github</a>
    </md-nav-links>
</md-nav>`;

let icon = `
<md-nav>
    <md-nav-logo href="#!/navbar">Logo</md-nav-logo>
    <md-nav-links>
        <a href="#!/navbar">
            <md-icon text="search"></md-icon>
        </a>
        <a href="https://github.com/ElvisKang/vue-material">
            <md-icon text="code"></md-icon>
        </a>
    </md-nav-links>
</md-nav>

<md-nav>
    <md-nav-logo href="#!/navbar">Logo</md-nav-logo>
    <md-nav-links>
        <a href="">
            <md-icon text="search" pos="left"></md-icon>
            Search
        </a>
        <a href="https://github.com/ElvisKang/vue-material" icon-text="code" icon-pos="right">
            <md-icon text="code" pos="right"></md-icon>
            Github
        </a>
    </md-nav-links>
</md-nav>`;

export default {
    basic,
    cus,
    icon,
}