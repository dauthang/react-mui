import React, {useState} from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

const ButtonApp = () => {
    const [loading, setLoading] = useState(false);
    const [label, setlabel] = useState('submit')
    function handleClick() {
        setLoading(true);
    }
    return (
      <div>
          <LoadingButton
              size="small"
              onClick={handleClick}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
          >
              {label}
          </LoadingButton>
      </div>
    );
}

export default ButtonApp;
