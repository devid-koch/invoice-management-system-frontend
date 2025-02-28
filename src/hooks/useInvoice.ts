import { useQuery } from '@tanstack/react-query';
import { getInvoiceDetails } from '../api/dashboard-api';

export const useInvoice = (id?: string) => {
    return useQuery({
        queryKey: ['invoice', id],
        queryFn: () => getInvoiceDetails(id!),
        enabled: !!id,
    });
};
