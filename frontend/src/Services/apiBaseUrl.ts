/**Function to store apiBaseUrl to local storage  */
export const setBaseApiBaseUrlToHost = ():void => {
  let apibaseUrl = process.env.HOSTNAME || window.location.host
  console.log(apibaseUrl,process.env.HOSTNAME)
  if((window.location.host.includes('localhost'))){

    apibaseUrl = 'http://localhost:8080'
  }
  sessionStorage.setItem('apiBaseUrl',apibaseUrl)
}

export const resetBaseApiBaseUrl = ():void => {
  sessionStorage.removeItem('apiBaseUrl')
}