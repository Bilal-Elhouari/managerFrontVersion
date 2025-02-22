export default function LoginPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="p-6 text-center bg-blue-50">
            <a href="/">
             <img
                src="/logo/logoblack.webp"
                alt="Logo"
                className="mx-auto max-h-20 object-contain"
              />
            </a>
            <h2 className="mt-4 text-2xl font-bold text-gray-800">Se connecter à votre compte</h2>
          </div>
  
          <form className="p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                placeholder="Votre email"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <input
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                placeholder="Votre mot de passe"
              />
            </div>
  
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember-me-checkbox"
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="remember-me-checkbox" className="text-gray-700">
                  Se rappeler de moi
                </label>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Mot de passe oublié ?
              </a>
            </div>
  
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Se connecter
            </button>
  
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="px-3 text-gray-500 text-sm">ou</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
  
              <button className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                <span>Continuer avec LinkedIn</span>
              </button>
  
              <button className="w-full flex items-center justify-center space-x-3 py-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition duration-200">
                <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_17_40)">
                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Continuer avec Google</span>
              </button>
            </div>
  
            <p className="text-center text-sm text-gray-600">
              Vous n&apos;avez pas de compte ?
              <a href="/register" className="font-semibold text-blue-600 hover:text-blue-800 ml-2">
                Créer compte
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }