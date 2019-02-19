
export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false,
};

export function authReduce(state = initialState, action) {
  
  return state;
}
