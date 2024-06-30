// Header Nav Datas
// Reusable Button Data Types
// Reusable Button Data Types
// Title with Description
// Button Groups



// Header Nav Datas
interface HeaderNavDataTypes {
  id: number;
  text: string;
  link: string;
}

// Reusable Button Data Types
interface ReusableButtonDataType {
  customClass?: string;
  text?: string;
  initialState?: boolean | string | number | null;
  btnFns?: any;
  color?: string;
  backgroundColor?: string;
}

// Title with Description
interface TitleWithDescType {
  title: string; 
  desc: string 
}

// Button Groups
interface ButtonGroupType {
  id: number,
  tech: string
}

export type { HeaderNavDataTypes, ReusableButtonDataType, TitleWithDescType, ButtonGroupType };
