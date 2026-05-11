export const formatTime = (startTime: string, endTime: string): string => {
  const formatSingleTime = (time: string) => {
    let [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    
    hours = hours % 12 || 12; 
    
    const strHours = String(hours).padStart(2, "0");
    const strMinutes = String(minutes).padStart(2, "0");

    return { timeStr: `${strHours}:${strMinutes}`, period };
  };

  const start = formatSingleTime(startTime);
  const end = formatSingleTime(endTime);

  return `${start.timeStr} - ${end.timeStr} ${end.period}`;
};