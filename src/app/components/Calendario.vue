<template lang="pug">
div
    #full-calendar
    el-dialog(title='Agendamento', :visible.sync='dialogFormVisible')
        el-form(:model='consulta')
            el-form-item(label='Data', :class="{'is-danger': errors.has('data')}")
                el-input(v-validate="'required|date_format:DD/MM/YYYY'", v-mask="'##/##/####'",  :class="{'input': true, 'is-danger': errors.has('data') }", name="data", v-model='consulta.data', auto-complete='off')
                span(v-show="errors.has('data')", class="help is-danger") {{ errors.first('data') }}

            el-form-item(:class="{'is-danger': errors.has('horario')}", label='Horário')
                el-input(v-validate="'required|date_format:H:mm'", v-mask="'##:##'",  :class="{'input': true, 'is-danger': errors.has('horario') }", name="horario", v-model='consulta.horario', auto-complete='off')
                span(v-show="errors.has('horario')", class="help is-danger") {{ errors.first('horario') }}
            el-form-item(label='Profissional')
                el-select(v-model='profissionais', placeholder='Profissional de saúde')
                    el-option(v-for="profissional in consulta.profissional", :label='profissional.name', :value='profissional.value')
            el-form-item(label='Paciente')
                el-select(v-model='consultas', placeholder='Paciente')
                    el-option(v-for="paciente in consulta.paciente", :label='paciente.name', :value='paciente.value')
        span.dialog-footer(slot='footer')
            el-button(@click='dialogFormVisible = false') Cancelar
            el-button(type='primary', @click='setAgendamento(consulta)') Confirmar
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
        $calendar: {},
        dialogFormVisible: false,
        dia: '',
        profissionais: '',
        consultas: '',
        consulta: {
          data: '',
          horario: '',
          profissional: [
              { value: 1, name: 'Dona Irene' },
              { value: 2, name: 'Loren Impsum' },
              { value: 3, name: 'Joana Darc' }
          ],
          paciente: [
              { value: 1, name: 'Dona Irene' },
              { value: 2, name: 'Loren Impsum' },
              { value: 3, name: 'Joana Darc' }
          ]
        },
      }
    },
    methods: {
      save (record) {

      },
      setAgendamento(consulta) {
        if ( consulta.data != '' && consulta.horario != '' ) {
          let start = consulta.data + " " + consulta.horario
          start = moment(start, 'DD/MM/YYYY HH:mm').format("YYYY-MM-DDThh:mm")
          const event = {
              title: 'Agendamento',
              start: start
          }

          this.$calendar.fullCalendar('renderEvent', event)
          this.dialogFormVisible = false
        }
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
        dayClick: (date, jsevent) => {
          this.consulta.data = date.format("DD/MM/YYYY")
          this.consulta.horario = date.format("HH:mm")
          this.dialogFormVisible = true
        }
      })
    }
  }
</script>