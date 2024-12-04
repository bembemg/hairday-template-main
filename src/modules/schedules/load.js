import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { scheduleShow } from "./show.js";
import { hoursLoad } from "../form/hours-load";

const selectedDate = document.getElementById('date')

export async function schedulesDay() {
    // Obtém a data do input
    const date = selectedDate.value

    // Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })

    // Exibe os agendamentos
    scheduleShow({ dailySchedules })

    // Renderiza os horários disponíveis
    hoursLoad({ date, dailySchedules })
}