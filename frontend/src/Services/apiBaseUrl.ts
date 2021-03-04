/**Function to store apiBaseUrl to local storage  */
export const setBaseApiBaseUrlToHost = ():void => {
  const apibaseUrl = '/'
  sessionStorage.setItem('apiBaseUrl',apibaseUrl)
}

export const resetBaseApiBaseUrl = ():void => {
  sessionStorage.removeItem('apiBaseUrl')
}