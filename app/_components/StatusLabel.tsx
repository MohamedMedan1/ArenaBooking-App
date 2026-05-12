export default function StatusLabel({label}:{label:string}) {
  const baseStyle = "w-fit h-fit px-4 py-1 rounded-full font-medium"
  
  const labelTypes: any = {
    "confirmed":`${baseStyle} bg-light-green text-dark-green`,
    "completed":`${baseStyle} bg-light-blue text-dark-blue`,
    "canceled":`${baseStyle} bg-light-red text-dark-red`
  }

  return (
    <span className={labelTypes[label]}>{label}</span>
  );
}