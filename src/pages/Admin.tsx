
import { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Eye,
  Settings,
  BarChart3,
  Award,
  UserCheck,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';

const Admin = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [reviewComment, setReviewComment] = useState('');

  // Mock admin data
  const adminStats = {
    totalUsers: 45230,
    activeAuthors: 1245,
    totalBooks: 2847,
    monthlyRevenue: 85600000,
    pendingReviews: 23,
    newSignups: 456
  };

  const pendingApplications = [
    {
      id: 1,
      name: '김신규',
      email: 'kim@example.com',
      specialty: '소설',
      experience: '5년',
      portfolio: 'https://portfolio.com/kim',
      appliedDate: '2024-06-25',
      status: 'pending'
    },
    {
      id: 2,
      name: '이작가',
      email: 'lee@example.com',
      specialty: '에세이',
      experience: '3년',
      portfolio: 'https://portfolio.com/lee',
      appliedDate: '2024-06-24',
      status: 'pending'
    },
    {
      id: 3,
      name: '박시인',
      email: 'park@example.com',
      specialty: '시',
      experience: '7년',
      portfolio: 'https://portfolio.com/park',
      appliedDate: '2024-06-23',
      status: 'pending'
    }
  ];

  const pendingContent = [
    {
      id: 1,
      title: '현대 사회의 이해',
      author: '김작가',
      category: '사회학',
      submittedDate: '2024-06-20',
      wordCount: 45000,
      status: 'review'
    },
    {
      id: 2,
      title: '디지털 마케팅 전략',
      author: '이마케터',
      category: '마케팅',
      submittedDate: '2024-06-19',
      wordCount: 38000,
      status: 'review'
    },
    {
      id: 3,
      title: '요리의 과학',
      author: '박요리',
      category: '요리',
      submittedDate: '2024-06-18',
      wordCount: 52000,
      status: 'review'
    }
  ];

  const userAnalytics = [
    { month: '1월', users: 3420, revenue: 68400000 },
    { month: '2월', users: 3650, revenue: 73000000 },
    { month: '3월', users: 3980, revenue: 79600000 },
    { month: '4월', users: 4210, revenue: 84200000 },
    { month: '5월', users: 4350, revenue: 87000000 },
    { month: '6월', users: 4530, revenue: 90600000 }
  ];

  const bestsellers = [
    { id: 1, title: '디지털 시대의 인문학', author: '김작가', views: 15420, rating: 4.8 },
    { id: 2, title: '인공지능과 윤리', author: '한기술', views: 18900, rating: 4.9 },
    { id: 3, title: '미래의 도시', author: '이미래', views: 12300, rating: 4.7 },
    { id: 4, title: '현대 미술의 이해', author: '정미술', views: 11200, rating: 4.6 },
    { id: 5, title: '음식의 철학', author: '최요리', views: 9800, rating: 4.5 }
  ];

  const handleApproveApplication = (id: number) => {
    console.log('작가 승인:', id);
    // 실제 구현에서는 API 호출
  };

  const handleRejectApplication = (id: number) => {
    console.log('작가 거절:', id, '사유:', reviewComment);
    // 실제 구현에서는 API 호출
  };

  const handleApproveContent = (id: number) => {
    console.log('콘텐츠 승인:', id);
    // 실제 구현에서는 API 호출
  };

  const handleRejectContent = (id: number) => {
    console.log('콘텐츠 거절:', id, '사유:', reviewComment);
    // 실제 구현에서는 API 호출
  };

  const handleDesignateBestseller = (id: number) => {
    console.log('베스트셀러 지정:', id);
    // 실제 구현에서는 API 호출
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">관리자 대시보드</h1>
            <p className="text-gray-600">플랫폼 전체를 효율적으로 관리하세요</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">총 사용자</p>
                    <p className="text-lg font-bold text-gray-900">{adminStats.totalUsers.toLocaleString()}</p>
                  </div>
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">활동 작가</p>
                    <p className="text-lg font-bold text-gray-900">{adminStats.activeAuthors.toLocaleString()}</p>
                  </div>
                  <UserCheck className="h-6 w-6 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">총 도서</p>
                    <p className="text-lg font-bold text-gray-900">{adminStats.totalBooks.toLocaleString()}</p>
                  </div>
                  <BookOpen className="h-6 w-6 text-amber-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">월 수익</p>
                    <p className="text-lg font-bold text-gray-900">₩{Math.floor(adminStats.monthlyRevenue / 1000000)}M</p>
                  </div>
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">심사 대기</p>
                    <p className="text-lg font-bold text-gray-900">{adminStats.pendingReviews}</p>
                  </div>
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600">신규 가입</p>
                    <p className="text-lg font-bold text-gray-900">{adminStats.newSignups}</p>
                  </div>
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">개요</TabsTrigger>
              <TabsTrigger value="authors">작가 관리</TabsTrigger>
              <TabsTrigger value="content">콘텐츠 관리</TabsTrigger>
              <TabsTrigger value="bestsellers">베스트셀러</TabsTrigger>
              <TabsTrigger value="analytics">분석</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      월별 사용자 증가
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userAnalytics.slice(-3).map((data, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm font-medium">{data.month}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">{data.users.toLocaleString()}명</span>
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${(data.users / 5000) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>시스템 모니터링</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">서버 성능</span>
                        <Badge className="bg-green-500">정상</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">데이터베이스</span>
                        <Badge className="bg-green-500">정상</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">API 응답시간</span>
                        <Badge className="bg-yellow-500">보통</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">스토리지 사용량</span>
                        <Badge className="bg-green-500">안정</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Authors Management Tab */}
            <TabsContent value="authors" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>작가 신청 승인</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>이름</TableHead>
                        <TableHead>전문 분야</TableHead>
                        <TableHead>경력</TableHead>
                        <TableHead>신청일</TableHead>
                        <TableHead>포트폴리오</TableHead>
                        <TableHead>상태</TableHead>
                        <TableHead>관리</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingApplications.map((application) => (
                        <TableRow key={application.id}>
                          <TableCell className="font-medium">{application.name}</TableCell>
                          <TableCell>{application.specialty}</TableCell>
                          <TableCell>{application.experience}</TableCell>
                          <TableCell>{application.appliedDate}</TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline" asChild>
                              <a href={application.portfolio} target="_blank" rel="noopener noreferrer">
                                <Eye className="h-3 w-3 mr-1" />
                                보기
                              </a>
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-yellow-500">대기중</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    승인
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>작가 신청 승인</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <p>"{application.name}" 작가의 신청을 승인하시겠습니까?</p>
                                    <div className="flex space-x-2">
                                      <Button 
                                        className="bg-green-600 hover:bg-green-700"
                                        onClick={() => handleApproveApplication(application.id)}
                                      >
                                        승인
                                      </Button>
                                      <Button variant="outline">취소</Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="destructive">
                                    <XCircle className="h-3 w-3 mr-1" />
                                    거절
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>작가 신청 거절</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div>
                                      <Label htmlFor="reject-reason">거절 사유</Label>
                                      <Textarea
                                        id="reject-reason"
                                        placeholder="거절 사유를 입력하세요..."
                                        value={reviewComment}
                                        onChange={(e) => setReviewComment(e.target.value)}
                                      />
                                    </div>
                                    <div className="flex space-x-2">
                                      <Button 
                                        variant="destructive"
                                        onClick={() => handleRejectApplication(application.id)}
                                      >
                                        거절
                                      </Button>
                                      <Button variant="outline">취소</Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Content Management Tab */}
            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>콘텐츠 심사</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>제목</TableHead>
                        <TableHead>작가</TableHead>
                        <TableHead>카테고리</TableHead>
                        <TableHead>제출일</TableHead>
                        <TableHead>분량</TableHead>
                        <TableHead>상태</TableHead>
                        <TableHead>관리</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingContent.map((content) => (
                        <TableRow key={content.id}>
                          <TableCell className="font-medium">{content.title}</TableCell>
                          <TableCell>{content.author}</TableCell>
                          <TableCell>{content.category}</TableCell>
                          <TableCell>{content.submittedDate}</TableCell>
                          <TableCell>{content.wordCount.toLocaleString()}자</TableCell>
                          <TableCell>
                            <Badge className="bg-yellow-500">심사중</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <FileText className="h-3 w-3 mr-1" />
                                미리보기
                              </Button>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                승인
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="h-3 w-3 mr-1" />
                                거절
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bestsellers Tab */}
            <TabsContent value="bestsellers" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>베스트셀러 관리</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>순위</TableHead>
                        <TableHead>제목</TableHead>
                        <TableHead>작가</TableHead>
                        <TableHead>조회수</TableHead>
                        <TableHead>평점</TableHead>
                        <TableHead>관리</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bestsellers.map((book, index) => (
                        <TableRow key={book.id}>
                          <TableCell>
                            <div className="flex items-center">
                              <span className="font-bold text-lg">{index + 1}</span>
                              {index < 3 && <Award className="h-4 w-4 ml-1 text-yellow-500" />}
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">{book.title}</TableCell>
                          <TableCell>{book.author}</TableCell>
                          <TableCell>{book.views.toLocaleString()}</TableCell>
                          <TableCell>{book.rating}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                size="sm" 
                                className="bg-yellow-600 hover:bg-yellow-700"
                                onClick={() => handleDesignateBestseller(book.id)}
                              >
                                <Award className="h-3 w-3 mr-1" />
                                베스트셀러 지정
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>사용자 분석</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userAnalytics.map((data, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm font-medium">{data.month}</span>
                          <div className="text-right">
                            <div className="text-sm font-semibold">{data.users.toLocaleString()}명</div>
                            <div className="text-xs text-gray-600">₩{Math.floor(data.revenue / 1000000)}M</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>포인트 관리</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="point-amount">지급 포인트</Label>
                        <Input id="point-amount" type="number" placeholder="포인트 수량" />
                      </div>
                      <div>
                        <Label htmlFor="point-reason">지급 사유</Label>
                        <Input id="point-reason" placeholder="지급 사유를 입력하세요" />
                      </div>
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">
                        포인트 지급
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
