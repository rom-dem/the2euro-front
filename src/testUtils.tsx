import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { RootState, store } from "./store";
import { userReducer } from "./store/features/users/userSlice/userSlice";
import GlobalStyles from "./styles/GlobalStyles";

const rootReducer = combineReducers({ user: userReducer });

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({ reducer: rootReducer, preloadedState });
};

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Provider store={testStore}>
        <GlobalStyles />
        {children}
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};
