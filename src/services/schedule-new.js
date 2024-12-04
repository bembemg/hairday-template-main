import { apiConfig } from "./api-config"

export async function scheduleNew({ id, name, when }){
    try {
    // Faz a requisição dos dados de agendamento para a API
    await fetch(`${apiConfig.baseURL}/schedules`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, when, id }),
    })

    } catch (error) {
        console.error(error)
        alert('Não foi possível agendar o horário, tente novamente mais tarde.')
    }
}