<template lang="pug">
div
    full-calendar(:events="fcEvents", locale="pt", @dayClick="dayClick")
</template>

<script>

import FullCalendar from 'vue-fullcalendar'

export default {
    data () {
        return {
            cal: null,
            fcEvents: [
                {
                    title: 'Consulta',
                    start: '2017-07-25',
                    end: '2017-07-27'
                }
            ]
        }
    },
    mounted () {
        console.log(this)
    },
    methods: {
        dayClick (day, jsevent) {
            console.log(day, jsevent)
        }
    },
    components: {
        'full-calendar': FullCalendar
    }

}

</script>