import React, {createContext, useContext} from "react";

export interface UiContentData {
  stateDataContext: string;
}

export const UiContext = createContext<UiContentData>({
  stateDataContext: "DATACONTEXT",
});

type UiContextProviderProps = {children?: React.ReactNode};
type UiContextProviderState = UiContentData;

//Create a new context
export class UiContextProvider extends React.Component<
  UiContextProviderProps,
  UiContextProviderState
> {
  public constructor(props: UiContextProviderProps) {
    super(props);
    this.state = {
      stateDataContext: "global state",
    };
  }

  public componentDidMount(): void {
    console.log("desde Data context");
  }

  public render(): JSX.Element {
    return <UiContext.Provider value={this.state}>{this.props.children}</UiContext.Provider>;
  }
}

export const useUiContentData = (): UiContentData => useContext(UiContext);
