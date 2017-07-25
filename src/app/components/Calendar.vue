<template lang="pug">
div
    full-calendar(:events="fcEvents", :editable="true", @dayClick="dayClick")

    el-dialog(title='Agendamento', :visible.sync='dialogFormVisible')
        el-form(:model='consulta')
            el-form-item(label='Data')
                el-input(v-model='consulta.data', auto-complete='off')
            el-form-item(label='Horário')
                el-input(v-model='consulta.horario', auto-complete='off')
            el-form-item(label='Profissional')
                el-select(v-model='consulta.profissional', placeholder='Profissional de saúde')
                    el-option(label='Zone No.1', value='shanghai')
            el-form-item(label='Paciente')
                el-select(v-model='consulta.paciente', placeholder='Paciente')
                    el-option(label='Zone No.1', value='shanghai')
        span.dialog-footer(slot='footer')
            el-button(@click='dialogFormVisible = false') Cancelar
            el-button(type='primary', @click='setAgendamento(consulta.data, consulta.horario)') Confirmar

</template>

<script>

import FullCalendar from 'vue-fullcalendar'
import moment from 'moment'

export default {
    data () {
        return {
            cal: null,
            fcEvents: [],
            dialogFormVisible: false,
            dia: '',
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
            formLabelWidth: '120px'
        }
    },
    mounted () {
        /*var self = this
        self.cal = $(self.$el)

        var args = {
            lang: 'pt-BR',
            height: "auto",
            timeFormat: 'HH:mm',      
            events: self.events,
            dayClick: function(date) {
                self.$emit('day::clicked', date);
                self.cal.fullCalendar('gotoDate', date.start);
                self.cal.fullCalendar('changeView', 'agendaDay');
            },
            eventClick: function(event) {
	    	    self.$emit('event::clicked', event);
            }
        }

        if (self.editable) {
            args.editable = true;
            args.eventResize = function(event) {
                self.$emit('event::resized', event);
            }

            args.eventDrop = function(event) {
                self.$emit('event::dropped', event);
            }
        }

        if (self.droppable) {
            args.droppable = true;
            args.eventReceive = function(event) {
                self.$emit('event::received', event);
            }
        }

        this.cal.fullCalendar(args)*/

    },
    methods: {
        dayClick (data, jsevent) {
            this.consulta.data = moment(data).format("DD/MM/YYYY")
            this.consulta.horario = moment(data).format("hh:mm")
            this.dia = data
            this.dialogFormVisible = true
        },
        setAgendamento (data, hora) {            
            this.fcEvents.push({
                title: 'Agendamento',
                start: moment(this.dia).format("YYYY-MM-DD hh:mm"),
                end: moment(this.dia).format("YYYY-MM-DD hh:mm")
            })
            this.dialogFormVisible = false
        }
    },
    components: {
        'full-calendar': FullCalendar
    }

}

</script>