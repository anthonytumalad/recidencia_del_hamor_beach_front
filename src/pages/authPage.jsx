import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Import Eye and EyeOff for toggle
import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa'; // Import icons


const AnantaraForms = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState(''); // Added lastname state
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', firstname: '', lastname: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: '', password: '', firstname: '', lastname: '' };

    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (!firstname) newErrors.firstname = 'First Name is required'; // Fixed message
    if (!lastname) newErrors.lastname = 'Last Name is required'; // Fixed message

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password && !newErrors.firstname && !newErrors.lastname) {
      console.log('Signing up with:', { email, password, firstname, lastname });
    }
  };
  
  return (
    <div className="max-w-3xl my-20 mx-auto shadow-lg border border-gray-200">
      {/* Tab Headers */}
      <div className="flex text-center">
        <button 
          className={`w-1/2 py-3 font-thin leading-[1.2em] cursor-pointer tracking-[.03em]  uppercase font-raleway ${activeTab === 'login' ? 'bg-[#2A3B3B] text-white font-bold' : 'bg-gray-200 text-gray-700' }`}
          onClick={() => setActiveTab('login')}
        >
          LOG IN
        </button>
        <button 
          className={`w-1/2 py-3 font-thin leading-[1.2em] cursor-pointer tracking-[.03em]  uppercase font-raleway ${activeTab === 'signup' ? 'bg-[#2A3B3B] text-white font-bold' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('signup')}
        >
          SIGN UP
        </button>
      </div>
      
      {/* Login Form */}
      {activeTab === 'login' && (
        <div className="bg-white p-8">
            <h2 className="text-center text-[20px] text-[#2A3B3B] tracking-[.07em] font-bold font-raleway mb-10">
            LOG IN TO Recidencia Del Hamor Beach Front
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:space-x-4 font-raleway">
                <div className="md:w-1/2 mb-6">
                    <div className="flex items-center mb-2 space-x-2">
                    <label className="text-[#2A3B3B] tracking-[.07em]">
                        Email: <span className="text-red-500">*</span>
                    </label>
                    {errors.email && (
                        <span className="text-red-500 text-sm tracking-[.07em]">{errors.email}</span>
                    )}
                    </div>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="md:w-1/2 mb-6">
                    <div className="flex items-center mb-2 space-x-2">
                    <label className="text-[#2A3B3B] tracking-[.07em]">
                        Password: <span className="text-red-500">*</span>
                    </label>
                    {errors.password && (
                        <span className="text-red-500 text-sm tracking-[.07em]">{errors.password}</span>
                    )}
                    </div>
                    <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'} // Toggle type based on state
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    <button
                        type="button" // Prevent form submission
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                        {showPassword ? (
                        <EyeOff size={20} />
                        ) : (
                        <Eye size={20} />
                        )}
                    </button>
                    </div>
                    <div className="text-right mt-4">
                    <a href="#" className="text-[#2A3B3B] tracking-[.07em] hover:underline">
                        Forgot your password?
                    </a>
                    </div>
                </div>
                </div>

                <div className="flex justify-center mt-6 mb-8 font-raleway tracking-[.07em]">
                    <button
                    type="submit"
                    className="bg-[#518181] hover:bg-[#518181] text-white py-2 px-25 rounded flex items-center cursor-pointer"
                >
                    LOG IN
                    </button>
                </div>
            </form>

            <div className="relative text-center mb-8">
                <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200"></div>
                <span className="relative bg-white px-4 text-gray-500">OR</span>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-8 font-oswald">
                <button className="bg-[#4267B2] text-[14px] font-bold text-white p-2 rounded flex items-center justify-center md:flex-1 uppercase">
                <FaFacebook className="w-5 h-5 mr-2" />
                Log In with Facebook
                </button>

                <button className="bg-black text-[14px] font-bold text-white p-2 rounded flex items-center justify-center md:flex-1">
                <FaApple className="w-5 h-5 mr-2" />
                LOG IN WITH APPLE ID
                </button>

                <button className="border text-[#2A3B3B] text-[14px] font-bold border-gray-300 p-2 rounded flex items-center justify-center md:flex-1">
                <FaGoogle className="w-5 h-5 mr-2" />
                Sign in with Google
                </button>
            </div>

            <div className="text-right text-[13px] font-normal text-gray-500">
                This site is protected by hCaptcha and its{' '}
                <a href="#" className="text-[#2A3B3B] hover:underline font-bold">
                Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#2A3B3B] font-bold hover:underline">
                Terms of Service
                </a>{' '}
                apply.
            </div>
        </div>
      )}
      
      {/* Signup Form */}
      {activeTab === 'signup' && (
        <div className="bg-white p-8 font-raleway">
        <h2 className="text-center text-[20px] text-[#2A3B3B] tracking-[.07em] font-bold mb-4">
          SIGN UP FOR Residencia Del Hamor Beach Front
        </h2>

        <p className="text-[14px] leading-[1.50em] text-[#2A3B3B] tracking-[.07em] mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique cum nisi atque blanditiis,
          voluptatum tenetur labore, distinctioLorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim
          debitis, quam deserunt doloremque suscipit recusandae mollitia eligendi laboriosa
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-[#2A3B3B] tracking-[.07em] mb-2">
                Preferred language: <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>English</option>
              </select>
            </div>

            <div>
              <label className="block text-[#2A3B3B] tracking-[.07em] mb-2">Title:</label>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Miss.</option>
                <option>Mrs.</option>
              </select>
            </div>

            <div>
              <div className="flex items-center mb-2 space-x-2">
                <label className="text-[#2A3B3B] tracking-[.07em]">
                  First Name: <span className="text-red-500">*</span>
                </label>
                {errors.firstname && (
                  <span className="text-red-500 text-sm tracking-[.07em]">{errors.firstname}</span>
                )}
              </div>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <div className="flex items-center mb-2 space-x-2">
                <label className="text-[#2A3B3B] tracking-[.07em]">
                  Last Name: <span className="text-red-500">*</span>
                </label>
                {errors.lastname && (
                  <span className="text-red-500 text-sm tracking-[.07em]">{errors.lastname}</span>
                )}
              </div>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)} // Added onChange for lastname
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <div className="flex items-center mb-2 space-x-2">
                <label className="text-[#2A3B3B] tracking-[.07em]">
                  Email: <span className="text-red-500">*</span>
                </label>
                {errors.email && (
                  <span className="text-red-500 text-sm tracking-[.07em]">{errors.email}</span>
                )}
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Added onChange for email
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <div className="flex items-center mb-2 space-x-2">
                <label className="text-[#2A3B3B] tracking-[.07em]">
                  Password: <span className="text-red-500">*</span>
                </label>
                {errors.password && (
                  <span className="text-red-500 text-sm tracking-[.07em]">{errors.password}</span>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Added onChange for password
                  className="w-full border border-gray-300 p-2 rounded pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                Minimum 8 characters with at least one number and at least one symbol
              </p>
            </div>
          </div>

          <div className="mb-4">
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-2" />
              <span className="text-[14px] leading-[1.50em] text-[#2A3B3B] tracking-[.07em]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo excepturi tempora? Officia harum
                placeat totam. Accusamus animi totam quo reiciendis illum nulla rerum ea, veritatis illo. Numquam, rem
                recusandae?
              </span>
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 mr-2" />
              <span className="text-[14px] leading-[1.50em] text-[#2A3B3B] tracking-[.07em]">
                I would like to receive emails about GHA DISCOVERY promotions and special offers. I can manage my email
                preferences or unsubscribe at any time from future emails as per the{' '}
                <a href="#" className="text-neutral-500 hover:underline">
                  Privacy Statement
                </a>
                .
              </span>
            </label>
          </div>

          <div className="mb-6 text-[14px] leading-[1.50em] text-[#2A3B3B] tracking-[.07em]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur porro, saepe.
          </div>

          <div className="flex justify-center mt-8 mb-8 font-raleway tracking-[.07em]">
            <button
              type="submit"
              className="bg-[#518181] hover:bg-[#518181] text-white py-2 px-25 rounded flex items-center cursor-pointer uppercase"
            >
              SIGN UP
            </button>
          </div>
        </form>

        <div className="relative text-center mb-8">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200"></div>
          <span className="relative bg-white px-4 text-gray-500">OR</span>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-8 font-oswald">
          <button className="bg-[#4267B2] text-[14px] font-bold text-white p-2 rounded flex items-center justify-center md:flex-1 uppercase">
            <FaFacebook className="w-5 h-5 mr-2" />
            Log In with Facebook
          </button>

          <button className="bg-black text-[14px] font-bold text-white p-2 rounded flex items-center justify-center md:flex-1">
            <FaApple className="w-5 h-5 mr-2" />
            LOG IN WITH APPLE ID
          </button>

          <button className="border text-[#2A3B3B] text-[14px] font-bold border-gray-300 p-2 rounded flex items-center justify-center md:flex-1">
            <FaGoogle className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </div>

        <div className="text-right text-[13px] font-normal text-gray-500">
                This site is protected by hCaptcha and its{' '}
                <a href="#" className="text-[#2A3B3B] hover:underline font-bold">
                Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#2A3B3B] font-bold hover:underline">
                Terms of Service
                </a>{' '}
                apply.
        </div>
      </div>
      )}
    </div>
  );
}

export default AnantaraForms;