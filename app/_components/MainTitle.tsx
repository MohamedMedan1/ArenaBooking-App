export default function MainTitle({title,description,customStyles}:{title:string,description:string,customStyles?:string}) {
  return (
    <div className={`text-center space-y-4 my-15 ${customStyles}`}>
      <h3 className={`text-4xl lg:text-5xl font-bold`}>{title}</h3>
      <p className={`text-gray-600 text-xl`}>{description}</p>
    </div>
  );
}
