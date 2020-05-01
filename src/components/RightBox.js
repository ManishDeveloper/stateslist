import React from 'react';
import { Typography,Paper } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {connect} from 'react-redux';
import {removeState} from '../actions/list';

const RightBox = ({list:{showCountries},removeState}) => {

    const deleteState = (country,states) => {
        removeState(country,states);
    }
    let counter = 0;
    let countries = showCountries.map((country,index)=>{
            if(country.states.length >0){
                return (
                    <div key={index}> 
                    <Typography variant="h6">{country.country}</Typography>
                    {country.states.map((state,index)=>{
                        return(
                        <Alert style={{margin:'10px 0px' }} key={index} onClose={()=>deleteState(country.country,state)}>{state}</Alert>
                        )         
                    })}
                    </div>
                )
            }else {
                counter++;
                if(counter === showCountries.length){
                    return <h3 style={{textAlign:'center'}}>No Value Selected!</h3>
                }
            }
    });
    return (
        <>
           <Paper style={{height:'500px',margin:'20px',padding:'30px',overflowY:'auto'}}>
               {countries}
            </Paper> 
        </>
    )
}

const mapStateToProps = state => ({
    list:state.list
});

export default connect(mapStateToProps,{removeState})(RightBox);

