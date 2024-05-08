import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useAuthenticatedUserContext } from '../../../../context/AuthenticatedUserContext';
import UserService from '../../services/UserService';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';
import CustomDialog from '../../../shared/CustomDialog/CustomDialog';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function UserImageUploader({ file, setFile, userDetails, loading, onUploadSubmit, onDeleteImage }) {

    const [avatarUrl, setAvatarUrl] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const theme = useTheme();
    useEffect(() => {


        setAvatarUrl(userDetails.image);


    }, [loading]);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setAvatarUrl(URL.createObjectURL(selectedFile));
        }
    };


    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                width: 'fit-content',
                gap: 1,
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <Avatar
                    alt="User"
                    src={avatarUrl}
                    sx={{ width: 80, height: 80, marginRight: 2, opacity: loading ? 0.2 : 1 }}

                />
                {loading && (
                    <CircularProgress
                        size={80}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            color: theme.palette.primary.main,
                        }}
                    />
                )}
            </Box>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                sx={{ alignSelf: 'end', paddingInline: 4, borderRadius: '8px' }}
                startIcon={<CloudUploadIcon />}
            >
                Upload
                <VisuallyHiddenInput
                    accept="image/*"
                    type="file"
                    onChange={handleFileChange}
                    id="file-input"
                />
            </Button>

            <Button
                variant="outlined"
                color="error"
                sx={{ paddingInline: 4, borderRadius: '8px', alignSelf: 'end' }}
                startIcon={<DeleteOutlineOutlinedIcon />}
                disabled={!userDetails.image}

                onClick={() => setOpenDialog(true)}
            // onClick={() => {
            //     const confirm = window.confirm('Are you sure you want to delete this image?');
            //     if (confirm) {
            //         onDeleteImage();
            //     }
            // }}
            >
                Delete
            </Button>

            <Button
                variant="contained"
                color="primary"
                sx={{ paddingInline: 4, borderRadius: '8px', alignSelf: 'end' }}
                onClick={onUploadSubmit}
                disabled={!file}
            >
                Submit
            </Button>

            <CustomDialog title={"Delete Image"} message={"Are you sure you want to delete your profile image?"}
                open={openDialog} onAgree={() => {
                    onDeleteImage();
                    setOpenDialog(false);
                }} onDisagree={() => setOpenDialog(false)} />
        </Box>
    );
}
