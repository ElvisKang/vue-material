<template>
<label :for="id" class="active"><slot></slot></label>
<input :id="id" type="text" class="datepicker picker__input"  tabindex="-1">
<div class="picker" tabindex="0">
    <!-- class= picker picker- -focused picker- -opened -->
    <div class="picker__holder">
        <div class="picker__frame">
            <div class="picker__wrap">
                <div class="picker__box">
                    <md-date-display></md-date-display>
                    <md-date-container></md-date-container>
                </div>
                <div class="picker__footer">
                    <button class="btn-flat picker__today" type="button" @click="selectToday" :disabled="!active">
                    Today
                    </button>
                    <button class="btn-flat picker__clear" type="button" @click="reset" :disabled="!active">
                    Clear
                    </button>
                    <button class="btn-flat picker__close" type="button" @click="close" :disabled="!active">
                    Close
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
//如果选择了日期，display的文字不会随着header的改变而该改变，如果未选择，display的日期会随着header改变
<script type="babel">
    export default {
        data:{
            mdValue:"",
            selectedDate:null,
            today:null,
            displayTxt:{
                eng:{
                },
                cn:{

                }
            }
        },
        props:{
            lang:{
                type:String,
                default:"eng"
            },
            valStyle:{
                type:String,
                default:"timestamp"
            }
        },
        methods:{
            numberOfDays(year, month) {
                var d = new Date(year, month, 0);
                return d.getDate();
            },
            setToday(){
                let now = new Date();
                this.today.month = now.getMonth();
                this.today.year= now.getFullYear();
                this.today.date=now.getDate();
            }
        },
        created(){
            this.setToday();
        }
    }
</script>