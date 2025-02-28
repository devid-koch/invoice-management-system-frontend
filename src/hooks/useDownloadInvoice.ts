import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { downloadInvoice } from '../api/dashboard-api';

export const useDownloadInvoice = () => {
    return useMutation({
        mutationFn: downloadInvoice,
        onMutate: () => {
            toast.loading('Generating PDF...');
        },
        onSuccess: () => {
            toast.success('Invoice downloaded successfully!');
        },
        onError: (error) => {
            console.error("Failed to download PDF:", error);
            toast.error("Failed to generate invoice PDF.");
        },
        onSettled: () => {
            toast.dismiss();
        }
    });
};
