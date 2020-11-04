export default function ({ store, redirect , route}) {
    store.dispatch('setRedirectUrl', route.path);
    
    if (!store.state.token) {
      return redirect('/login/claveunica');
    }
  } 