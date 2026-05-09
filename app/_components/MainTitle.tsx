export default function MainTitle({title,description,customStyles,type="main"}:{title:string,description:string,customStyles?:string,type?:string}) {
  
  const styleType:any = {
    main: {
      box: "space-y-4 my-15",
      title:"text-4xl lg:text-5xl ",
      desc:"text-xl",
    },
    auth:{
      box: "space-y-2 my-7",
      title:"text-4xl lg:text-4xl ",
      desc:"text-lg",
    },
  }

  return (
    <div className={`text-center ${styleType[type]["box"]} ${customStyles}`}>
      <h3 className={`${styleType[type]["title"]}font-bold`}>{title}</h3>
      <p className={`text-gray-600 ${styleType[type]["desc"]}`}>{description}</p>
    </div>
  );
}
