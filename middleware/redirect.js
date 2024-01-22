export default function ({ route, redirect }) {
  // redirect root path / to /user-profile
  if (route.path === '/') redirect('/user-profile')

  if (route.path === '/user-profile') redirect('/user-profile/profile/personalinfo')
}
