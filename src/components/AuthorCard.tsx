
import { User, Book, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AuthorCardProps {
  name: string;
  avatar: string;
  bio: string;
  booksCount: number;
  totalViews: number;
  specialty: string;
}

const AuthorCard = ({ name, avatar, bio, booksCount, totalViews, specialty }: AuthorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <img 
          src={avatar} 
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-amber-600 text-sm mb-2">{specialty}</p>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{bio}</p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center space-x-1">
              <Book className="h-4 w-4" />
              <span>{booksCount}권</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{totalViews.toLocaleString()}회</span>
            </div>
          </div>
          
          <Button size="sm" variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50">
            작가 보기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
