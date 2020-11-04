import cookies from 'js-cookie';

export const state = () => ({
  // AUTH STATES
  token: null,
  redirectUrl: null,

  // STJ STATES
  stepStj: 0,
  persona: {
            nombres: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            rut: "",
            fechaNac: 0,
            edad: 0,
            telefono: "",
            correo: "",
            direccion: { calle: "",
                         numero: "",
                         poblacion: "",
                         block: "",
                         depto: "",
                         regionId: "",
                         ciudad: "",
                         comunaId: ""
                        }
  },        
  empleadores: [],
  empleador: {  
                nombre: null,
                rut: null,
                telefono: null,
                correo: null,
                rutAfp: null,
                direccion: { calle: null,
                             numero: null,
                             oficina: null,
                             regionId: null,
                             ciudad: null,
                             comunaId: null
                           }
  },
  regiones: [
              {
                id: "",
                nombre: ""
              }
  ],
  modalEmpleadorActive: false,
  previsionPersona: {
                      mutual: {id: "", nombre: ""},
                      salud: {id: "", nombre: ""},
                      afp: {id: "", nombre: ""}
                    },
  comuna: "",
  resumenSolicitud: {
                      codRes: 0,
                      estadoSolicitud: 0,
                      idSolicitud: 0,
                      fechaIngreso: 0,
                      fechaResolucion: 0
                    }
    
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },

  REMOVE_TOKEN(state) {
    state.token = null;
  },

  SET_URL(state, url){
    state.redirectUrl = url;
  },

  // STJ COMMITS
  SET_STEP_STJ(state, step){
    state.stepStj = step;
  },

  SET_EMPLEADORES(state, empleadores){
    state.empleadores = empleadores;
  },

  AGG_EMPLEADOR(state, empleador) {
    state.empleadores.push(empleador);
  },

  UPD_EMPLEADOR(state, empleador) {
    state.empleadores.splice(empleador.index, 1);
    state.empleadores.push(empleador.empleador);
  },

  DELETE_EMPLEADOR(state, empleador) {
    const index = state.empleadores.map(function(e) { 
                    return e.rut; 
                  }).indexOf(empleador.rut);
    state.empleadores.splice(index, 1);
  },

  SET_EMPLEADOR(state, empleador){
    state.empleador = empleador;
  },

  SET_PERSONA(state, persona){
    state.persona = persona;
  },

  SET_REGIONES(state, regiones){
    state.regiones = regiones;
  },

  CHANGE_MODAL_EMPLEADOR_ACTIVE(state, estado) {
    state.modalEmpleadorActive = estado;
  },

  SET_PREVISION(state, prevision) {
    state.previsionPersona[prevision.tipo] = {id: prevision.id, nombre: prevision.nombre};
  },

  SET_COMUNA(state, comuna) {
    state.comuna = comuna;
  },

  SET_RESUMEN_SOLICITUD(state, resumen) {
    state.resumenSolicitud = resumen;
  }

};

export const actions = {

  setRedirectUrl({commit}, url) {
    const expiryTime =(1 / 1440) * 5;  //por defecto son dias partimos por numero de minutos y multiplicamos
    cookies.set('redirect-url', url, {expires: expiryTime});
    commit('SET_URL', url);
  },

  setToken({commit}, {token, expiresIn}) { 
    this.$axios.setToken(token, 'Bearer');
    const expiryTime = new Date(new Date().getTime() + expiresIn * 1000);
    cookies.set('x-access-token', token, {expires: expiryTime});
    commit('SET_TOKEN', token);
  },

  async refreshToken({dispatch}) {
    const {token, expiresIn} = await this.$axios.$post('refresh-token');
    dispatch('setToken', {token, expiresIn});
  },

  logout({commit}) {
    this.$axios.setToken(false);
    cookies.remove('x-access-token');
    commit('REMOVE_TOKEN');
  }
};

export const getters = {
  getPersona: (state) => {
    return state.persona;
  } 
}