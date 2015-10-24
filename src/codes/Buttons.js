let Button={
        raised:`
<md-btn >Button</md-btn>
<md-btn icon-text="code" icon-pos="right" class="green">Button</md-btn>
<md-btn icon-text="code" class="yellow darken-1">Button</md-btn>
`,
        flat:`
<md-btn  flat >Button</md-btn>
`,
        floating:`
<md-btn-f  icon-text="code" class="red btn-large"></md-btn>
`,
        disabled:`
<md-btn disabled>Button</md-btn>
<md-btn flat disabled>Button</md-btn>
<md-btn-f  icon-text="code" class="red btn-large" disabled></md-btn>
`,
        fab:`
<md-fab :pos="{right:'24px',bottom:'45px'}"  :main-btn="{class:'btn-large red',text:'code'}">
      <li> <md-btn-f class="pink" icon-text="insert_chart"></md-btn-f></li>
      <li> <md-btn-f class="yellow" icon-text="format_quote"></md-btn-f></li>
      <li> <md-btn-f class="green" icon-text="publish"></md-btn-f> </li>
      <li> <md-btn-f class="blue" icon-text="attach_file"></md-btn-f> </li>
</md-fab>`
};

export default Button;
