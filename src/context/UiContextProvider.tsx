import React, {createContext, PropsWithChildren} from "react";

interface Section {
  sectionId: string;
  sectionRoute: string;
}
interface UiContextData {
  stateInitialize: string;
}

const initialUiContextData: UiContextData = {
  stateInitialize: "Inicie",
};

export const UiContext = createContext<UiContextData>(initialUiContextData);

type UiContextProviderProps = PropsWithChildren<{
  history: {push: (url: string) => void};
  pathname: string;
  isStaticLayout: boolean;
}>;

type UiContextProviderState = {
  stateInitialize: string;
};

export enum LoadingConstants {
  Preload,
}

export class UiContextProvider extends React.Component<
  UiContextProviderProps,
  UiContextProviderState
> {
  public props: UiContextProviderProps;
  public state: UiContextProviderState;

  public constructor(props: UiContextProviderProps) {
    super(props);
    this.props = props;
    this.state = {
      stateInitialize: "",
    };
  }

  public componentDidMount(): void {
    console.log("Public, ComponentDidMount");
  }

  public componentDidUpdate(previousProps: UiContextProviderProps): void {
    console.log("componentDidUpdate");
  }

  public render(): JSX.Element {
    return (
      <UiContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </UiContext.Provider>
    );
  }
}
