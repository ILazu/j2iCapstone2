import axios from 'axios';
import {
    GET_AI_CHANNELS,
    SET_CHANNELAI1_INFO,
    SET_AICHANNEL_NAME,
    SET_AICHANNEL_STATUS,
    CALCULATE_AUTOSCALLING,
    SET_AICHANNEL_SLOPEINTERCEPT_RESULT
} from '../actions/types';

export const getAIChannels = () => dispatch => {
    axios
        .get('/api/analogInputs')
        .then(res =>
            dispatch({
                type: GET_AI_CHANNELS,
                payload: res.data,
            })
        )
}

export const setChannelAiInfo = (channel, chNumber) => dispatch => {
    const id = channel._id;
    axios
        .put(`/api/analogInputs/${id}`, channel)
        .then(res =>
            dispatch({
                type: SET_CHANNELAI1_INFO,
                payload: res.data,
                payload2: chNumber
            })
        )
}

export const setAIChannelName = (name, chNumber) => {
    return {
        type: SET_AICHANNEL_NAME,
        payload: name,
        payload2: chNumber
    }
}

export const setAIChannelStatus = (status, chNumber) => {
    return {
        type: SET_AICHANNEL_STATUS,
        payload: status,
        payload2: chNumber
    }
}

export const calculateAutoScalling = (n1, n2, m1, m2, input, chNumber) => {
    const result = n2 + (input - n1) * ((m2 - n2) / (m1 - n1));
    return {
        type: CALCULATE_AUTOSCALLING,
        payload: result,
        payload2: chNumber
    }
}

export const setAIChannelSlopeInterceptResult = (result, chNumber) => {
    return {
        type: SET_AICHANNEL_SLOPEINTERCEPT_RESULT,
        payload: result,
        payload2: chNumber
    }
}