'use client'

import { useToastAction } from "top-layer/toaster/hooks";

import "./toast-action.scss";

export interface ToastActionProps {
    type: string;
    message: string;
    title: string;
    layers?: string[];
}

export const ToastAction: React.FC<ToastActionProps> = ({ type, message, layers = ['root'], title }) => {
    const { openToaster } = useToastAction('nimpl-toast');

    return (
        <button
            className="toast-action"
            onClick={() => openToaster({ type, message }, layers)}
        >
            {title}
        </button>
    )
}
