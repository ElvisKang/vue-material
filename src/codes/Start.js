let install=`npm install vue-material`;

let use =`
import Vue from 'vue'; 
import Material from 'vue-material'; 
//Globally register all of the components;
Material.regAll(Vue);
//or
//Globally register the components that you need
Material.reg(Vue,['buttons','cards']);`;

export default {
    use,
    install
}
