import React from 'react';
import {Paper,FormControl,FormLabel,FormGroup,FormControlLabel,Checkbox} from '@material-ui/core';
import {connect} from 'react-redux';
import {addState,removeState} from '../actions/list';

const LeftBox = ({list:{countries,showCountries},addState,removeState}) => {
    const checkList = [];
    showCountries.map(({states})=>{
        return checkList.push(...states);
    });
    const handleChange = (event,country,state) => {
        if(event.target.checked){
            addState(country,state);
        }
        else {
            removeState(country,state);
        }
    }
    
    const showCountry = countries.map((getCountry,index)=>{
        return (
            <div key={index}>
            <FormControl component="fieldset" key={index} >
        <FormLabel color="primary">{getCountry.country}</FormLabel><br/>
        <FormGroup>
        {getCountry.states.map((states,index)=>{
            return (
            <FormControlLabel key={index}
            control={<Checkbox data-state={states} onChange={(event)=>handleChange(event,getCountry.country,states)} checked={checkList.length > 0 ?(checkList.indexOf(states) === -1 ?false:true):false}/>}
            label={states}
              />)
        })}
        </FormGroup>
      </FormControl><br /><br />
      </div>
        )
    })
    return (
        <>
        <Paper style={{height:'500px',margin:'20px',padding:'30px',overflowY:'auto'}}>
        {showCountry}
        </Paper>
        </>
    )
}

const mapStateToProps = state => ({
    list:state.list
});
export default connect(mapStateToProps,{addState,removeState})(LeftBox);

