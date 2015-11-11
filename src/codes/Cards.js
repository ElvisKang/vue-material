let basic = `
<div class="row">
    <div class="col s12 l6">
        <md-card class="blue-grey darken-1">
            <md-card-content class=" white-text">
                <md-card-title>Title</md-card-title>
                <p>I am good at containing small bits of information.</p>
            </md-card-content>
            <md-card-action>
                <a href="#!/cards">Link</a>
            </md-card-action>
        </md-card>
    </div>
</div>`;
let img = `
<div class="row">
    <div class="col s12 l6">
    <md-card>
        <md-card-img src="static/images/doc/image_card.jpg">
            <md-card-title>Image Title</md-card-title>
        </md-card-img>
        <md-card-content>
            <md-card-title class="black-text">Content Title</md-card-title>
            <p>I am good at containing small bits of information.</p>
        </md-card-content>
        <md-card-action>
            <a href="#!/cards">Link</a>
        </md-card-action>
    </md-card>
    </div>
</div>   `;
let panel = `
<div class="row">
    <div class="col s12 l6">
    <md-card panel class="teal">
        <span>I am good at containing small bits of information.</span>
    </md-card>
    </div>
</div>`;


export default {
    basic,
    img,
    panel,
}