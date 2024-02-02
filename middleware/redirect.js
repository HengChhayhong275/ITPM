export default function ({ route, redirect }) {
  // redirect root path / to /user-profile
  // if (route.path === '/') redirect('/login')
  if (route.path === '/') redirect('/user-profile')

  if (route.path === '/user-profile')
    redirect('/user-profile/profile/personalinfo')

  if (
    route.path === '/user-profile/storage' ||
    route.path === '/user-profile/storage/'
  )
    redirect('/user-profile/storage/my-drive')
  // if (route.path === '/user-profile') redirect('/user-profile/profile/personalinfo')
}



