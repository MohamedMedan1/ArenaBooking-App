export default function MainTitle({title,description,customStyles,type="main"}:{title:string,description:string,customStyles?:string,type?:string}) {
  
  const styleType:any = {
    main: {
      box: "space-y-4 mb-15",
      title:"text-4xl lg:text-5xl text-primary",
      desc:"text-xl text-secondary",
    },
    auth:{
      box: "space-y-2 my-7",
      title:"text-4xl lg:text-4xl text-primary",
      desc:"text-lg text-secondary",
    },
  }

  return (
    <div className={`text-center ${styleType[type]["box"]} ${customStyles}`}>
      <h3 className={`${styleType[type]["title"]} font-bold`}>{title}</h3>
      <p className={`${styleType[type]["desc"]}`}>{description}</p>
    </div>
  );
}
