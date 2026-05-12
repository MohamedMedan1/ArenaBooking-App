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

  const baseStyles="cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:bg-gray-500 transition-all"
  const btnTypes: any = {
    "submit":`
        relative flex items-center justify-center gap-2  
        px-3 py-3 w-full rounded-xl text-lg font-medium
        bg-brand-green text-white 
        hover:bg-brand-green/90 
        ${baseStyles} ${className} `,
    "cancel":`bg-light-red text-dark-red hover:bg-dark-red hover:text-light-red rounded-lg text-sm font-medium px-4 py-2 ${baseStyles}`,
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