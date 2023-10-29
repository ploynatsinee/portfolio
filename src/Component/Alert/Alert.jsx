import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Alerts({ severity, text }) {
  const [showAlert, setShowAlert] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Stack
      sx={{
        marginTop: '10px',
        width: '40%',
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        animation: 'slide-down 0.5s ease-in-out'
      }}
      spacing={2}
    >
      {showAlert && <Alert severity={severity}>{text}</Alert>}
    </Stack>
  );
}
