
import { useState } from 'react';
import { Star, Eye, Bookmark, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  views: number;
  points: number;
  isBestseller?: boolean;
  isBookmarked?: boolean;
  category: string;
  description: string;
}

const BookCard = ({ 
  title, 
  author, 
  cover, 
  rating, 
  views, 
  points, 
  isBestseller, 
  isBookmarked, 
  category,
  description 
}: BookCardProps) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked || false);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isBestseller && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white">
            <Award className="h-3 w-3 mr-1" />
            베스트셀러
          </Badge>
        )}
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Bookmark 
            className={`h-4 w-4 ${bookmarked ? 'text-amber-500 fill-current' : 'text-gray-600'}`}
          />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Eye className="h-3 w-3" />
            <span>{views.toLocaleString()}</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-amber-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-2">{author}</p>
        
        <p className="text-gray-500 text-xs mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-amber-600">{points} 포인트</span>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
              읽기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
