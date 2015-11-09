let input=`
<div class="row">
    <md-input class="col s12 l6"  name="text1" id="text-input1" placeholder="First Name">First Name</md-input>
    <md-input class="col s12 l6"  name="text2"  id="text-input2" >Last Name</md-input>
</div>
<div class="row">
    <md-input class="col s12 l6" value="I am not editable" id="disabled" :disabled="bool">Disable</md-input>
    <md-input class="col s12 l6" value="I am not editable" id="disabled2" disabled>Disable</md-input>
</div>
<p>
    <!-- Default bool=true -->
    <md-btn :class="bool?'green':'red'" @click="bool=!bool">{{bool?'Enable':'Disable'}}</md-btn>
</p>`;

let prefilling=`
<div class="row">
    <md-input class="col s12 l6"  name="prefilling" id="prefilling" value="First Name">First Name</md-input>
</div>`;

let  prefix=`
<div class="row">
    <md-input class="col s12 l6"  icon-text="account_circle" name="prefix1" id="prefix1" >First Name</md-input>
    <md-input class="col s12 l6"  type="tel" icon-text="phone" name="prefix2" id="prefix2" >Telephone</md-input>
</div>`;

let radio=`
<md-radio name="r1" value="Red" id="Red">Red</md-radio>
<md-radio name="r1" checked value="Blue" id="Blue">Blue</md-radio>
<md-radio name="r2" gap checked value="Green" id="Green">Green</md-radio>
<md-radio name="r2" disabled value="Yellow" id="Yellow">Yellow</md-radio>`;

let checkbox=`
<md-checkbox name="g2"  id="Red2">Red</md-checkbox>
<md-checkbox name="g2" id="Blue2" checked>Blue</md-checkbox>
<md-checkbox name="g2" filled  id="Green2" checked>Green</md-checkbox>
<md-checkbox name="g2" disabled  id="Green2">Green</md-checkbox>`;

let switches = `
<md-switch></md-switch>
<md-switch :text="['left','right']" checked></md-switch>
<md-switch disabled></md-switch>
<md-switch>
    <span class="red-text" slot="off">close</span>
    <span class="green-text" slot="on">open</span>
</md-switch>`;

let textarea=`
<div class="row">
    <md-textarea class="col s12"  id="textarea1" >Textarea</md-input>
</div>
<div class="row">
    <md-textarea class="col s12"  icon-text="mode_edit" id="textarea2" placeholder="Say something..." >Textarea</md-input>
</div>`;

export default {
    checkbox,
    input,
    prefilling,
    prefix,
    radio,
    switches,
    textarea,
}
