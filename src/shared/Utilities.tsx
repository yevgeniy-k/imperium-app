import { cloneDeep, first, omit, orderBy } from 'lodash';
import { CurrentUserFieldsFragment, GenericRateRequestFieldsFragment } from 'types/gqlReactTypings.generated.d';
import { StorageKeys } from './Constants';

export const getLocalToken = (): string | undefined => {
  const storedToken = window.localStorage.getItem(StorageKeys.TOKEN);
  return storedToken ?? undefined;
};

export const setLocalToken = (token: string) => {
  window.localStorage.setItem(StorageKeys.TOKEN, token);
}

export const getCurrentUser = (): CurrentUserFieldsFragment | undefined => {
  try {
    const stored = localStorage.getItem(StorageKeys.CURRENT_USER)
    if (!!stored) {
      return JSON.parse(stored);
    }
  } catch (err) {
    console.log(`Error loading user from storage: ${err}`);
  }

  return undefined;
};

export const setCurrentUser = async (user: CurrentUserFieldsFragment) => {
  localStorage.setItem(StorageKeys.CURRENT_USER, JSON.stringify(user));
};

export const clearLocalToken = () => {
  window.localStorage.removeItem(StorageKeys.TOKEN);
}

export const isDevEnvironment = () => {
  return process.env.NODE_ENV === 'development';
}

export function devEntry<T>(data?: T) {
  return isDevEnvironment() ? data : undefined;
}

export const getLatestRate = (rateRequests: GenericRateRequestFieldsFragment[]) => {
  return first(orderBy(rateRequests, item => item.createdAt, 'desc'))
}

export const isWaitingOnRates = (rateRequests: GenericRateRequestFieldsFragment[]) => {
  const latest = getLatestRate(rateRequests);
  return latest != null && (latest.rateQuotes == null || latest.rateQuotes.length === 0)
}

export const needsRateSelection = (rateRequests: GenericRateRequestFieldsFragment[]) => {
  const latest = getLatestRate(rateRequests);
  return !isWaitingOnRates(rateRequests) && latest != null && latest.selectedRateQuoteId == null;
}

export function typedOmit<T extends Record<string, any>>(obj: T, keys: (keyof T)[]) {
  return omit(obj, keys);
}


export function hookStateChangeInjector<T>(state: T, changer: (obj: T) => any, callback?: () => any) {
  return (propertyKey: keyof T) => {
    return (val: any) => {
      const newState = cloneDeep(state);
      newState[propertyKey] = val;
      changer(newState);
      callback && callback();
    }
  }
}