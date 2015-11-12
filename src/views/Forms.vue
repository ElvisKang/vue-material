<template>
<header>
    <md-nav>
        <md-nav-logo href="#!/forms" pos="center">Forms</md-nav-logo>
    </md-nav>
</header>    
<div class="container">
<article id="forms">
    <section id="forms-input">
        <doc-item-title>Input</doc-item-title>
        <doc-item-demo>
            <div class="row">
                    <md-input class="col s12 l6" name="text1" id="text-input1" placeholder="First Name">First Name</md-input>
                    <md-input class="col s12 l6"  name="text2"  id="text-input2" >Last Name</md-input>
            </div>
            <div class="row">
                    <md-input class="col s12 l6" value="I am not editable" id="disabled" :disabled="bool">Disable</md-input>
                    <md-input class="col s12 l6" value="I am not editable" id="disabled2" disabled>Disable</md-input>
            </div>
            <p>
                    <md-btn :class="bool?'green':'red'" @click="bool=!bool">{{bool?'Enable':'Disable'}}</md-btn>
            </p>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.input}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Prefilling Text Input</doc-item-title>
        <doc-item-demo>
            <div class="row">
                <md-input class="col s12 l6"  name="prefilling" id="prefilling" value="First Name">First Name</md-input>
            </div>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.prefilling}}
        </doc-item-code>
        </section>
    <section>
        <doc-item-title>Icon Prefixes</doc-item-title>
        <doc-item-demo>
            <div class="row">
                <md-input class="col s12 l6"  icon-text="account_circle" name="prefix1" id="prefix1" >First Name</md-input>
                <md-input class="col s12 l6"  type="tel" icon-text="phone" name="prefix2" id="prefix2" >Telephone</md-input>
            </div>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.prefix}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Textarea</doc-item-title>
        <doc-item-demo>
        <div class="row">
            <md-textarea class="col s12"  id="textarea1" >Textarea</md-input>
        </div>
        <div class="row">
            <md-textarea class="col s12"  icon-text="mode_edit" id="textarea2" placeholder="Say something..." >Textarea</md-input>
        </div>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.textarea}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Radio</doc-item-title>
        <doc-item-demo>
            <p>
                <md-radio name="r1" value="Red" id="Red">Red</md-radio>
            </p>
            <p>
                <md-radio name="r1" checked value="Blue" id="Blue">Blue</md-radio>
            </p>
            <p>
                <md-radio name="r2" gap checked value="Green" id="Green">Green</md-radio>
            </p>
            <p>
                <md-radio name="r2" disabled value="Yellow" id="Yellow">Yellow</md-radio>
            </p>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.radio}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Checkboxes</doc-item-title>
        <doc-item-demo>
            <p>
                <md-checkbox name="g2"  id="Red2">Red</md-checkbox>
            </p>
            <p>
                <md-checkbox name="g2" id="Blue2" checked>Blue</md-checkbox>
            </p>
            <p>
                <md-checkbox name="g2" filled  id="Green2" checked>Green</md-checkbox>
            </p>
            <p>
                <md-checkbox name="g2" disabled  id="Green2">Green</md-checkbox>
            </p>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.checkbox}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Switches</doc-item-title>
        <doc-item-demo>
                <md-switch></md-switch>
                <br>
                <md-switch :text="['left','right']" checked></md-switch>
                <br>
                <md-switch disabled></md-switch>
                <br>
                <md-switch>
                    <span class="red-text" slot="off">close</span>
                    <span class="green-text" slot="on">open</span>
                </md-switch>
        </doc-item-demo>
        <doc-item-code lang="markup">
            {{codes.switches}}
        </doc-item-code>
    </section>
    <section>
        <doc-item-title>Data Binding(incomplete)</doc-item-title>
        <doc-item-demo>
            <div class="row">
                    <md-input class="col s12 l6" v-md-model="bindings.firstname" name="firstname" id="firstname" >First Name</md-input>
                    <md-input class="col s12 l6" v-md-model="bindings.lastname" name="lastname"  id="lastname" >Last Name</md-input>
            </div>
            <div class="row">
                    <md-radio v-md-model="bindings.sex" value="man" id="man" name="sex">Man</md-radio>
                    <md-radio v-md-model="bindings.sex" value="woman" id="woman" name="sex">Woman</md-radio>
            </div>
            <div class="row">
                <md-textarea class="col s12" v-md-model="bindings.words" icon-text="mode_edit" id="words" placeholder="Say something..." >Textarea</md-input>
            </div>
            <div class="row">
                <div class="col s12">
                    <p>Hello! {{bindings.firstname}} {{bindings.lastname}}</p>
                    <p>You are a {{bindings.sex}}</p>
                    <p>You said: {{bindings.words}}</p>
                </div>
            </div>
        </doc-item-demo>
    </section>
</article>
</div>
</template>

<script type="babel">
    import {docView,hasCode} from './mixin.js';
    import codes from '../codes/Forms.js';
    export default {
        mixins:[docView,hasCode],
        data(){
            return {
                bindings:{
                },
                bool:true,
                codes
            }
        }
    }
</script>