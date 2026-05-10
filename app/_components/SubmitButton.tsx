import Loader from "./Loader";

interface SubmitButtonProps {
  title: string;
  isLoading: boolean;
  className?: string; 
}

export default function SubmitButton({
  title,
  isLoading,
  className = "",
}: SubmitButtonProps) {
  
  return (
    <button
      disabled={isLoading}
      type="submit"
      className={`
        relative flex items-center justify-center gap-2 cursor-pointer 
        px-3 py-4 w-full rounded-xl text-lg font-medium transition-all
        bg-chart-2 text-white 
        hover:bg-chart-2/90 
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