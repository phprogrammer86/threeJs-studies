import './style.css'
import * as THREE from 'three'
import { Mesh } from 'three'

const scene = new THREE.Scene()

//vamos criar um mesh, que é uma combinacao de geometria material para criar um elemento em 3d
// vamos criar um cubo vermelho
// precisamos criar a geometria do material e depois guardar em outra variavel as caracteristicas dele como a cor

/* aqui criamos um cubo isolado e separado, esse codigo sera comentado para criarmos um grupo de cubos para estudo
const geometry = new THREE.BoxGeometry(1, 1, 1) //terá tres parametros que sao os tamanhos dos lados
const material = new THREE.MeshBasicMaterial({ color: 'red'}) // variavel material guarda as caracteristicas
const cube = new THREE.Mesh(geometry, material) //o nome da variavel pode ser qualquer um..usa-se muito const mesh..
cube.position.set(3, 3, 1) // posicionando..seta as posicoes do elemento em x, y e z nessa ordem

cube.scale.set(2, 1, 0.5) //scala, tamanho dos objetos
cube.rotation.y = Math.PI*4 //Pi é uma meia rotacao completa
cube.rotation.z = 4 // rotacao do objeto..

scene.add( cube );
*/

//axishelper, é uma ajuda para visualizar a posicao do 3d na tela
const axis = new THREE.AxesHelper()
scene.add( axis )

cube.position.normalize()

const sizes = {
    width: 800,
    heigth: 600
}

//agora precisamos da camera, ou, o ponto de vista
//precisamos de parametros, um é o campo de visao ou field of view, definimos 75 graus e o outro é o tamanho da tela que definimos acima
const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.heigth)
camera.position.z = 3 // por enquanto somente com esse vemos a face sem ver os outros lados do cubo
camera.position.y = 1
camera.position.x = 1
scene.add( camera )

camera.lookAt( cube.position ) // seta a camera para ficar olhando para o objeto, assim muda a camera quando o objeto move

//agora é jogar tudo em um canvas
//criar o render

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
// aqui deu um erro no chrome que foi corrigido no chrome://flags pesquisando por backend 
//refazendo o tamanho do renderer com o metodo setSize(..)
renderer.setSize( sizes.width, sizes.heigth )

//com o renderer aumentado é hora de chamar o metodo render() para 'tirar a foto' e aparecer o obj na tela
renderer.render(scene, camera)
//agora que foi renderizado ainda nao aparece na tela pois a camera esta dentro do objeto por default
//precisamos posicionar a camera na posicao z para sair de muito perto do objeto
//vamos posicionar depois de instanciar a variavel camera lá em cima
