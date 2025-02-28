export interface UserData {
    name?: string;
    email: string;
    password: string;
}
export interface InvoiceData {
    invoiceNumber: string;
    customerName: string;
    amount: number | string;
    dueDate: string;
    status: "paid" | "unpaid";
}


interface WeekData {
  day: string;
  revenue: number;
}

export interface WeeklyRevenueProps {
  weekData: WeekData[];
}

export interface Invoice {
  _id: string;
  invoiceNumber: string;
  customerName: string;
  amount: number;
  dueDate: string;
  status: "paid" | "unpaid";
}

export type DeleteResponse = {
  status: boolean;
  message?: string;
};