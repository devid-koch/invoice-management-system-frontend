export const generateInvoiceNumber = () => {
    return `INV-${Math.floor(1000 + Math.random() * 9000)}`;
};