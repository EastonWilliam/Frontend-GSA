import { useState } from "react";

import { Box, TextField, Typography, Button } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
const Certification = () => {
    const [digitNumber, setDigitNumber] = useState("");

    return (
        <Box sx={{
            width: '80%', height: '10rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderRadius: '50px'
        }}>
            <img src="../assets/icons/s-icon"></img>
            <Box display={'flex'} flexDirection={'column'}>
                <Typography>Cert Verification</Typography>
                <Typography>Verify the validity of PSA/DNA certification numbers</Typography>
            </Box>
            <TextField label={'Enter 7 digit number'} value={digitNumber}></TextField>
            <Button startIcon={<VerifiedIcon />}>Verify</Button>
        </Box>
    )
}