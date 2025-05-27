import expenzoLogo from '../../assets/expenzoLogo.png';
import LayoutBackground from '../../layout/layoutBackground';

function Login() {
  return (
    <div className="main-container relative z-10">
      <LayoutBackground />
      <div className="max-w-md w-full bg-[#1c1c1e] p-10 rounded-lg shadow-lg border border-gray-700">
        <div className="flex justify-center mb-6">
          <img src={expenzoLogo} alt="Expenzo Logo" className="logo" />
        </div>

        <h2 className="text-xl font-semibold text-center text-white mb-6">
          Sign in to your account
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
            <input type="text" placeholder="Enter your username"
              className="w-full px-4 py-2 bg-[#2a2a2e] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input type="password" placeholder="Enter your password"
              className="w-full px-4 py-2 bg-[#2a2a2e] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"/>
          </div>

          <div className="flex justify-end">
            <a href="#" className="green-hyperlink">
              Forgot password?
            </a>
          </div>

          <button type="submit"
            className="w-full green-button">
            Login
          </button>
          <div className="flex justify-center">
            <a href="#" className="green-hyperlink">
              Sign Up/Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
