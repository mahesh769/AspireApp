import Strings from "../translation/language";
import { priceTypes } from "./constants";

export const freelancerActiveContractsFilterData = [
  { label: Strings.ongoing, value: '' },
  { label: Strings.completed, value: Strings.active_contracts.toLowerCase() },
  { label: Strings.this_week, value: Strings.offers_received.toLowerCase() },
  { label: Strings.last_week, value: Strings.offers_sent.toLowerCase() },
]

export const jobPostPriceTypes = [
  { label: Strings.price_range, value: priceTypes.price_range },
  { label: Strings.fixed, value: priceTypes.fixed },
  { label: Strings.installments, value: priceTypes.installments },
]