'use client'

import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Typography,
    Box,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface DynamicPopupProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
    showCloseButton?: boolean
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    fullWidth?: boolean
    footer?: React.ReactNode
}

const CustomPopup = (props: DynamicPopupProps) => {

    const { isOpen,
        onClose,
        title,
        children,
        showCloseButton = true,
        maxWidth = 'sm',
        fullWidth = true,
        footer } = props

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
        >
            {title && (
                <DialogTitle>
                    <Typography variant="h6">{title}</Typography>
                    {showCloseButton && (
                        <IconButton
                            aria-label="close"
                            onClick={onClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    )}
                </DialogTitle>
            )}
            <DialogContent dividers>
                <Box>{children}</Box>
            </DialogContent>
            {footer && <DialogActions>{footer}</DialogActions>}
        </Dialog>
    )
}

export default CustomPopup