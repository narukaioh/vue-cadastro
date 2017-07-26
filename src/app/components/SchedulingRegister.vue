<template lang="pug">

div.right
        .content-right
                .box
                        h1 Agendamento
                        calendario

</template>

<script>

import Calendar from './Calendar.vue'
import Calendario from './Calendario.vue'

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
                'calendar': Calendar,
                'calendario': Calendario
        }
}

</script>