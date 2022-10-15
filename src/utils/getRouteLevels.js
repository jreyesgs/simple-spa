const getRouteLevels = (route) => { 
  const levels = route.toLocaleLowerCase().split('/').filter(el => el != '')
  return levels ? levels : ['/']
}

export default getRouteLevels