export const locale = "mc-IN";
export const localeName = "-- --- .-. ... . / -.-. --- -.. .";
export const credits = "MacabreOverlord";

export const STRINGS = {
    _NO_LOCALE: (key: string) =>
        `-... ..- --.: ${key} -.. --- . ... -. .----. - / ... . . -- / - --- / . -..- .. ... - / --- .-. / -... . / - .-. .- -. ... .-.. .- - . -.. / -.-- . - .-.-.-`,
    GENERIC_ERROR:
        "... --- -- . - .... .. -. --. / ..- -. . -..- .--. . -.-. - . -.. / .... .- ... / --- -.-. -.-. ..- .-. . -.. .-.-.- / .--. .-.. . .- ... . / - .-. -.-- / .- --. .- .. -. / .-.. .- - . .-. .-.-.-",
    ACCOUNT_ALREADY_EXISTS:
        "-.-- --- ..- / .- .-.. .-. . .- -.. -.-- / .... .- ...- . / .- -. / .- -.-. -.-. --- ..- -. - -.-.--",
    ACCOUNT_DOES_NOT_EXIST:
        "-.-- --- ..- / -.. --- / -. --- - / .... .- ...- . / .- -. / .- -.-. -.-. --- ..- -. - -.-.--",
    ACCOUNT_CANNOT_CREATE:
        "-.-- --- ..- .-. / .- -.-. -.-. --- ..- -. - / -.-. --- ..- .-.. -.. -. .----. - / -... . / -.-. .-. . .- - . -.. .-.-.- / .--. .-.. . .- ... . / - .-. -.-- / .- --. .- .. -. / .-.. .- - . .-. .-.-.-",
    ACCOUNT_CANNOT_RETRIEVE:
        "- .... .. ... / .- -.-. -.-. --- ..- -. - / -.. --- . ... / -. --- - / . -..- .. ... - -.-.--",
    BALANCE_CANNOT_RETRIEVE:
        "- .... . .-. . / .. ... / -. --- / -... .- .-.. .- -. -.-. . / - --- / ... .... --- .-- .-.-.-",
    COOLDOWN: (cooldown: number, unit: string) =>
        `.--. .-.. . .- ... . / - .-. -.-- / .- --. .- .. -. / .. -. ${cooldown / 60000} ${unit}`,
    COOLDOWN_MINUTES: "-- .. -. ..- - . ...",
    COOLDOWN_SECONDS: "... . -.-. --- -. -.. ...",
    INPUT_INVALID_AMOUNT:
        ".--. .-.. . .- ... . / .. -. .--. ..- - / .- / ...- .- .-.. .. -.. / .- -- --- ..- -. - -.-.--",
    SUPPLY_WILL_BE_EXCEEDED:
        "- .... . / -- .- -..- / ... ..- .--. .--. .-.. -.-- / .... .- ... / -... . . -. / .-. . .- -.-. .... . -.. -.-.--",
    TRANSACTION_AMOUNT_INVALID:
        "-.-- --- ..- / -.. --- / -. --- - / .... .- ...- . / . -. --- ..- --. .... / -.-. ..- .-. .-. . -. -.-. -.-- -.-.--",
    TRANSACTION_CANNOT_TRANSFER_TO_SELF:
        "-.-- --- ..- / -.-. .- -. -. --- - / - .-. .- -. ... ..-. . .-. / - --- / -.-- --- ..- .-. ... . .-.. ..-. -.-.--",
    TRANSACTION_CANNOT_SEND_ZERO: "-.-- --- ..- / -.-. .- -. .----. - / ... . -. -.. / -. --- - .... .. -. --. -.-.--",
    LEADERBOARD_CANNOT_HAVE_MULTIPLE:
        "-.. --- -. .----. - / .... .- ...- . / -- --- .-. . / - .... .- -. / --- -. . / .-.. . .- -.. . .-. -... --- .- .-. -.. / --- .--. . -. -.-.--",
    TRANSACTION_LIST_CANNOT_HAVE_MULTIPLE:
        "-.. --- -. .----. - / .... .- ...- . / -- --- .-. . / - .... .- -. / --- -. . / - .-. .- -. ... .- -.-. - .. --- -. / .-.. .. ... - / --- .--. . -. -.-.--",
    TRANSACTION_VIEW_CANNOT_RETRIEVE:
        "- .... .. ... / - .-. .- -. ... .- -.-. - .. --- -. / -.. --- . ... -. .----. - / . -..- .. ... - -.-.--",
    LOCALE_DOES_NOT_EXIST:
        "- .... . / .-.. --- -.-. .- .-.. . / -.-- --- ..- / .--. .. -.-. -.- . -.. / -.. --- . ... / -. --- - / . -..- .. ... - -.-.--",

    ACCOUNT_CREATED:
        "-.-- --- ..- .-. / .- -.-. -.-. --- ..- -. - / .... .- ... / -... . . -. / -.-. .-. . .- - . -.. -.-.--",
    ACCOUNT_RETURN_BALANCE: (calculated: string) =>
        `-.-- --- ..- .-. / .- -.-. -.-. --- ..- -. - / -... .- .-.. .- -. -.-. . / .. ... ${calculated}`,
    ACCOUNT_RETURN_BALANCE_OTHER_USER: (parsed: string, calculated: any) => `${parsed} .... .- ... ${calculated}`,
    CONVERT_AMOUNT_IS: (amount: string, calculated: string) => `${amount} .. ... ${calculated}`,
    INFO_DESC: (coinName: string) =>
        `. -..- -.-. .... .- -. --. . / .- -. -.. / - .-. .- -. ... ..-. . .-. / ${coinName}!`,
    INFO_MAX_SUPPLY_LABEL: "-- .- -..- / ... ..- .--. .--. .-.. -.--",
    INFO_EXCHANGE_RATE_LABEL: ". -..- -.-. .... .- -. --. . / .-. .- - .",
    INFO_EXCHANGE_RATE_VALUE: (ticker: string, exchangeRate: string, currency: string, calculatedExchange: string) =>
        `1 ${ticker} ..-. --- .-. ${exchangeRate} ${currency}.\n1 ${currency} ..-. --- .-. ${calculatedExchange}`,
    INFO_CURRENT_SUPPLY_LABEL: "-.-. ..- .-. .-. . -. - / ... ..- .--. .--. .-.. -.--",
    INFO_BLOCK_REWARD_LABEL: "-... .-.. --- -.-. -.- / .-. . .-- .- .-. -..",
    INFO_AMOUNT_MINED_LABEL: ".- -- --- ..- -. - / -- .. -. . -..",
    INFO_AMOUNT_MINED_VALUE: (amountMined: number) =>
        `${amountMined}% --- ..-. / -- .- -..- / ... ..- .--. .--. .-.. -.--`,
    INFO_MARKET_CAP_LABEL: "-- .- .-. -.- . - / -.-. .- .--.",
    INFO_FULLY_DILUTED_MARKET_CAP_LABEL:
        "..-. ..- .-.. .-.. -.-- / -.. .. .-.. ..- - . -.. / -- .- .-. -.- . - / -.-. .- .--.",
    INFO_TX_FEE_LABEL: "- .-. .- -. ... .- -.-. - .. --- -. / -.--. - -..- -.--.- / ..-. . .",
    INFO_DATA_LABEL: "-.. .- - .-",
    LEADERBOARD_TITLE: ".-.. . .- -.. . .-. -... --- .- .-. -..",
    LEADERBOARD_DESC:
        "- .... . / --. .-.. --- -... .- .-.. / .-. .. -.-. .... / .-.. .. ... - / -.--. ... .... --- .-- .. -. --. / .---- -....- .---- ----- -.--.-",
    LEADERBOARD_DESC_FORWARD: (index: number, to: number) =>
        `- .... . / --. .-.. --- -... .- .-.. / .-. .. -.-. .... / .-.. .. ... - / -.--. ... .... --- .-- .. -. --. /  ${
            index + 2
        }-${to + 1} / -.--.-`,
    LEADERBOARD_DESC_BACK: (to: number) =>
        `- .... . / --. .-.. --- -... .- .-.. / .-. .. -.-. .... / .-.. .. ... - / -.--. ... .... --- .-- .. -. --. / ${
            to + 1
        }-${to + 10} / -.--.-`,
    LEADERBOARD_VALUE: (value: string) => `${value} --- ..-. / - --- - .- .-.. / ... ..- .--. .--. .-.. -.-- .-.-.-`,
    LOCALES_LIST_TITLE: ".-.. --- -.-. .- .-.. . ... / .-.. .. ... -",
    LOCALES_LIST_DESC: ".-.. .. ... - / --- ..-. / .-.. --- -.-. .- .-.. . ...",
    TRANSACTION_LIST_TITLE: "- .-. .- -. ... .- -.-. - .. --- -. ... / .-.. .. ... -",
    TRANSACTION_LIST_DESC:
        ".-.. .. ... - / --- ..-. / .-. . -.-. . -. - / - .-. .- -. ... .- -.-. - .. --- -. ... / -.--. ... .... --- .-- .. -. --. / .---- -....- .---- ----- -.--.-",
    TRANSACTION_LIST_DESC_FORWARD: (index: number, to: number) =>
        `.-.. .. ... - / --- ..-. / .-. . -.-. . -. - / - .-. .- -. ... .- -.-. - .. --- -. ... / -.--. ... .... --- .-- .. -. --. / ${
            index + 2
        }-${to + 1} / -.--.-`,
    TRANSACTION_LIST_DESC_BACK: (to: number) =>
        `.-.. .. ... - / --- ..-. / .-. . -.-. . -. - / - .-. .- -. ... .- -.-. - .. --- -. ... / -.--. ... .... --- .-- .. -. --. / ${
            to + 1
        }-${to + 10} / -.--.-`,
    TRANSACTION_VIEW_TITLE: (txid: string) => `...- .. . .-- .. -. --. ${txid}`,
    TRANSACTION_VIEW_DESC: "...- .. . .-- / .- / - .-. .- -. ... .- -.-. - .. --- -. .-.-.-",
    TRANSACTION_VIEW_INDEX_LABEL: ".. -. -.. . -..-",
    TRANSACTION_VIEW_SENDER_LABEL: "... . -. -.. . .-.",
    TRANSACTION_VIEW_RECIPIENT_LABEL: ".-. . -.-. .. .--. .. . -. -",
    TRANSACTION_VIEW_AMOUNT_SENT_LABEL: ".- -- --- ..- -. - / ... . -. -",
    TRANSACTION_VIEW_TIMESTAMP_LABEL: "- .. -- . ... - .- -- .--.",
    TRANSACTION_VIEW_TX_FEE_LABEL: "- -..- / ..-. . .",
    TRANSACTION_VIEW_PREV_HASH_LABEL: ".--. .-. . ...- .. --- ..- ... / .... .- ... ....",
    TRANSACTION_SUCCESS: "- .-. .- -. ... .- -.-. - .. --- -. / ... ..- -.-. -.-. . ... ... ..-. ..- .-.. .-.-.-",
    SUCCESSFULLY_MINED: (blockReward: number, ticker: string, parsedFees: number) =>
        `-.-- --- ..- / .... .- ...- . / ... ..- -.-. -.-. . ... ... ..-. ..- .-.. .-.. -.-- / -- .. -. . -.. / ..-. --- .-. / - .... . / -... .-.. --- -.-. -.- / .-. . .-- .- .-. -.. / --- ..-. ${blockReward} ${ticker} .- -. -.. ${parsedFees} .. -. / - -..- / ..-. . . ...`,
    LOCALE_CHANGED:
        "-.-- --- ..- .-. / .-.. --- -.-. .- .-.. . / .... .- ... / ... ..- -.-. -.-. . ... ... ..-. ..- .-.. .-.. -.-- / -... . . -. / -.-. .... .- -. --. . -.. -.-.--",
    CURRENT_LOCALE: (localeName: string, locale: string) =>
        `-.-- --- ..- .-. / -.-. ..- .-. .-. . -. - / .-.. --- -.-. .- .-.. . / .. ... / ... . - / - --- / ${localeName} [${locale}]\n-.-. .-. . .- - . -.. / -... -.-- / ${credits}`,
};
