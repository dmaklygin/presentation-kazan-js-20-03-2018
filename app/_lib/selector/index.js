import {createSelector as createSelectorOriginal} from 'reselect'

export const createSelector = (...args) => {
  const selOriginal = createSelectorOriginal(...args)

  selOriginal.args = args.slice(0, args.length - 1)

  return selOriginal
}
