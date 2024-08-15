function Card(props) {
  return (
    <div className="border-b-2 border-slate-100 py-2 lg:p-4 flex justify-between items-center">
      <div className="w-8/12">
        <p className="text-xs lg:text-base">{props.author}</p>
        <h2 className="font-bold text-base lg:text-xl">{props.title}</h2>
        <p className="text-sm lg:text-base">{props.desc}</p>
      </div>
      <div>
        {/* <img className="" src={props.img} width="160" height="146" /> */}
      </div>
    </div>
  );
}

export default Card;
