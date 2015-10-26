let Button={
        raised:`
<md-btn @click="btnClick('Raised1')">Button</md-btn>
<md-btn icon-text="code" icon-pos="right" class="green" @click="btnClick('Raised2')">Button</md-btn>
<md-btn icon-text="code" icon-pos="left" class="yellow darken-1" @click="btnClick('Raised3')">Button</md-btn>
<p>Try to click button :{{clickedID}}</p>`,
        flat:`
<md-btn  flat >Button</md-btn>`,
        floating:`
<md-btn-f  icon-text="code" class="red btn-large"></md-btn>`,
        disabled:`
<md-btn disabled>Button</md-btn>
<md-btn flat disabled>Button</md-btn>
<md-btn-f  icon-text="code" class="red btn-large" disabled></md-btn>`,
        fab:`
<md-fab  style="right:24px;bottom:45px">
      <md-btn float slot="main" class="red btn-large" icon-text="code"></md-btn>
      <md-btn float class="pink" icon-text="insert_chart"></md-btn>
      <md-btn float class="yellow" icon-text="format_quote"></md-btn>
      <md-btn float class="green" icon-text="publish"></md-btn>
      <md-btn float class="blue" icon-text="attach_file"></md-btn>
</md-fab>`
};

export default Button;
