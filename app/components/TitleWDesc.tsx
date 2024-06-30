const TitleWDesc = ({datas}:any) => {
  return (
    <div>
      <h2 className="hme_abtMe_tit font-semibold text-[45px] text-center">
        {datas.title}
      </h2>
      <p className="hme_abtMe_desc pt-[30px] text-[18px] text-center">{datas.desc}</p>
    </div>
  );
};

export default TitleWDesc;
