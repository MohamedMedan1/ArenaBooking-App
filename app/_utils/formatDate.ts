export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'short', 
    day: '2-digit',   
    month: 'short',   
  }).format(new Date(date));
};