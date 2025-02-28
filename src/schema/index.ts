import * as Yup from "yup";

export const LoginvalidationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export const CreateInvoiceValidation = Yup.object().shape({
    invoiceNumber: Yup.string().required("Invoice number is required"),
    customerName: Yup.string().required("Customer Name is required"),
    amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be greater than zero")
        .required("Amount is required"),
    dueDate: Yup.string().required("Due Date is required"),
    status: Yup.mixed<"paid" | "unpaid">()
        .oneOf(["paid", "unpaid"], "Invalid status")
        .required("Status is required"),
});