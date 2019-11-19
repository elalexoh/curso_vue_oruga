import InicioComponent from './components/inicio.vue'
//import UsuariosComponent from './components/usuarios.vue'
import InfoUsuario from './components/InfoUsuario.vue'

//este componente se cargara cuando sea necesario (lazyloading)
const UsuariosComponent = resolve => {
  require.ensure(['./components/usuarios.vue'], () => {
    resolve(require('./components/usuarios.vue'));
  })
}
export const rutas = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: '/usuarios/',
    component: UsuariosComponent,
    name: 'usuarios'
  },
  {
    path: '/usuarios/:id',
    component: InfoUsuario,
    name: 'infoUsuario'
  },
  {
    path: '/users',
    redirect: '/usuarios'
  },
  {
    path: '*',
    redirect: '/'
  }
]