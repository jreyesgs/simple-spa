import getHash from "./getHash"
import getRouteLevels from "./getRouteLevels"
import Error404 from "../pages/Error404"
const resolveRoutes = (routes) => {
  let params = null

  const [hash, fullHash] = getHash()

  for (const property in routes) {
    if(hash.length == 0){
      return [routes[`/`], params]
    }
    
    if (routes[fullHash]){
      return [routes[fullHash], params]
    }
    
    const levels = getRouteLevels(property)

    if (levels.length === hash.length) {

      let isParam = false
      let params = {}
      const match = levels.map((el, index) => {
        if (hash.includes(el)) {
          return true
        } else {
          if (el[0] === ':') {
            isParam = true
            return {[el.slice(1)]: hash[index]}
          } else {
            return [Error404, params]
          }
        }
      }).filter(el => el != true)
      console.log('match', match)
      if (isParam) {
        return [routes[property], match]
      }
      console.log('Pero tienen el mismo numero de niveles', match)
    }
    
    
  }
  return [Error404, params]
}

export default resolveRoutes