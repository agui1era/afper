export default function ({ store, redirect , route}) {
 
    const param = parseInt(route.params.num, 10);

        switch (param) {
            case 1:
                break;
            case 2:
                if (!store.state.formValid) {
                    return redirect('/tramites/5220/1');
                }
                break;
            case 3:
                if (!store.state.formConfirm) {
                    return redirect('/tramites/5220/2');
                }
                break;
            default:
                return redirect('/tramites/5220/1');
                break;
        }
    
  } 