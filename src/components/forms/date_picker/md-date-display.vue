<template>
    <div class="picker__date-display">
        <div class="picker__weekday-display">
            {{day}}
        </div>
        <div class="picker__month-display">
            <div>
                {{month}}
            </div>
        </div>
        <div class="picker__day-display">
            <div>
                {{date}}
            </div>
        </div>
        <div class="picker__year-display">
            <div>
                {{year}}
            </div>
        </div>
    </div>
</template>

<script type="babel">
    export default {
        props:{
            selectedDate:Date
        }
    }
</script>