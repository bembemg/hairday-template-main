import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll('.period');

// Gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {

    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")) {
            // Obtém o elemento pai do li clicado
            const item = event.target.closest("li")

            // Pega o id do agendamento
            const { id } = item.dataset

            // Confirma se o usuário deseja cancelar o agendamento
            if(id){
                const isConfirm = confirm("Deseja realmente cancelar este agendamento?")

                if(isConfirm){
                    // Faz a requisição na API para cancelar o agendamento
                    await scheduleCancel({ id })

                    // Recarrega a lista de agendamentos
                    schedulesDay()
                }
            }
        }
    })
})