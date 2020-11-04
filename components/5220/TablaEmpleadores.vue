<template>
  <section class="container form-cha">
      <b-tabs class="tabla-tabs">
        <b-tab-item label="Table">
          <b-table
            :data="empleadores"
            :columns="columns"
            :selected.sync="selected"
            focusable
          >
            <template slot-scope="props">
              <b-table-column field="nombre" style="max-width:200px;">
                {{ props.row.nombre }}
              </b-table-column>
              <b-table-column field="rut">
                {{ formatRut(props.row.rut) }}
              </b-table-column>
              <b-table-column field="correo">
                {{ props.row.correo }}
              </b-table-column>
              <b-table-column field="Opciones">
                <a class="link" @click="editarEmpleador(props.row)">Editar</a> |
                <a class="link" @click="eliminarEmpleador(props.row)" v-if="$store.state.resumenSolicitud.codRes !== 5">Eliminar</a>
              </b-table-column>
            </template>
          </b-table>
        </b-tab-item>
        <b-tab-item label="Selected">
          <pre>{{ selected }}</pre>
        </b-tab-item>
      </b-tabs>
  </section>
</template>
<style></style>

<script>
export default {
  data() {

    return {
      selected: this.empleadores ? this.empleadores[1] : null,
      columns: [
        {
          field: "nombre",
          label: "Razón social"
        },
        {
          field: "rut",
          label: "RUN"
        },
        {
          field: "correo",
          label: "Email"
        },
        {
          field: "Opciones",
          label: "Opciones"
        }
      ]
    };
  },
  computed: {
    empleadores() {
      return this.$store.state.empleadores;
    }
  },  
  methods: {

    formatRut(rut) {
      let clearRut = typeof rut === 'string' ? rut.replace(/[^0-9kK]+/g, '').toUpperCase() : '';

      let result = clearRut.slice(-4, -1) + '-' + clearRut.substr(clearRut.length - 1)
      for (let i = 4; i < clearRut.length; i += 3) {
          result = clearRut.slice(-3 - i, -i) + '.' + result
      }
      return result;
    },
    editarEmpleador(empleador) {
      this.$store.commit('SET_EMPLEADOR', empleador);
      this.$store.commit('CHANGE_MODAL_EMPLEADOR_ACTIVE', true);
    },
    eliminarEmpleador(empleador) {

      this.$buefy.dialog.confirm({
          title: 'Eliminar empleador',
          message: '¿Esta seguro que desea <b>eliminar</b> este empleador?',
          confirmText: 'Eliminar',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => {
            this.$store.commit('DELETE_EMPLEADOR', empleador);
            this.$buefy.toast.open('Empleador eliminado')
          }
      }); 
    }
  }
};
</script>
