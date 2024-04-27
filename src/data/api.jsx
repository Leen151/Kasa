import logements from './logements.json'
import about from './about.json'

function getLogements(){
    return logements;
}

function getLogementById(id){
    return logements.find(logement => logement.id === id);
}

export {getLogements, getLogementById}