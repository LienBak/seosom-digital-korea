
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Crown, BookOpen, Users, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import BookCard from '@/components/BookCard';
import AuthorCard from '@/components/AuthorCard';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock data
  const featuredBooks = [
    {
      id: '1',
      title: '디지털 시대의 인문학',
      author: '김작가',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
      rating: 4.8,
      views: 15420,
      points: 500,
      isBestseller: true,
      category: '인문학',
      description: '디지털 혁명 시대에 인문학적 사고가 어떤 의미를 갖는지 탐구합니다.'
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
      description: '한국 전통 건축의 아름다움과 철학을 현대의 시각으로 재해석합니다.'
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
      description: '스마트 시티와 지속가능한 도시 개발의 미래를 그려봅니다.'
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
      description: '음식을 통해 바라본 문화와 인간의 관계를 탐구하는 에세이입니다.'
    },
  ];

  const featuredAuthors = [
    {
      name: '김작가',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      bio: '20년간 인문학 연구에 매진해온 작가로, 복잡한 철학적 개념을 쉽게 전달하는 데 탁월합니다.',
      booksCount: 15,
      totalViews: 245000,
      specialty: '인문학 · 철학'
    },
    {
      name: '박건축',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      bio: '한국 전통 건축 전문가이자 현대 건축가로, 전통과 현대의 조화를 추구합니다.',
      booksCount: 8,
      totalViews: 156000,
      specialty: '건축 · 디자인'
    },
    {
      name: '이미래',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c3584c76?w=200&h=200&fit=crop',
      bio: '도시 계획 전문가로 지속가능한 미래 도시에 대한 비전을 제시합니다.',
      booksCount: 12,
      totalViews: 198000,
      specialty: '도시계획 · 과학'
    },
  ];

  const stats = [
    { icon: BookOpen, label: '등록 도서', value: '2,847권' },
    { icon: Users, label: '활동 작가', value: '1,245명' },
    { icon: TrendingUp, label: '월간 독자', value: '45,230명' },
    { icon: Zap, label: 'AI 커버 생성', value: '18,560개' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredBooks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredBooks.length) % featuredBooks.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-400 via-rose-500 to-pink-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI와 함께하는 
              <span className="block text-pink-100">새로운 출판 경험</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              작가의 창작부터 독자의 독서까지, 디지털 기술로 완성되는 프리미엄 서재
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold">
                <Sparkles className="mr-2 h-5 w-5" />
                무료로 시작하기
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                서재 둘러보기
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                서비스 둘러보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* KT Customer Special Offer */}
      <section className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-center">
            <Crown className="h-5 w-5" />
            <span className="font-semibold">KT 고객 특별 혜택: 가입 시 추가 5,000 포인트 지급!</span>
            <Button size="sm" className="bg-white text-pink-600 hover:bg-gray-100 ml-4">
              확인하기
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-pink-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bestsellers */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">베스트셀러</h2>
            <p className="text-lg text-gray-600">독자들이 사랑하는 인기 도서들</p>
          </div>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredBooks.map((book, index) => (
                  <div key={book.id} className="w-full flex-shrink-0 px-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {featuredBooks.slice(index, index + 4).map((book) => (
                        <BookCard key={book.id} {...book} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Author Spotlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주목받는 작가들</h2>
            <p className="text-lg text-gray-600">창의적인 작품으로 독자들을 사로잡는 작가들을 만나보세요</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAuthors.map((author, index) => (
              <AuthorCard key={index} {...author} />
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">구독 플랜</h2>
            <p className="text-lg text-gray-600">나에게 맞는 독서 플랜을 선택하세요</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Point-based Plan */}
            <Card className="relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">포인트 이용권</h3>
                  <p className="text-gray-600">원하는 책만 골라서 읽기</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span>기본 포인트</span>
                    <span className="font-semibold">1,000P</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>KT 고객 추가</span>
                    <span className="font-semibold text-pink-600">+5,000P</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>평균 도서 가격</span>
                    <span className="font-semibold">250-500P</span>
                  </div>
                </div>
                
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  무료 시작하기
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Subscription */}
            <Card className="relative border-2 border-pink-500">
              <Badge className="absolute top-4 right-4 bg-pink-500">인기</Badge>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">월 정액 구독</h3>
                  <p className="text-gray-600">무제한 독서의 자유</p>
                </div>
                
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-pink-600 mb-2">
                    9,900원
                    <span className="text-lg text-gray-600 font-normal">/월</span>
                  </div>
                  <p className="text-sm text-gray-600">모든 도서 무제한 이용</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">전체 도서 무제한 열람</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">신작 도서 우선 접근</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm">개인 맞춤 추천</span>
                  </div>
                </div>
                
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  구독 시작하기
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">당신의 이야기를 세상에 전하세요</h2>
          <p className="text-xl mb-8 opacity-90">AI 기술로 더욱 쉬워진 출판, 지금 시작해보세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              작가 지원하기
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              서비스 둘러보기
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
