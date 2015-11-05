let lists = `
<md-list>
    <md-list-item href="#!/lists">
        Item
        <md-badge>1</md-badge>
    </md-list-item>
    <md-list-item href="#!/lists">Item</md-list-item>
    <md-list-item href="#!/lists">
        Item
        <md-badge new>14</md-badge>
    </md-list-item>
    <md-list-item href="#!/lists">Item</md-list-item>
</md-list>`;

let navbar = `
<md-nav :logo="{href:'#!/badges',text:'Logo'}" links-pos="right">
    <a href="#!/badges">Message<md-badge new>14</md-badge></a>
    <a href="https://github.com/ElvisKang/vue-material">Github</a>
</md-nav>`;

export default {
    lists,
    navbar,
}
