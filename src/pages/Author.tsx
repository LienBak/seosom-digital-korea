
import { useState } from 'react';
import { 
  PenTool, 
  BarChart3, 
  BookOpen, 
  Eye, 
  DollarSign, 
  Upload, 
  Save, 
  Send, 
  Image, 
  Settings,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';

const Author = () => {
  const [currentContent, setCurrentContent] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  // Mock author data
  const authorStats = {
    publishedBooks: 12,
    totalViews: 245690,
    totalEarnings: 1250000,
    monthlyViews: 15420,
    averageRating: 4.6,
    subscribers: 892
  };

  const recentBooks = [
    {
      id: 1,
      title: '디지털 시대의 인문학',
      status: 'published',
      views: 15420,
      rating: 4.8,
      earnings: 285000,
      publishedDate: '2024-05-15',
      category: '인문학'
    },
    {
      id: 2,
      title: '현대 사회의 이해',
      status: 'review',
      views: 0,
      rating: 0,
      earnings: 0,
      submittedDate: '2024-06-20',
      category: '사회학'
    },
    {
      id: 3,
      title: '미래의 교육',
      status: 'draft',
      views: 0,
      rating: 0,
      earnings: 0,
      lastModified: '2024-06-25',
      category: '교육'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-500">출간</Badge>;
      case 'review':
        return <Badge className="bg-yellow-500">심사중</Badge>;
      case 'draft':
        return <Badge className="bg-gray-500">초안</Badge>;
      default:
        return <Badge>알 수 없음</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'review':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'draft':
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
      default:
        return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">작가 대시보드</h1>
            <p className="text-gray-600">창작과 수익을 한눈에 관리하세요</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">출간 도서</p>
                    <p className="text-2xl font-bold text-gray-900">{authorStats.publishedBooks}</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-amber-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">총 조회수</p>
                    <p className="text-2xl font-bold text-gray-900">{authorStats.totalViews.toLocaleString()}</p>
                  </div>
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">총 수익</p>
                    <p className="text-2xl font-bold text-gray-900">₩{authorStats.totalEarnings.toLocaleString()}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">개요</TabsTrigger>
              <TabsTrigger value="editor">작성</TabsTrigger>
              <TabsTrigger value="books">작품 관리</TabsTrigger>
              <TabsTrigger value="profile">프로필</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Performance Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      월간 성과
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">이번 달 조회수</span>
                        <span className="font-semibold">{authorStats.monthlyViews.toLocaleString()}</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">평균 평점</span>
                        <span className="font-semibold">{authorStats.averageRating}/5.0</span>
                      </div>
                      <Progress value={92} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">구독자 수</span>
                        <span className="font-semibold">{authorStats.subscribers}</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>최근 활동</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">새 리뷰 수신</p>
                          <p className="text-xs text-gray-600">2시간 전</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">도서 조회수 1,000회 달성</p>
                          <p className="text-xs text-gray-600">5시간 전</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">AI 커버 생성 완료</p>
                          <p className="text-xs text-gray-600">1일 전</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Editor Tab */}
            <TabsContent value="editor" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PenTool className="mr-2 h-5 w-5" />
                    웹 에디터
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="book-title">도서 제목</Label>
                        <Input id="book-title" placeholder="제목을 입력하세요" />
                      </div>
                      <div>
                        <Label htmlFor="book-category">카테고리</Label>
                        <Input id="book-category" placeholder="카테고리를 입력하세요" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="content">내용</Label>
                      <Textarea
                        id="content"
                        placeholder="여기서 당신의 이야기를 써보세요..."
                        value={currentContent}
                        onChange={(e) => setCurrentContent(e.target.value)}
                        className="min-h-[400px] resize-none"
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        글자 수: {currentContent.length}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <Save className="mr-2 h-4 w-4" />
                          임시저장
                        </Button>
                        <Button variant="outline">
                          <Image className="mr-2 h-4 w-4" />
                          AI 커버 생성
                        </Button>
                        <Button className="bg-amber-600 hover:bg-amber-700">
                          <Send className="mr-2 h-4 w-4" />
                          출간 신청
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Books Management Tab */}
            <TabsContent value="books" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>작품 관리</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBooks.map((book) => (
                      <div key={book.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(book.status)}
                          <div>
                            <h3 className="font-semibold">{book.title}</h3>
                            <p className="text-sm text-gray-600">{book.category}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          {getStatusBadge(book.status)}
                          <div className="text-right text-sm">
                            <p className="font-semibold">{book.views.toLocaleString()} 조회</p>
                            <p className="text-gray-600">₩{book.earnings.toLocaleString()}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            관리
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    작가 프로필
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                        <Settings className="h-8 w-8 text-gray-400" />
                      </div>
                      <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        프로필 사진 업로드
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="author-name">작가명</Label>
                        <Input id="author-name" placeholder="작가명을 입력하세요" />
                      </div>
                      <div>
                        <Label htmlFor="specialty">전문 분야</Label>
                        <Input id="specialty" placeholder="전문 분야를 입력하세요" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="bio">작가 소개</Label>
                      <Textarea
                        id="bio"
                        placeholder="자신을 소개해 주세요..."
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="portfolio">포트폴리오 링크</Label>
                      <Input id="portfolio" placeholder="포트폴리오 URL을 입력하세요" />
                    </div>
                    
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      프로필 업데이트
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Author;
