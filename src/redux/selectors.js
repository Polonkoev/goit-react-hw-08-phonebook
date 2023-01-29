export const SelectContacts = state => state.contacts.items;
export const SelectIsLoading = state => state.contacts.isLoading;
export const SelectError = state => state.contacts.error;
export const SelectorIsLoading = state => state.contacts.isLoading;
export const SelectorToken = state => state.auth.token;
export const SelectFilter = state => state.filter.filter;
export const SelectName = state => state.auth.user.name

export const SelectCurrentUser = state => state.auth.isCurrentUser