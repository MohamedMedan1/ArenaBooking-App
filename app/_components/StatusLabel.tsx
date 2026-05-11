export default function StatusLabel({label}:{label:string}) {
  const baseStyle = "w-fit h-fit px-4 py-1 rounded-full font-medium"
  
  const labelTypes: any = {
    "confirmed":`${baseStyle} bg-green-200 text-green-600`,
    "completed":`${baseStyle} bg-blue-200 text-blue-600`,
    "canceled":`${baseStyle} bg-red-200 text-red-600`
  }

  return (
    <span className={labelTypes[label]}>{label}</span>
  );
}