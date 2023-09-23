import { Stack, Typography } from '@mui/material';

const Item = ({ title, value }) => {
    return (
        <Stack
            direction='column'
        >
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{title}</Typography>
            <Typography variant='subtitle1'>{value}</Typography>
        </Stack>
    );
}

export default Item;