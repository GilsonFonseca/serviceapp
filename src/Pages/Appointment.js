import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchDealer, dispatchAppointment } from '../Redux/DealersRedux';
import Button from '@mui/material/Button';


export default function NativeSelectDemo() {
    const {dealers} = useSelector((state) => state.dealers);
    const [selectedDealer, setDealer] = useState();
    const [showDays, setShowDays] = useState(false);
    const dispatch = useDispatch()
    const handleChange = (event) => {
        setDealer(event.target.value);
        if(event.target.value === "") {
            setShowDays(false);
        }
        else setShowDays(true);
    }


    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            dispatch(await dispatchDealer());
        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, [dispatch])
    return (
        <Box sx={{minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Escolha o(a) consultor(a)
            </InputLabel>
            <NativeSelect
          labelid="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedDealer}
          onChange={handleChange}
          label="Dealer"
        >
            <option value={""}></option>
            {
            dealers === undefined
                ? <option value={"10"}></option>
                :
                dealers.map((dealer, index) => {
                    return <option key={index} value={index}>{dealer.nome}</option> 
                })
            }
            </NativeSelect>
        </FormControl>
        <div style={{
            paddingTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        }}>
        {showDays && dealers[selectedDealer].dias
        ? dealers[selectedDealer].dias && dealers[selectedDealer].dias.map((dia) => {
            return(    
                <Button 
                    disabled=
                        {
                            dealers[selectedDealer].agenda && 
                            dealers[selectedDealer].agenda.dias &&
                            Object.values(dealers[selectedDealer].agenda.dias).includes(dia)
                        }
                key={dia} variant="contained" color="primary" 
                    onClick={async () => dispatch(await dispatchAppointment(selectedDealer, dia))} style={{ margin: 5}}>
                    {dia}
                </Button>
                    )
                })
        :showDays && !dealers[selectedDealer].dias
            ? "A agenda deste Dealer está cheia"
            : null}
        </div>
              
        <Button variant="contained" color="primary" onClick={() => console.log('vtaos')}>
          Gravar dados
        </Button>
        </Box>
    );
}

