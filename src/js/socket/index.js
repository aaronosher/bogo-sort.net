import store from '../store';
import { updateSortData } from '../store/actions/sort';

import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8080');

socket.on('sort', data => store.dispatch(updateSortData(data)));
