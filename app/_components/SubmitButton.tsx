import Loader from "./Loader";

interface SubmitButtonProps {
  title: string;
  isLoading: boolean;
  isDisabled?: boolean;
  className?: string; 
  btnType?: string; 
  onClick?: () => void; 
}

export default function SubmitButton({
  title,
  isLoading,
  isDisabled = false,
  className = "",
  btnType="submit",
  onClick
}: SubmitButtonProps) {

  const baseStyles="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
  const btnTypes: any = {
    "submit":`
        relative flex items-center justify-center gap-2  
        px-6 py-4 w-full rounded-2xl text-lg font-black uppercase tracking-tighter
        bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(var(--primary),0.1)]
        hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(var(--primary),0.25)] hover:opacity-90
        ${baseStyles} ${className} `,
    "cancel":`bg-transparent border border-border-alpha text-foreground hover:bg-border-alpha rounded-2xl text-sm font-bold uppercase tracking-widest px-6 py-4 ${baseStyles}`,
  }

  const btnStyles:any = btnTypes[btnType];
  
  return (
    <button
      onClick={onClick}
      disabled={isLoading || isDisabled}
      type="submit"
      className={btnStyles}
    >
      <span className={isLoading ? "invisible" : "visible"}>{title}</span>      
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </button>
  );
}