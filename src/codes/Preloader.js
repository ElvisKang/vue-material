let circular = `
<md-circular class="big"></md-circular>
<md-circular colors="blue"></md-circular>
<md-circular colors="green"></md-circular>
<md-circular colors="red"></md-circular>
<md-circular class="small" colors="yellow"></md-circular>
`

let flashing = `
<md-circular class="big" colors="blue red yellow green"></md-circular>
<md-circular :colors="['blue','red','yellow','green']"></md-circular>
<md-circular class="small" colors="blue red yellow green"></md-circular>
`
let deter=`
<md-progress percent="80"></md-progress>
<md-progress  class="red lighten-4" bar-color="red" percent="80"></md-progress>
`
let indeter = `
<md-progress ></md-progress>
<md-progress class="red lighten-4" bar-color="red"></md-progress>
`

export default {
    circular,
    deter,
    flashing,
    indeter,
}