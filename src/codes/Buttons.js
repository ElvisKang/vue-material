let Button={
        raised:`
<p>
    <md-btn>Button</md-btn>
    <md-btn class="green" >Button</md-btn>
    <md-btn class="yellow" label="Button" ></md-btn>
</p>
<p>
    <md-btn icon-text="code" icon-pos="right" >Button</md-btn>
    <md-btn icon-text="code" icon-pos="left" >Button</md-btn>
</p>
<p>
    <md-btn large>Button</md-btn>
    <md-btn disabled>Button</md-btn>
</p>`,
        flat:`
<md-btn  type="flat" large >Button1</md-btn>
<md-btn  type="flat" >Button2</md-btn>
<md-btn  type="flat" disabled >Button3</md-btn>`,
        floating:`
<md-btn type="floating" large icon-text="code" class="red" ></md-btn>
<md-btn type="floating"  icon-text="code" class="red" ></md-btn>
<md-btn type="floating" disabled icon-text="code" class="red" ></md-btn>`,
        fab:`
<md-fab  style="right:24px;bottom:45px">
      <md-btn type="floating" large class="red" icon-text="code"></md-btn>
      <md-btn type="floating" class="pink" icon-text="insert_chart"></md-btn>
      <md-btn type="floating" class="yellow" icon-text="format_quote"></md-btn>
      <md-btn type="floating" class="green" icon-text="publish"></md-btn>
      <md-btn type="floating" class="blue" icon-text="attach_file"></md-btn>
</md-fab>`
};

export default Button;
