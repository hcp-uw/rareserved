import FullDivider from '@/components/FullDivider'
import { login, signup } from './actions'
import NavigationBar from '@/components/NavigationBar'
import PartialDivider from '@/components/PartialDivider'

export default function LoginPage() {
  return (<>
    <NavigationBar/>
    <div id="main">
    <h1>Login</h1>
    <PartialDivider/>
    <form className="text-center">
      <label hidden htmlFor="email">Email:</label>
      <input className="border border-gray border-10 rounded-md mb-5 p-1 w-80 placeholder-black" id="email" placeholder="Email" name="email" type="email" required />
      <br></br>
      <label hidden htmlFor="password">Password:</label>
      <input className="border border-gray border-10 rounded-md mb-5 p-1 w-80 placeholder-black" id="password" placeholder="Password" name="password" type="password" required />
      <br></br>
      <button className="mt-5 p-1 bg-darkblue text-white w-80 rounded-full" formAction={login}>Log in</button>
      {/* <button formAction={signup}>Sign up</button> */}
    </form>
    </div>
  </>)
}