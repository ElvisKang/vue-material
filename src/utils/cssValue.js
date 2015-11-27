export default function(element,names,pseudo=null){
    //IE<11 doesn't support pseudo
    if(element && element.nodeType ===1) {
        let cssObj = window.getComputedStyle(element,pseudo);
        if(typeof names === "string"){
            return cssObj.getPropertyValue(names);
        }else {
            let result = {};
            for(let name in names) {
                result[name] = cssObj.getPropertyValue(name);
            }
            return result;
        }
    }

}