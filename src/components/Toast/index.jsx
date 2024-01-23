import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ErrorToast = ({ error, setError }) => {
    // Exibe o toast de erro
    const showErrorToast = () => {
        toast.error(error, {
            position: "top-right",
            autoClose: 5000, // Fecha automaticamente após 5 segundos
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    // Chama a função para exibir o toast de erro quando o componente é montado
    React.useEffect(() => {
        showErrorToast();
        // Limpa o erro após exibir o toast
        setError(null);
    }, [error, setError]);

    return (
        <ToastContainer />
    );
};

export default ErrorToast;
