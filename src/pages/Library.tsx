
import { useState } from 'react';
import { Search, Filter, Star, Eye, Bookmark, Clock, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Layout from '@/components/Layout';
import BookCard from '@/components/BookCard';

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Mock user data
  const userPoints = 4500;
  const subscriptionStatus = 'active'; // 'active', 'inactive', 'trial'
  
  // Mock books data
  const books = [
    {
      id: '1',
      title: '디지털 시대의 인문학',
      author: '김작가',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
      rating: 4.8,
      views: 15420,
      points: 500,
      isBestseller: true,
      isBookmarked: true,
      category: '인문학',
      description: '디지털 혁명 시대에 인문학적 사고가 어떤 의미를 갖는지 탐구합니다.',
      readingProgress: 65
    },
    {
      id: '2',
      title: '한국의 전통 건축',
      author: '박건축',
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      rating: 4.6,
      views: 8750,
      points: 300,
      category: '건축',
      description: '한국 전통 건축의 아름다움과 철학을 현대의 시각으로 재해석합니다.',
      readingProgress: 0
    },
    {
      id: '3',
      title: '미래의 도시',
      author: '이미래',
      cover: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop',
      rating: 4.7,
      views: 12300,
      points: 400,
      isBestseller: true,
      category: '과학',
      description: '스마트 시티와 지속가능한 도시 개발의 미래를 그려봅니다.',
      readingProgress: 100
    },
    {
      id: '4',
      title: '음식의 철학',
      author: '최요리',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
      rating: 4.5,
      views: 6890,
      points: 250,
      category: '요리',
      description: '음식을 통해 바라본 문화와 인간의 관계를 탐구하는 에세이입니다.',
      readingProgress: 30
    },
    {
      id: '5',
      title: '현대 미술의 이해',
      author: '정미술',
      cover: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=600&fit=crop',
      rating: 4.4,
      views: 5620,
      points: 350,
      category: '예술',
      description: '복잡하고 다양한 현대 미술의 세계를 쉽게 풀어낸 입문서입니다.',
      readingProgress: 0
    },
    {
      id: '6',
      title: '인공지능과 윤리',
      author: '한기술',
      cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop',
      rating: 4.9,
      views: 18900,
      points: 600,
      isBestseller: true,
      category: '기술',
      description: 'AI 시대에 꼭 필요한 윤리적 사고와 미래 사회의 모습을 제시합니다.',
      readingProgress: 0
    }
  ];

  const categories = ['전체', '인문학', '과학', '기술', '예술', '요리', '건축'];
  const sortOptions = [
    { value: 'popular', label: '인기순' },
    { value: 'recent', label: '최신순' },
    { value: 'rating', label: '평점순' },
    { value: 'views', label: '조회수순' }
  ];

  const readingBooks = books.filter(book => book.readingProgress > 0 && book.readingProgress < 100);
  const completedBooks = books.filter(book => book.readingProgress === 100);
  const bookmarkedBooks = books.filter(book => book.isBookmarked);
  const recommendedBooks = books.filter(book => book.isBestseller);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* User Dashboard */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">나의 서재</h1>
                  <p className="text-gray-600">독서 여정을 계속해보세요</p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-amber-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-amber-600">{userPoints.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">보유 포인트</div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {subscriptionStatus === 'active' ? '구독중' : '미구독'}
                    </div>
                    <div className="text-sm text-gray-600">
                      {subscriptionStatus === 'active' ? '무제한 이용' : '포인트 이용'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reading Progress */}
          {readingBooks.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-amber-600" />
                읽고 있는 책
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {readingBooks.map((book) => (
                  <Card key={book.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex space-x-4">
                        <img 
                          src={book.cover} 
                          alt={book.title}
                          className="w-16 h-20 rounded object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1 line-clamp-2">{book.title}</h3>
                          <p className="text-xs text-gray-600 mb-2">{book.author}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span>진행률</span>
                              <span>{book.readingProgress}%</span>
                            </div>
                            <Progress value={book.readingProgress} className="h-2" />
                            <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700">
                              이어서 읽기
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="책 제목, 작가명으로 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="카테고리 선택" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category === '전체' ? 'all' : category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="정렬 기준" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quick Access Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Bookmark className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">북마크</h3>
                <p className="text-2xl font-bold text-amber-600">{bookmarkedBooks.length}</p>
                <p className="text-sm text-gray-600">저장된 책</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Eye className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">완독</h3>
                <p className="text-2xl font-bold text-green-600">{completedBooks.length}</p>
                <p className="text-sm text-gray-600">읽은 책</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">추천</h3>
                <p className="text-2xl font-bold text-blue-600">{recommendedBooks.length}</p>
                <p className="text-sm text-gray-600">맞춤 추천</p>
              </CardContent>
            </Card>
          </div>

          {/* Bestsellers Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="mr-2 h-5 w-5 text-red-500" />
              베스트셀러
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {books.filter(book => book.isBestseller).map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>

          {/* All Books */}
          <div>
            <h2 className="text-xl font-semibold mb-4">전체 도서</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {books.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>

          {/* Subscription CTA */}
          {subscriptionStatus !== 'active' && (
            <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">월 정액 구독으로 무제한 독서하세요</h3>
              <p className="mb-6 opacity-90">월 9,900원으로 모든 책을 자유롭게 읽을 수 있습니다</p>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                구독 시작하기
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Library;
