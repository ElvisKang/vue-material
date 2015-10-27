<template>
<div class="input-field ">
    <md-icon v-if="iconText" :class="{'active':focus}" :text="iconText" :pos="iconPos"></md-icon>
    <textarea class="materialize-textarea" v-model="mdValue" :id="id" v-el:input :name="name" :value="value" :placeholder="placeholder" :disabled="disabled" :required="required" @focus="focus=true" @blur="focus=false" lazy></textarea>
    <label :for="id" :class="{'active':labelActive}"><slot></slot></label>
</div>
</template>

<script type="babel">
import {basicAttr,formIcon,status,actLabel} from '../mixins/form-mixin.js';
export default {
    mixins:[basicAttr,formIcon,status,actLabel],
    data(){
        return {
            focus:false
        }
    }
}
</script>