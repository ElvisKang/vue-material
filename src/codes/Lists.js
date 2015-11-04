let basic = `
<md-list>
    <md-list-item>Item</md-list-item>
    <md-list-item>Item</md-list-item>
    <md-list-item>Item</md-list-item>
</md-list>`;
let links = `
<md-list>
    <md-list-item href="#!/lists">Item</md-list-item>
    <md-list-item href="#!/lists">Item</md-list-item>
    <md-list-item href="#!/lists">Item</md-list-item>
    <md-list-item href="#!/lists">Item</md-list-item>
</md-list>`;
let header = `
<md-list>
    <md-list-item header><h4>Header</h4></md-list-item>
    <md-list-item>Item</md-list-item>
    <md-list-item>Item</md-list-item>
</md-list>`;
let sec = `
<md-list>
    <md-list-item header><h4>Header</h4></md-list-item>
    <md-list-item>
        Item
        <md-list-sec href="#!/lists">
            <md-icon text="send"></md-icon>
        </md-list-sec>
    </md-list-item>
    <md-list-item>
        Item
        <md-list-sec href="#!/lists">
            <md-icon text="send"></md-icon>
        </md-list-sec>
    </md-list-item>
    <md-list-item>
        Item
        <md-list-sec href="#!/lists">
            <md-icon text="send"></md-icon>
        </md-list-sec>
    </md-list-item>
</md-list>`;
let avatar = `
<md-list>
    <md-list-avatar>
      <img src="static/images/doc/chips.jpg" class="circle">
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
        <md-list-sec href="#!/lists">
            <md-icon text="grade"></md-icon>
        </md-list-sec>
    </md-list-avatar>
    <md-list-avatar>
      <md-icon class="circle" text="folder"></md-icon>
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
        <md-list-sec href="#!/lists">
            <md-icon text="grade"></md-icon>
        </md-list-sec>
    </md-list-avatar>
    <md-list-avatar>
      <md-icon class="circle red" text="play_arrow"></md-icon>
      <span class="title">Title</span>
      <p>First Line <br>
         Second Line
      </p>
        <md-list-sec href="#!/lists">
            <md-icon text="grade"></md-icon>
        </md-list-sec>
    </md-list-avatar>
</md-list>`;

export default {
    avatar,
    basic,
    header,
    links,
    sec,
}
