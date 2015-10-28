import docItem from '../components/doc/index.js';
import Prism from '../prism.js';
export default {
    docView:{
        components: {
            'doc-item-code':docItem.docItemCode,
            'doc-item-demo':docItem.docItemDemo,
            'doc-item-intro':docItem.docItemIntro,
            'doc-item-options':docItem.docItemOptions,
            'doc-item-title':docItem.docItemTitle,
            'doc-toc':docItem.docToc,
        }    
    },
    hasCode:{
        ready(){
            Prism.highlightAll();
        }
    }
}
