/* eslint-disable no-console */
export default function ({ app, redirect, $auth, route }) {
  // If the user is not authenticated
  console.log('Trigereereere')
  console.log($auth);
  if (!$auth.loggedIn) {
    const REDIRECT_URL = encodeURIComponent('/login?redirect=' + route.fullPath)

    console.log(REDIRECT_URL)
    console.log('Trigereereere')
    return redirect(app.localePath(REDIRECT_URL))
  }
}



