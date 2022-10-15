const getHash = () => { 
  return [location.hash.toLocaleLowerCase()
          .split('#').filter(el => el != '#').join('')
          .split('/').filter(el => el != '') , 
          location.hash.toLocaleLowerCase().split('#').filter(el => el != '#').join('')]
}

export default getHash