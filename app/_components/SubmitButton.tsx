export default function SubmitButton({title}:{title:string}) {
  return (
    <button type="submit" className={`cursor-pointer px-3 py-4 w-full justify-center text-lg font-medium transition bg-chart-2 text-white flex items-center gap-2 rounded-xl hover:bg-chart-2/80`}>
      {title}
    </button>

  );
}