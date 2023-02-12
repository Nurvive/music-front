import { PlayerAction, PlayerActions, PlayerState } from '~/types';

const initialState: PlayerState = {
    currentTime: 0,
    duration: 0,
    active: null,
    volume: 0,
    pause: true,
};

export const playerReducer = (state = initialState, action: PlayerAction): PlayerState => {
    switch (action.type) {
        case PlayerActions.PLAY:
            return { ...state, pause: false };
        case PlayerActions.PAUSE:
            return { ...state, pause: true };
        case PlayerActions.SET_CURRENT_TIME:
            return { ...state, currentTime: action.payload };
        case PlayerActions.SET_VOLUME:
            return { ...state, volume: action.payload };
        case PlayerActions.SET_ACTIVE:
            return { ...state, active: action.payload, currentTime: 0, duration: 0 };
        case PlayerActions.SET_DURATION:
            return { ...state, duration: action.payload };
        default:
            return state;
    }
};
