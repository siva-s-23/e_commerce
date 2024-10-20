// src/components/CustomAlert.tsx
'use client';

import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface CustomAlertProps {
    title: string;
    text?: string;
    icon?: 'success' | 'error' | 'warning' | 'info' | 'question' | undefined;
    confirmButtonText?: string;
    cancelButtonText?: string;
    showCancelButton?: boolean;
    animation?: boolean;
    onConfirm?: () => void;  // Callback for confirm action
    onCancel?: () => void;    // Callback for cancel action
}

const CustomAlert: React.FC<CustomAlertProps> = ({
    title,
    text,
    icon = 'info',
    confirmButtonText = 'OK',
    cancelButtonText = 'Cancel',
    showCancelButton = false,
    animation = true,
    onConfirm,
    onCancel,
}) => {
    const showAlert = async () => {
        const result = await MySwal.fire({
            title,
            text,
            icon,
            showCancelButton,
            confirmButtonText,
            cancelButtonText,
            customClass: {
                popup: animation ? 'animated-popup' : '',
            },
        });

        if (result.isConfirmed && onConfirm) {
            onConfirm();  // Trigger the onConfirm function
        } else if (result.isDismissed && onCancel) {
            onCancel();  // Trigger the onCancel function
        }
    };

    return (
        <button onClick={showAlert}>
            Show Alert
        </button>
    );
};

export default CustomAlert;
