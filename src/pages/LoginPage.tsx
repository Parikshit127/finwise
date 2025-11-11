import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import React from 'react';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login
    navigate('/dashboard');
  };

  return (
    <AuthLayout title="Log in to FinWise">
      <form className="space-y-6" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
            Email address
          </label>
          <Input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
        </div>

        <div>
           <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">
            Password
          </label>
          <Input id="password" name="password" type="password" autoComplete="current-password" required placeholder="••••••••" />
        </div>

        <div>
          <Button type="submit">Log In</Button>
        </div>
      </form>
      <p className="mt-6 text-center text-sm text-text-tertiary">
        Don't have an account?{' '}
        <Link to="/signup" className="font-medium text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
