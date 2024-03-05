import dogConfused from '../assets/dogConfused.gif';

const ErrorPage = () => {
  return (
    <div id="error-page" className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
      <h1 className="font-bold text-7xl">404</h1>
      <br />
      <img src={dogConfused} alt="Confused Dog" className="rounded-30 shadow-xl shadow-gray-400" />
      <br />
      <p className="font-bold text-2xl">Oh, man. How did you end up here?</p>
      </div>
      <br />
      <a href="https://main--boisterous-dango-5d57d9.netlify.app/" className="bg-[#001b5e] text-white mt-4 w-fell p-7 rounded-lg text-2xl">
            Back To Home
        </a>
    </div>
  );
}

export default ErrorPage;
