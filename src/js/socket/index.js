import store from '../store';
import { updateSortData } from '../store/actions/sort';

import openSocket from 'socket.io-client';

const socket = openSocket(location.hostname + ':' + location.port);

socket.on('sort', data => store.dispatch(updateSortData(data)));
