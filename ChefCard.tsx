import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import type { Chef } from '../types';

interface ChefCardProps {
  chef: Chef;
}

export default function ChefCard({ chef }: ChefCardProps) {
  return (
    <div className="glass-effect rounded-xl overflow-hidden card-hover">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{chef.name}</h3>
          {chef.isVerified && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-100">
              Verified
            </span>
          )}
        </div>
        <div className="mt-2 flex items-center">
          <Star className="h-5 w-5 text-yellow-500 fill-current" />
          <span className="ml-1 text-sm text-gray-300">{chef.rating}</span>
        </div>
        <div className="mt-2 flex items-center text-gray-400">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{chef.area}</span>
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {chef.specialities.map((speciality) => (
              <span
                key={speciality}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary"
              >
                {speciality}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}