import Loader from "./Loader";

interface SubmitButtonProps {
  title: string;
  isLoading: boolean;
  isDisabled?: boolean;
  className?: string; 
}

export default function SubmitButton({
  title,
  isLoading,
  isDisabled = false,
  className = "",
}: SubmitButtonProps) {
  
  return (
    <button
      disabled={isLoading || isDisabled}
      type="submit"
      className={`
        relative flex items-center justify-center gap-2 cursor-pointer 
        px-3 py-3 w-full rounded-xl text-lg font-medium transition-all
        bg-brand-green text-white 
        hover:bg-brand-green/90 
        disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:bg-gray-500
        ${className}
      `}
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