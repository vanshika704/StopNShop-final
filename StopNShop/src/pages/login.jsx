import { useState } from 'react';
import { useLoginMutation } from '../services/hooks/auth/UseAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginMutation = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.info('⏳ Logging in...', { position: 'bottom-right', theme: 'dark' });

    try {
      const data = { email, password };
      const response = await loginMutation.mutateAsync(data);

      localStorage.setItem('token', response.token);

      toast.success('🎉 Login successful! Redirecting...', { position: 'bottom-right', theme: 'dark' });

      navigate('/page1'); // Redirect to dashboard or another page
    } catch (error) {
      toast.error(`❌ Login failed: ${error.response?.data?.message || error.message}`, { position: 'bottom-right', theme: 'dark' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-3xl font-semibold text-center mb-8">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
