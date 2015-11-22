<template>
<div class="picker__calendar-container">
    <div class="picker__header">
        <div class="picker__month">
            November
        </div>
        <!-- picker 消失时，select要为disabled -->
        <select class="picker__select--year browser-default" title="Select a year" :disabled="!active">
            
        </select>
        <div class="picker__nav--prev" @click="changeMon(-1)" role="button" title="Previous month"></div>
        <div class="picker__nav--next" @click="changeMon(1)" role="button" title="Next month"></div>
    </div>
<table class="picker__table">
    <thead>
        <tr>
            <th v-for="(title,text) in weekdayText[lang]"class="picker__weekday" scope="col" :title="title">
                {{text}}
            </th>
        </tr>
    </thead>
    <tbody>
        <template>
            
        </template>
        <tr>

            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1446307200000" role="gridcell" aria-label="1 November, 2015">
                    1
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1446393600000" role="gridcell" aria-label="2 November, 2015">
                    2
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1446480000000" role="gridcell" aria-label="3 November, 2015">
                    3
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1446566400000" role="gridcell" aria-label="4 November, 2015">
                    4
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1446652800000" role="gridcell" aria-label="5 November, 2015">
                    5
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1446739200000" role="gridcell" aria-label="6 November, 2015">
                    6
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1446825600000" role="gridcell" aria-label="7 November, 2015">
                    7
                </div>
            </td>
        </tr>
        <tr>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1446912000000" role="gridcell" aria-label="8 November, 2015">
                    8
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1446998400000" role="gridcell" aria-label="9 November, 2015">
                    9
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1447084800000" role="gridcell" aria-label="10 November, 2015">
                    10
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1447171200000" role="gridcell" aria-label="11 November, 2015">
                    11
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1447257600000" role="gridcell" aria-label="12 November, 2015">
                    12
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1447344000000" role="gridcell" aria-label="13 November, 2015">
                    13
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1447430400000" role="gridcell" aria-label="14 November, 2015">
                    14
                </div>
            </td>
        </tr>
        <tr>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1447516800000" role="gridcell" aria-label="15 November, 2015">
                    15
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1447603200000" role="gridcell" aria-label="16 November, 2015">
                    16
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1447689600000" role="gridcell" aria-label="17 November, 2015">
                    17
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus picker__day--selected picker__day--highlighted" data-pick="1447776000000" role="gridcell" aria-label="18 November, 2015" aria-selected="true" aria-activedescendant="true">
                    18
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus picker__day--today" data-pick="1447862400000" role="gridcell" aria-label="19 November, 2015">
                    19
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1447948800000" role="gridcell" aria-label="20 November, 2015">
                    20
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1448035200000" role="gridcell" aria-label="21 November, 2015">
                    21
                </div>
            </td>
        </tr>
        <tr>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1448121600000" role="gridcell" aria-label="22 November, 2015">
                    22
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1448208000000" role="gridcell" aria-label="23 November, 2015">
                    23
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1448294400000" role="gridcell" aria-label="24 November, 2015">
                    24
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1448380800000" role="gridcell" aria-label="25 November, 2015">
                    25
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1448467200000" role="gridcell" aria-label="26 November, 2015">
                    26
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1448553600000" role="gridcell" aria-label="27 November, 2015">
                    27
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1448640000000" role="gridcell" aria-label="28 November, 2015">
                    28
                </div>
            </td>
        </tr>
        <tr>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1448726400000" role="gridcell" aria-label="29 November, 2015">
                    29
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--infocus" data-pick="1448812800000" role="gridcell" aria-label="30 November, 2015">
                    30
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1448899200000" role="gridcell" aria-label="1 December, 2015">
                    1
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1448985600000" role="gridcell" aria-label="2 December, 2015">
                    2
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1449072000000" role="gridcell" aria-label="3 December, 2015">
                    3
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1449158400000" role="gridcell" aria-label="4 December, 2015">
                    4
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1449244800000" role="gridcell" aria-label="5 December, 2015">
                    5
                </div>
            </td>
        </tr>
        <tr>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1449331200000" role="gridcell" aria-label="6 December, 2015">
                    6
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1449417600000" role="gridcell" aria-label="7 December, 2015">
                    7
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1449504000000" role="gridcell" aria-label="8 December, 2015">
                    8
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1449590400000" role="gridcell" aria-label="9 December, 2015">
                    9
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1449676800000" role="gridcell" aria-label="10 December, 2015">
                    10
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1449763200000" role="gridcell" aria-label="11 December, 2015">
                    11
                </div>
            </td>
            <td role="presentation">
                <div class="picker__day picker__day--outfocus" data-pick="1449849600000" role="gridcell" aria-label="12 December, 2015">
                    12
                </div>
            </td>
        </tr>
    </tbody>
</table>
</div>
</template>

<script>
    export default {
        data(){
            return {
                active:null,
                weekdayText:{
                    // used:null,
                    eng:{
                        Sunday:'Su',
                        Monday:'Mo',
                        Tuesday:'Tu',
                        Wednesday:'We',
                        Thursday:'Th',
                        Friday:'Fr',
                        Saturday:'Sa',
                    }
                }
            }
        },
        props:{
            lang:{
                type:String,
                default:"eng"
            },
            active:Boolean
        },
        created(){
            // let weekdayText = this.weekdayText;
            // weekdayText.used = weekdayText[this.lang];
        },
        methods:{
            changeMon(value){
                this.$set('date.')
            }
        }
    }
</script>