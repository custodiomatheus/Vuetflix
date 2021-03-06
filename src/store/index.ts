import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

import account from "./modules/account";
import user from "./modules/user";
import show from "./modules/show";

const vuexLocal = new VuexPersistence({
  reducer: (state: any) => ({
    account: state.account,
    user: state.user,
    show: state.show,
  }),
  storage: window.sessionStorage,
});

export default createStore({
  modules: {
    account,
    user,
    show,
  },
  plugins: [vuexLocal.plugin],
});
