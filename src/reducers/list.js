import {ADD_STATE,REMOVE_STATE} from '../actions/types';

const initialState = {
    countries:[
        {country:'Portugal',states:['Aasiya Jayavant','Luvleen Lawrence','Rey Mibourne','Cayla Brister']},

        {country:'INDIA', states:['Delhi','Punjab','Haryana','Goa']},
        
        {country:'USA',states:['New York','Boston','California']}
        
    ],
    showCountries:[
        {country:'Portugal',states:[]},
        {country:'INDIA',states:[]},
        {country:'USA',states:[]}
    ],
    update:false
}

const list = (state=initialState,action) => {
    let {type,payload} = action;
    switch(type){
        case ADD_STATE: {
            state.showCountries.map((country,index)=>{
                if(country.country === payload.country){
                    country.states = [...country.states,payload.state]
                }
                return {...state,update:!state.update}
            });
            return {...state,update:!state.update}
            }
        case REMOVE_STATE:{
            state.showCountries.map((country,index)=>{
                if(country.country === payload.country){
                    let getIndex = country.states.indexOf(payload.state);
                    country.states.splice(getIndex,1);
                }
                return {...state,update:!state.update};
            });
            return {...state,update:!state.update};
        }
        default:
            return state;
    }
}

export default list;