import { COLLECTION_NAME, MODEL_NAME } from "./constants/models";
import CurrenciesRateSchema from "./currencies/CurrenciesRate/CurrenciesRateSchema";
import CurrenciesStatisticSchema from "./currencies/CurrenciesStatistic/CurrenciesStatisticSchema";
import HiveEngineRateSchema from "./currencies/HiveEngineRate/HiveEngineRateSchema";
import ReservationCurrenciesSchema from "./currencies/ReservationCurrencies/ReservationCurrenciesSchema";
import { ModelTuple } from "./types";

const CurrenciesRateModel: ModelTuple = [MODEL_NAME.CURRENCIES_RATE, CurrenciesRateSchema, COLLECTION_NAME.CURRENCIES_RATE];
const CurrenciesStatisticModel: ModelTuple = [MODEL_NAME.CURRENCIES_STATISTIC, CurrenciesStatisticSchema, COLLECTION_NAME.CURRENCIES_STATISTIC];
const HiveEngineRateModel: ModelTuple = [MODEL_NAME.HIVE_ENGINE_RATE, HiveEngineRateSchema, COLLECTION_NAME.HIVE_ENGINE_RATE];
const ReservationCurrenciesModel: ModelTuple = [MODEL_NAME.RESERVATION_CURRENCIES, ReservationCurrenciesSchema, COLLECTION_NAME.RESERVATION_CURRENCIES];

const currencyModels = {
    CurrenciesRate: CurrenciesRateModel,
    CurrenciesStatistic: CurrenciesStatisticModel,
    HiveEngineRate: HiveEngineRateModel,
    ReservationCurrencies: ReservationCurrenciesModel,
}

export default currencyModels;
