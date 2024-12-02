import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';

export default function ChefRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    area: '',
    specialities: '',
    experience: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div className="max-w-2xl mx-auto glass-effect rounded-xl p-8">
      <div className="flex items-center space-x-4 mb-8">
        <ChefHat className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold text-white">Chef Registration</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg text-gray-100"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg text-gray-100"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg text-gray-100"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg text-gray-100"
              required
            >
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Service Area
            </label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg text-gray-100"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Cooking Experience (years)
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg text-gray-100"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Specialities (comma-separated)
          </label>
          <textarea
            name="specialities"
            value={formData.specialities}
            onChange={(e) => setFormData({ ...formData, specialities: e.target.value })}
            className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg text-gray-100 h-24"
            required
          />
        </div>

        <button type="submit" className="w-full btn-primary">
          Register as Chef
        </button>
      </form>
    </div>
  );
}