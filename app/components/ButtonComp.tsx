import { ReusableButtonDataType } from '@/app/dataTypes/commonDataTypes';

const ButtonComp = ({ customClass = "test", text = "Button", initialState = null, btnFns, color = "#fff", backgroundColor = "#FD6F00" }: ReusableButtonDataType) => {
  return (
    <div className="button_comp_wrap">
      <button
        onClick={btnFns}
        className={`${customClass} px-[60px] py-2 rounded-[15px] text-[25px]`}
        style={{ backgroundColor, color }}
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonComp;