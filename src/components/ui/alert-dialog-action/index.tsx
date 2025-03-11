'use client'

import { useDialogAction } from "top-layer/dialog/hooks";

import "./alert-dialog-action.scss";

export interface AlertDialogActionProps {
    title: string;
}

export const AlertDialogAction: React.FC<AlertDialogActionProps> = ({ title }) => {
    const { openDialog } = useDialogAction('alert');

    return (
        <button
            className="alert-dialog-action"
            onClick={() => openDialog('Base Alert Dialog')}
        >
            {title}
        </button>
    )
}
