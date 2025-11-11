import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import React from 'react';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful sign-up and login
    navigate('/dashboard');
  };

  return (
    <AuthLayout title="Create your FinWise account">
      <form className="space-y-6" onSubmit={handleSignUp}>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-text-secondary mb-2">
            Full Name
          </label>
          <Input id="fullName" name="fullName" type="text" autoComplete="name" required placeholder="John Doe" />
        </div>

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
          <Input id="password" name="password" type="password" autoComplete="new-password" required placeholder="••••••••" />
        </div>

        <div>
          <Button type="submit">Create Account</Button>
        </div>
      </form>
      <p className="mt-6 text-center text-sm text-text-tertiary">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-primary hover:underline">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUpPage;
