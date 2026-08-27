"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Calendar, BookOpen, Briefcase, Award, Code, Globe, Server, Cloud, Brain, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header / Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 rounded-full bg-white/20 p-2 flex-shrink-0"
          >
            <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden relative border-4 border-white shadow-lg">
               {/* Note: In a real project, replace this with an actual photo path in public folder */}
               <img src="https://avatars.githubusercontent.com/u/154784347?v=4" alt="Nguyen Van Hoang" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Nguyen Van Hoang</h1>
            <h2 className="text-xl md:text-2xl text-blue-200 mb-6 font-medium">Software Engineer / AI Enthusiast</h2>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full">
                <MapPin size={16} /> Da Nang & Hue, Vietnam
              </div>
              <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full">
                <Calendar size={16} /> 2005-01-27
              </div>
              <a href="https://github.com/Vcoch27" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full hover:bg-black/40 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> github.com/Vcoch27
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-5xl mx-auto flex overflow-x-auto">
          {['about', 'skills', 'experience', 'projects'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-semibold capitalize whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-12 px-6">
        
        {/* ABOUT SECTION */}
        {activeTab === 'about' && (
          <motion.div {...fadeIn} className="space-y-12">
            <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <User className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold">Giới Thiệu Bản Thân (Self PR)</h3>
              </div>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Điểm mạnh của tôi là <strong>"Khả năng nhìn nhận hệ thống tổng thể, phân tích vấn đề và đề xuất giải pháp tối ưu nhất để thực thi"</strong>. 
                  Hiện tại, tôi đang là sinh viên Khoa Khoa học Máy tính tại Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (VKU).
                </p>
                <p>
                  Khả năng này được thể hiện rõ nhất qua dự án "AI-Content Detection". Tôi đã đóng vai trò cốt lõi từ việc lập kế hoạch, 
                  thiết kế model, xây dựng Backend (Java Spring Boot), kết nối Frontend đến việc triển khai (Deploy) lên server. 
                </p>
                <p>
                  Trong quá trình phát triển nhóm, khi gặp vấn đề về "code style không đồng nhất" và "phân chia công việc" do áp dụng AI Agent, 
                  tôi đã chủ động nghiên cứu, đề xuất quy tắc chuẩn cho nhóm và thiết kế các prompt rule chi tiết để tối ưu hóa sự hỗ trợ của AI. 
                  Tôi luôn tâm niệm không phụ thuộc hoàn toàn vào AI, mà phải dùng kiến thức lập trình của mình để kiểm soát và điều chỉnh.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold">Lý Do Ứng Tuyển (Motivation)</h3>
              </div>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Tôi mong muốn dùng công nghệ để giải quyết các vấn đề thực tiễn của xã hội. Tôi đặc biệt ấn tượng với văn hóa 
                  chất lượng "chuẩn Nhật Bản" và định hướng sử dụng AI, chuyển đổi số (DX) của các công ty công nghệ tiên tiến.
                </p>
                <p>
                  Mục tiêu ngắn hạn của tôi là rèn luyện kỹ năng lập trình, cải thiện năng lực giao tiếp tiếng Nhật (hiện đang học N3) 
                  để làm việc trực tiếp với khách hàng. Mục tiêu dài hạn là trở thành <strong>Tech Lead</strong>, đóng vai trò cầu nối Nhật - Việt (Bridge SE), 
                  dẫn dắt các dự án phát triển hệ thống thay vì chỉ là một người thực thi yêu cầu đơn thuần.
                </p>
              </div>
            </section>
          </motion.div>
        )}

        {/* SKILLS SECTION */}
        {activeTab === 'skills' && (
          <motion.div {...fadeIn} className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Kỹ Năng & Công Nghệ (Skills)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  <Code size={24} />
                  <h4 className="text-lg font-bold">Programming</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML/CSS'].map(skill => (
                    <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-indigo-600">
                  <Server size={24} />
                  <h4 className="text-lg font-bold">Backend & Frameworks</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'Next.js', 'React', 'RESTful API', 'Authentication'].map(skill => (
                    <span key={skill} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-cyan-600">
                  <Cloud size={24} />
                  <h4 className="text-lg font-bold">Infra & DevOps</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['AWS (EC2, S3)', 'Docker', 'Git / GitHub', 'Linux', 'GitHub Actions (CI/CD)'].map(skill => (
                    <span key={skill} className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-md text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 text-purple-600">
                  <Brain size={24} />
                  <h4 className="text-lg font-bold">AI Driven & Soft Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['ChatGPT', 'Gemini', 'GitHub Copilot', 'AI Agent Prompting'].map(skill => (
                    <span key={skill} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-md text-sm font-medium">{skill}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Khả năng phân tích logic, tư duy phản biện và kinh nghiệm "báo cáo - liên lạc - bàn bạc" (Horenso) trong làm việc nhóm.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mt-6">
               <div className="flex items-center gap-3 mb-4 text-red-500">
                  <Globe size={24} />
                  <h4 className="text-lg font-bold">Ngoại Ngữ (Languages)</h4>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium text-gray-800">Tiếng Nhật (Japanese):</span>
                  <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-bold border border-red-200">Đang học N3</span>
                </div>
            </div>
          </motion.div>
        )}

        {/* EXPERIENCE & EDUCATION */}
        {activeTab === 'experience' && (
          <motion.div {...fadeIn} className="space-y-12">
            
            {/* Experience */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold">Kinh Nghiệm Làm Việc (Experience)</h3>
              </div>
              <div className="relative border-l-2 border-blue-200 pl-8 pb-4 ml-4">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                <h4 className="text-xl font-bold text-gray-800">Software Engineer Intern</h4>
                <div className="text-blue-600 font-medium mb-2">CodeGym</div>
                <div className="text-sm text-gray-500 mb-3">Tháng 06/2026 - Tháng 08/2026</div>
                <p className="text-gray-600">
                  Tham gia thực tập, rèn luyện kỹ năng phát triển phần mềm và làm việc trong môi trường dự án thực tế.
                </p>
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold">Học Vấn (Education)</h3>
              </div>
              <div className="relative border-l-2 border-blue-200 pl-8 pb-4 ml-4">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                <h4 className="text-xl font-bold text-gray-800">Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (VKU)</h4>
                <div className="text-blue-600 font-medium mb-2">Ngành: Khoa học Máy tính - Kỹ thuật Phần mềm</div>
                <div className="text-sm text-gray-500 mb-3">Tháng 09/2023 - Dự kiến tốt nghiệp Tháng 06/2028</div>
                <p className="text-gray-600">
                  Tập trung vào nền tảng kiến trúc phần mềm, phát triển backend, cơ sở dữ liệu và ứng dụng AI vào thực tế.
                </p>
              </div>
            </section>
          </motion.div>
        )}

        {/* PROJECTS & ACTIVITIES */}
        {activeTab === 'projects' && (
          <motion.div {...fadeIn} className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Dự Án Nổi Bật & Hoạt Động (Projects & Activities)</h3>
            
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800">AI-Content Detection</h4>
                  <a href="https://github.com/AI-Content-Detection" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm font-medium mt-1 inline-block">
                    github.com/AI-Content-Detection
                  </a>
                </div>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold">Fullstack / AI</span>
              </div>
              <p className="text-gray-600 mb-4">
                Hệ thống kiểm tra hình ảnh và video xem có phải do AI tạo ra hay không, giúp ngăn chặn vấn nạn tin giả trên mạng xã hội. 
                Dự án đạt điểm đánh giá kỹ thuật 10/10 và điểm ý tưởng 9.0/10 tại trường.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Java Spring Boot</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">REST API</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">AI Integration</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Deployment</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-amber-500" size={28} />
                <h3 className="text-2xl font-bold">Cuộc thi & Giải thưởng (Contests)</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "English Talent", year: "06/2024", org: "VKU" },
                  { name: "Best Web Design", year: "06/2024", org: "VKU" },
                  { name: "Robocar", year: "06/2025", org: "VKU" },
                  { name: "AI For Life", year: "11/2025", org: "VKU" }
                ].map((contest, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="bg-amber-100 text-amber-600 p-3 rounded-full">
                      <Award size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800">{contest.name}</h5>
                      <div className="text-xs text-gray-500">{contest.year} | {contest.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2026 Nguyen Van Hoang. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
