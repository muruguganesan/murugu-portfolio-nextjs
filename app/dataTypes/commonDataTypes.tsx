// Header Nav Datas
// Reusable Button Data Types
// Reusable Button Data Types

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
  btnFns?: () => void;
  color?: string;
  backgroundColor?: string;
}

export type { HeaderNavDataTypes, ReusableButtonDataType };
