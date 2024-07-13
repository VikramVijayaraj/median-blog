function Card(props) {
  return (
    <div className="border-b-2 border-slate-100 p-4 flex justify-between items-center">
      <div className="w-8/12">
        <p>{props.author}</p>
        <h2 className="font-bold text-xl">{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <div>
        {/* <img className="" src={props.img} width="160" height="146" /> */}
      </div>
    </div>
  );
}

export default Card;
