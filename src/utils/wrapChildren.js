export default function (parent,tag){
        let len = parent.children.length;
        for(let i=0; i<len;i++) {
            let wrapper = document.createElement(tag);
            wrapper.appendChild(parent.children[0]);
            parent.appendChild(wrapper);
        }
}