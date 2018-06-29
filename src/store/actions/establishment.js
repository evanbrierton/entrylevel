import { database } from '../../services';
import { addErrorAction as addError } from './error';
import { LOAD_ESTABLISHMENT } from '../actionTypes';

const loadEstablishment = establishmentData => (
  { type: LOAD_ESTABLISHMENT, establishmentData }
);

export const fetchEstablishmentAction = (company, establishment) => (
  dispatch => (
    database('get', `companies/${company}/establishments/${establishment}`)
      .then(res => dispatch(loadEstablishment(res)))
      .catch(err => dispatch(addError(err)))
  )
);

export default fetchEstablishmentAction;
