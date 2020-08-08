export default function convertHourToMinutes(time: string) {
    //convertendo horas em minutos para o banco
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;
  
    return timeInMinutes;
  }