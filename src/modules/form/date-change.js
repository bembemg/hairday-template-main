import { schedulesDay } from "../schedules/load.js"

const selectedDate = document.getElementById('date')

// Recarrega a lista de horários quando o input de data é alterado
selectedDate.onchange = () => schedulesDay()