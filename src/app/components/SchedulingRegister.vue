<template lang="pug">

div.right
        // .content-left
        //         .box
        //                 h1 Cadastro de consulta
        //                 fieldset
        //                         p Os campos * são obrigatórios
        //                         p
        //                                 label(:class="{'is-danger': errors.has('data')}", for="data") Data*
        //                                 div: input(v-validate="'required|date_format:DD/MM/YYYY'", v-mask="'##/##/####'",  :class="{'input': true, 'is-danger': errors.has('data') }", name="data", type="text", placeholder="Data", v-model="consulta.data")
        //                                 span(v-show="errors.has('data')", class="help is-danger") {{ errors.first('data') }}

        //                         p
        //                                 label(:class="{'is-danger': errors.has('horario')}", for="horario") Horário*
        //                                 div: input(v-validate="'required|date_format:h:mm'", v-mask="'##:##'",  :class="{'input': true, 'is-danger': errors.has('horario') }", name="horario", type="text", placeholder="Horário", v-model="consulta.horario")
        //                                 span(v-show="errors.has('horario')", class="help is-danger") {{ errors.first('horario') }}
                                
        //                         p
        //                                 label(:class="{'is-danger': errors.has('profissional')}", for="profissional") Profissional de saúde*
        //                                 div(:class="{'is-danger': errors.has('profissional') }"): select(v-validate="'required'", name="profissional", v-model="consulta.profissional")
        //                                         option(value="") Profissional de saúde
        //                                         option(v-for="profissional in profissionais", v-bind:value="profissional.value") {{ profissional.name }}
        //                                 span(v-show="errors.has('profissional')", class="help is-danger") {{ errors.first('profissional') }}
        //                         p
        //                                 label(:class="{'is-danger': errors.has('paciente')}", for="paciente") Paciente*
        //                                 div(:class="{'is-danger': errors.has('paciente') }"): select(v-validate="'required'", name="paciente", v-model="consulta.paciente")
        //                                         option(value="") Paciente
        //                                         option(v-for="paciente in pacientes", v-bind:value="paciente.value") {{ paciente.name }}
        //                                 span(v-show="errors.has('paciente')", class="help is-danger") {{ errors.first('paciente') }}
        //                         p: button Cadastrar
        .content-right
                .box
                        h1 Agendamento
                        calendar

</template>

<script>

import Calendar from './Calendar.vue'

export default {
        data (){
                return {
                        consulta: {
                                data: '',
                                horario: '',
                                profissional: '',
                                paciente: ''
                        },
                        profissionais: [
                                { value: 1, name: 'Dona Irene' },
                                { value: 2, name: 'Loren Impsum' },
                                { value: 3, name: 'Joana Darc' }
                        ],
                        pacientes: [
                                { value: 1, name: 'Dona Irene' },
                                { value: 2, name: 'Loren Impsum' },
                                { value: 3, name: 'Joana Darc' }
                        ]
                }
        },
        components: {
                'calendar': Calendar
        }
}

</script>