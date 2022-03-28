import React, {useState} from 'react';
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";

const CheckBox = () => {
    const [label, setLabel] =  useState('label');
    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
            </FormGroup>
        </div>
    );
}

export default CheckBox;
