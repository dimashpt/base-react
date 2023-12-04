import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { immer } from 'zustand/middleware/immer';

type AuthenticatedUser = {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
};

// Represents the state of the main store.
interface MainState {
  user: AuthenticatedUser;
  sessionExpires: number;
}

// Represents the actions that can be performed on the main store.
interface MainAction {
  setUser: (user: AuthenticatedUser) => void;
  setSessionExpires: (sessionExpires: number) => void;
  logout: () => void;
}

// Represents the main store, which includes both state and actions.
interface MainStore extends MainState, MainAction {}

const initialUser: AuthenticatedUser = {
  email: '',
  name: '',
  id: '',
};

/**
 * The state creator function for the main store.
 * @param set The function to set the state of the store.
 * @returns The initial state and actions of the main store.
 */
const stateCreator: StateCreator<MainStore> = (set) => ({
  lastResendOtp: 1,
  sessionExpires: 0,
  user: initialUser,
  setUser: (user) => set((_) => ({ user })),
  setSessionExpires: (sessionExpires) => set((_) => ({ sessionExpires })),
  logout: () => set((_) => ({ user: initialUser })),
  // setPhone is only used for res
});

// The middleware for the main store, which includes devtools and persistence.
const stateMiddleware = devtools(
  persist(immer(stateCreator), { name: 'main' }),
);

// The hook for using the main store.
const useMainStore = create<MainStore>()(stateMiddleware);

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('mainStore', useMainStore);
}

export default useMainStore;
