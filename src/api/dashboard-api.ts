import API from ".";
import { DeleteResponse, InvoiceData } from "../utils/types";

export const dashboardData = async () => {
  const response = await API.get("dashboard/stats");
  return response.data;
}


export const getAllInvoices = async () => {
    const response = await API.get("invoices");
    return response.data;
}

export const deleteInvoice = async (id: string): Promise<DeleteResponse> => {
    const response = await API.delete(`invoices/${id}`);
    return response.data;
};

export const createInvoice = async (data: InvoiceData): Promise<InvoiceData> => {
    try {
        const response = await API.post<InvoiceData>("/invoices", data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to create invoice");
    }
};

export const downloadInvoice = async (id: string) => {
    const response = await API.get(`invoices/${id}/pdf`, {
        responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `invoice_${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
};


export const getInvoiceDetails = async (id:string) => {
    const response = await API.get(`invoices/${id}`);
    return response.data.data;
}

export const updateInvoice = async (id:string, data:InvoiceData): Promise<InvoiceData>=> {
    const response = await API.put(`invoices/${id}`, data);
    return response.data;
}