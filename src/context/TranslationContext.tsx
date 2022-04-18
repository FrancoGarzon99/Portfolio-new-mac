import React, {createContext, useContext} from "react";
// import {IntlProvider} from "react-intl";

// import {getAssetUrl} from "../util/getAssetUrl";
// import defaultMessages from "../data/messages_default.json";

export enum AvailableLanguages {
  Chinese = "zh-cn",
  TaiwanChinese = "zh-tw",
  HongKongChinese = "zh-hk",
  Thai = "th-th",
  Korean = "ko-kr",
  Vietnamese = "vi-vn",
  Indonesian = "id-id",
  English = "en-us",
  Spanish = "es-es",
  Portuguese = "pt-pt",
}

export interface TranslationContextData {
  language: string;
  messageRequestCompleted: boolean;
}

export const TranslationContext = createContext<TranslationContextData>({
  language: AvailableLanguages.English,
  messageRequestCompleted: false,
});

type TranslationContextProviderProps = {children?: React.ReactNode};
type TranslationContextProviderState = TranslationContextData;

export class TranslationContextProvider extends React.Component<
  TranslationContextProviderProps,
  TranslationContextProviderState
> {
  public constructor(props: TranslationContextProviderProps) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      messageRequestCompleted: false,
      language: this.getLanguageFromHTMLTag(),
    };
  }

  public componentDidMount(): void {
    this.getMessagesFromLanguage();
    // window.addEventListener('keydown', () => {
    // 	this.setState({ messages: espanishMessages });
    // });
  }

  public getMessagesFromLanguage(): void {
    fetch(`${getAssetUrl()}/translations/messages_${this.state.language}.json`)
      .then((data) => {
        return data.json();
      })
      .then((translatedMessages) => {
        // eslint-disable-next-line react/no-unused-state
        this.setState({messages: translatedMessages, messageRequestCompleted: true});
        // eslint-disable-next-line react/no-unused-state

        document.title = translatedMessages.aplicationTitle;
      })
      .catch(() => {
        // eslint-disable-next-line react/no-unused-state
        this.setState({messageRequestCompleted: true, messages: defaultMessages});
      });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public getLanguageFromHTMLTag(): AvailableLanguages {
    const {lang} = document.documentElement;
    const pageLocale = lang.toLocaleLowerCase().split("-").join("-").replace("_", "-");

    return (
      Object.values(AvailableLanguages).filter((locale) => locale.includes(pageLocale))[0] ||
      AvailableLanguages.English
    );
  }

  public render(): JSX.Element {
    return (
      <TranslationContext.Provider value={this.state}>
        {this.state.messageRequestCompleted && (
          <IntlProvider
            defaultLocale={AvailableLanguages.English}
            locale={this.state.language}
            messages={this.state.messages}
          >
            {this.props.children}
          </IntlProvider>
        )}
      </TranslationContext.Provider>
    );
  }
}

export const useTranslationContext = (): TranslationContextData => useContext(TranslationContext);
