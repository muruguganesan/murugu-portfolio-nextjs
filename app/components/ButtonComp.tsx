import { ReusableButtonDataType } from '@/app/dataTypes/commonDataTypes';

const ButtonComp = ({ customClass = "test", text = "Button", initialState = null, btnFns }: ReusableButtonDataType) => {
  return (
    <div className="button_comp_wrap">
      <button
        onClick={btnFns}
        className={`${customClass} px-[35px] py-2 rounded-[15px] text-[20px] reusable_btn_hover reusable_btn`}
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonComp;