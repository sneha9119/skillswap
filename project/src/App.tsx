import React, { useState } from 'react';
import { BookOpen, Video, MessageSquare, Trophy, Mail, Lock, User, ArrowRight } from 'lucide-react';

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  if (showAuth) {
    return <AuthPage isSignUp={isSignUp} onToggle={() => setIsSignUp(!isSignUp)} onClose={() => setShowAuth(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Learn. Teach. Connect.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Join our community of lifelong learners. Share your expertise and acquire new skills through meaningful connections.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => {
                  setIsSignUp(true);
                  setShowAuth(true);
                }}
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Join Now
              </button>
              <button className="px-8 py-3 border-2 border-violet-600 text-violet-600 rounded-full hover:bg-violet-50 transition-colors">
                Explore Skills
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="People collaborating"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose SkillSwap?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-blue-600" />}
              title="Skill Matching"
              description="Find the perfect learning partner based on your interests and expertise."
            />
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8 text-blue-600" />}
              title="Chat & Video Calls"
              description="Connect seamlessly through integrated messaging and video calling."
            />
            <FeatureCard
              icon={<Trophy className="w-8 h-8 text-blue-600" />}
              title="Earn Badges"
              description="Get recognized for your contributions and progress in the community."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of users who are already sharing and learning new skills.
          </p>
          <button 
            onClick={() => {
              setIsSignUp(true);
              setShowAuth(true);
            }}
            className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}

function AuthPage({
  isSignUp,
  onToggle,
  onClose,
}: {
  isSignUp: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, name });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-gray-600 mt-2">
            {isSignUp ? 'Start your learning journey today' : 'Sign in to continue learning'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={onToggle}
              className="ml-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;
