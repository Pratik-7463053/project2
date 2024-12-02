import React from 'react';
import { ChefHat, Utensils, Clock } from 'lucide-react';
import ChefCard from '../components/ChefCard';

export default function Home() {
  const features = [
    {
      icon: <ChefHat className="h-8 w-8 text-primary" />,
      title: "Expert Home Chefs",
      description: "Connect with skilled local cooks"
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: "Authentic Cuisine",
      description: "Taste homemade specialties"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Fresh & On-Time",
      description: "Quick delivery to your doorstep"
    }
  ];

  const sampleChefs = [
    {
      id: '1',
      name: 'Priya Sharma',
      gender: 'female' as const,
      rating: 4.8,
      area: 'Indirapuram, Ghaziabad',
      specialities: ['North Indian', 'Street Food', 'Desserts'],
      isVerified: true,
    },
    {
      id: '2',
      name: 'Meera Patel',
      gender: 'female' as const,
      rating: 4.9,
      area: 'Vaishali, Ghaziabad',
      specialities: ['Gujarati', 'South Indian', 'Healthy Food'],
      isVerified: true,
    }
  ];

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-white bg-clip-text">
          Discover Homemade Delights
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Connect with local home chefs for fresh, authentic meals
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="glass-effect rounded-xl p-6 text-center card-hover">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Featured Chefs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleChefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef} />
          ))}
        </div>
      </section>

      <section className="glass-effect rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Join Our Kitchen Community
        </h2>
        <p className="text-gray-400 mb-6">
          Start your culinary journey and share your passion for cooking
        </p>
        <button className="btn-primary">
          Become a Chef
        </button>
      </section>
    </div>
  );
}