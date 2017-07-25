<template lang="pug">
div
    #full-calendar

</template>

<script>
 // noinspection NpmUsedModulesInstalled
  import JQuery from 'jquery'
  import FullCalendar from 'fullcalendar'
  import moment from 'moment'

  export default {
    name: 'widget-small-calendar',
    data () {
      return {
        calendar: FullCalendar,
        $calendar: {}
      }
    },
    methods: {
      save (record) {

      },
      destroy (record) {
      },
      refresh () {
        this.$calendar.fullCalendar('refetchEvents')
      }
    },
    mounted () {
      
      this.$calendar = JQuery('#full-calendar')
      this.$calendar.fullCalendar({
        header: {
          left: 'title',
          center: 'agendaDay,agendaWeek,month, listDay',
          right: 'prev,next,today'
        },
        views: {
          listDay: {buttonText: 'Resumo'},
          listWeek: {buttonText: 'semana'},
          agendaDay: {buttonText: 'dia'},
          agendaWeek: {buttonText: 'semana'},
          month: {buttonText: 'mês'}
        },
        allDayText: 'Dia inteiro',
        defaultView: 'month',
        locale: 'pt-br',
        navLinks: true,
        editable: true,
        eventLimit: true,
        timeFormat: 'HH:mm',
        slotLabelFormat: 'HH:mm',
        events: (start, end, timezone, callback) => {

        },
        eventClick: (record, element) => {

        },
        eventDrop: (record, element) => {

        },
        eventRender: (event, element, view) => {

        }
      })
    }
  }
</script>