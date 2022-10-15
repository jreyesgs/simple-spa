import Header from "../templates/Header"
import Home from "../pages/Home"
import Character from "../pages/Character"
import CharacterDetail from "../pages/CharacterDetail"
import resolveRoutes from "../utils/resolveRoutes"
import About from "../pages/About"

const routes = {
  '/' : Home,
  '/:id': Character,
  '/about' : About,
  '/character/:id' : Character,
  '/character/:id/detail/:fase' : CharacterDetail,
  '/contact' : 'Contact'
}

const router = async () => {
  const $header = null || document.getElementById('header')
  const $content = null || document.getElementById('content')

  $header.innerHTML = await Header()

  const [render, params] = await resolveRoutes(routes)

  $content.innerHTML = render(params)

  
}

export default router