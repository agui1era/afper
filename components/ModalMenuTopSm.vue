<template>
    <section>
        <div class="container">
            <section class="modal-form">
                <div class="buttons">
                    
              <a  @click="isCardModalActive = true" href="#" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <div class="menu-lbl"> Menú</div>   
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
                </div>
                <b-modal :active.sync="isCardModalActive" scroll="keep" full-screen>
                    <form action="" class="form-modal">
                        <div class="modal-card" style="width: auto">
                            <header class="modal-card-head columns">
                                <table class="modal-header-table">
                                    <div style="height:40px"></div>
                                </table>   
                             </header>
                            <b-menu>
                              <b-menu-list>
                                <b-menu-item  label="¿Qué es Chile Atiende?"></b-menu-item>
                                <b-menu-item :active="isActive" expanded>
                                  <template slot="label" slot-scope="props">
                                    Red de atención
                                    <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                                  </template>
                                  <b-menu-item label="Formulario de contacto"></b-menu-item>
                                  <b-menu-item label="Facebook"></b-menu-item>
                                  <b-menu-item label="Twitter"></b-menu-item>
                                  <b-menu-item label="Instagram"></b-menu-item>
                                  <b-menu-item label="Sucursales"></b-menu-item>
                                  <b-menu-item label="Oficinas móviles"></b-menu-item>
                                  <b-menu-item label="Atención telefónica"></b-menu-item>
                                </b-menu-item>
                                <b-menu-item  label="Preguntas frecuentes"></b-menu-item>
                              </b-menu-list>
                            </b-menu>                            
                        </div>
                    </form>
                </b-modal>
            </section>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                ModalA: false,
                isCardModalActive: false,
                isActive: false
            }
        }
    }
</script>